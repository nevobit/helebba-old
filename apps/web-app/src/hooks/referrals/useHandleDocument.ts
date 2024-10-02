import { useState } from "react";
import { v4 as uuid } from "uuid";

interface Element {
  id: string;
  concept: string;
  description: string;
  amount: number;
  price: number;
  tax: number;
  total: number;
}

const calculateSubtotal = (elements: Element[]) => {
  return elements.reduce((acc, element) => {
    return acc + element.price * element.amount;
  }, 0);
};

const calculateTaxesTotal = (elements: Element[]) => {
  return elements.reduce((acc, element) => {
    return acc + ((element.price * element.tax) / 100) * element.amount;
  }, 0);
};

const useHandleDocument = () => {
  const emptyElement: Element = {
    id: uuid(),
    concept: "",
    description: "",
    amount: 1,
    tax: 0,
    price: 0,
    total: 0,
  };
  const [elements, setElements] = useState<Element[]>([emptyElement]);

  const addElement = () => {
    setElements((prev) => [...prev, emptyElement]);
  };

  const removeElement = (elementId: string) => {
    if(elements.length <= 1)
      return;
    setElements((prev) => prev.filter((element) => element.id !== elementId));
  };

  const editElement = (elementId: string, value: string, name: string) => {
    setElements((prev) => {
      return prev.map((element) => {
        if (element.id === elementId) {
          return { ...element, [name]: value };
        }
        return element;
      });
    });
  };

  const subtotal = calculateSubtotal(elements);
  const taxesTotal = calculateTaxesTotal(elements);
  const total = subtotal + taxesTotal;

  return {
    elements,
    removeElement,
    addElement,
    editElement,
    total,
    subtotal,
    taxesTotal
  };
};

export default useHandleDocument;
