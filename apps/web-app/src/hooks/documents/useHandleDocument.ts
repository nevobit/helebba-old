import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export interface Element {
  id: string;
  concept: string;
  description: string;
  amount: number;
  price: number;
  tax: number;
  total: number;
  productId?: string;
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
  const initialElements = (newElements: Element[]) => {
    setElements(newElements);
  };

  const emptyElement: Element = {
    id: uuid(),
    concept: '',
    description: '',
    amount: 1,
    tax: 0,
    price: 0,
    total: 0,
    productId: ""
  };
  const [elements, setElements] = useState<Element[]>([emptyElement]);

  const addElement = () => {
    setElements((prev) => [...prev, emptyElement]);
  };

  const removeElement = (elementId: string) => {
    if (elements.length <= 1) return;
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

  const editComplexElement = (elementId: string, concept: string, price: number, productId: string ) => {
    setElements((prev) => {
      return prev.map((element) => {
        if (element.id === elementId) {
          return { ...element, concept: concept, price: price, productId: productId };
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
    taxesTotal,
    initialElements,
    editComplexElement
  };
};

export default useHandleDocument;
