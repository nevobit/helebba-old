import React, { KeyboardEvent, useState } from 'react';
import styles from './Tags.module.css';
import { X } from 'lucide-react';
import { Input } from '..';

interface Props {
    title: string;
    onChanged: (strings: string[]) => void;
  }
  

const TagsInput = ({
    title,
    onChanged
}: Props) => {
  const [tags, setTags] = useState<string[]>([])
  const [tag, setTag] = useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value); 
  };

  const addElement = () => {
    if (tag.trim() !== '') {
        setTags((prev) => [...prev, tag.trim()]); 
        setTag('');
    }
  };

  const removeElement = (index: number) => {
    const nuevoArray = [...tags];
    nuevoArray.splice(index, 1); 
    setTags(nuevoArray); 
    onChanged(tags);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault(); 
    if (event.key === ' ') {
      addElement(); 
      setTag('');
      onChanged(tags);
    }
  };

  React.useEffect(() => {
    onChanged(tags);
  }, [tags, onChanged]);
  return (
    <div className={styles.select_container}>
            <Input
              type="text"
              className={styles.search_input}
              placeholder={"Agregar " + title}
              onChange={handleChange} 
              value={tag}
              onKeyUp={handleKeyPress} 
            />

      <ul className={styles.list}> 
        {tags.map((tag, index) => (
            <li key={tag + index} >
            <span>{tag}</span>
            <button onClick={() => removeElement(index)} ><X size={18} /></button>
            </li>
        ))}
    </ul>
    </div>
  );
};

export default TagsInput;
