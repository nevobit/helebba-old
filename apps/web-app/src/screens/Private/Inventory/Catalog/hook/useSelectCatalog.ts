import { useState } from "react";

export const useSelectCatalog = () => {
  const [categorySelection, setCategorySelection] = useState<string[]>([]);
  
  const handleCategorySelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCategorySelection([...categorySelection, selectedCategory]); 
    } else {
      setCategorySelection(categorySelection.filter(category => category !== selectedCategory));
    }
  };

  return {
    categorySelection,
    handleCategorySelectionChange
  }
}
