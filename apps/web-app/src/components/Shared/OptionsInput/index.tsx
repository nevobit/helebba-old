import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import styles from './OptionsInput.module.css';

interface OptionsInputProps {
    options: string[];
    setOptions: React.Dispatch<React.SetStateAction<string[]>>;
  }
  
  const OptionsInput: React.FC<OptionsInputProps> = ({ options, setOptions }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setOptions([...options, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeOption = (optionToRemove: string) => {
    setOptions(options.filter(option => option !== optionToRemove));
  };

  return (
    <div className={styles.optionsContainer}>
      <div className={styles.optionsList}>
        {options.map((option, index) => (
          <span key={index} className={styles.optionTag}>
            {option}
            <button onClick={() => removeOption(option)}>×</button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Opciones"
        className={styles.input}
      />
    </div>
  );
};

export default OptionsInput;