import React, { useState } from 'react';
import styles from './CategorySelector.module.css';
import { Category } from '@helebba/entities';
import { ChevronDown, ChevronUp } from 'lucide-react';


interface CategorySelectorProps {
  categories: Category[];
  onSelectCategory: (category: Category | null) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  onSelectCategory,
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const handleToggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectCategory = (category: Category) => {
    onSelectCategory(category);
    setIsOpen(false);
  };
  return (
    <div className={styles.categorySelector}>
      <div className={styles.selectBox} onClick={handleToggleDropdown}>
        <span className={styles.placeholder} >{'Selecciona una categoría'}</span>
        <span className={styles.arrow}>{isOpen ? <ChevronUp size={18} color='rgba(0,0,0,0.7)'  />  : <ChevronDown size={18}  color='rgba(0,0,0,0.7)' />}</span>
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {/* <div className={styles.newCategory}>
            <CreateCategory text="Nueva categoría" />
          </div> */}
          {categories.map((category) => (
            <div
              key={category.id}
              className={styles.categoryItem}
              onClick={() => handleSelectCategory(category)}
            >
              {category.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySelector;