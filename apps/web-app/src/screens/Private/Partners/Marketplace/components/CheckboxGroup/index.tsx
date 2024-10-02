import styles from "./Group.module.css";

interface CheckboxGroupProps {
    title: string;
    items: string[];
    selectedItems: string[];
    onItemCheck: (item: string) => void;
  }

const CheckboxGroup = ({ title, items, selectedItems, onItemCheck }: CheckboxGroupProps) => {
  return (
    <div className="checkbox-group">
    <div className="group-header" >
      <span className={styles.title} >{title}</span>
    </div>
      <div>
        {items.map(item => (
          <label key={item} className={styles.item}>
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => onItemCheck(item)}
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
  </div>
  )
}

export default CheckboxGroup