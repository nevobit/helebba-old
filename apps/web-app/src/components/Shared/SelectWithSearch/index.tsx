import React, { useEffect, useState } from 'react';
import styles from './Select.module.css';
import { ChevronDown } from 'lucide-react';

interface Option {
  id: string;
  name: string;
}

interface SelectWithSearchProps {
  value?: unknown;
  options: Option[];
  onChange: (id: string) => void;
}

const SelectWithSearch: React.FC<SelectWithSearchProps> = ({
  value,
  options,
  onChange,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOptionText, setSelectedOptionText] = useState("");
  const [open, setOpen] = useState(false);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionSelect = (name: string, uuid: string) => {
    setOpen(false);
    setSelectedOptionText(name);
    onChange(uuid);
  };

  const filteredOptions = options?.filter(
    (option: { name: string }) => option?.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    if(value && options){
      const element = options.find((option : { id: string, name: string }) => option.id == value)
      setSelectedOptionText(element?.name || "");
    }

  }, [options])
  return (
    <div className={styles.select_container}>
      <div className={styles.select_element}>
        <span onClick={() => setOpen(!open)}>
          {selectedOptionText.length > 0
            ? selectedOptionText
            : 'Seleccionar contacto'}{' '}
          <ChevronDown size={16} />{' '}
        </span>
        {open && (
          <div className={styles.options_container}>
            <input
              type="text"
              className={styles.search_input}
              placeholder="Buscar..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className={styles.options}>
              {filteredOptions?.map((option) => (
                <span
                  onClick={() => handleOptionSelect(option.name, option.id)}
                  key={option.id}>
                  {option.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectWithSearch;
