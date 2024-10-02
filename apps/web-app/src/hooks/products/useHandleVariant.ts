import { ProductVariant } from "@helebba/entities";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const useHandleVariant = () => {
  const emptyElement: ProductVariant = {
    id: uuid(),
    name: "",
    sku: "",
    barcode: "",
    factoryCode: "",
    price: 0,
    cost: 0,
    color: "",
    size: "",
    purchasePrice: 0,
    weight: 0,
    stock: 0,
  };
  const [elements, setElements] = useState<ProductVariant[]>([emptyElement]);

  const addElement = () => {
    setElements((prev) => [...prev, emptyElement]);
  };

  const initialElements = (newElements: ProductVariant[]) => {
    setElements(newElements);
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

  return {
    elements,
    removeElement,
    addElement,
    editElement,
    initialElements
  };
};