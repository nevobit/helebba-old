import { InputHTMLAttributes } from 'react';
import styles from './Switch.module.css';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {}

const Switch = ({ className, ...rest }: SwitchProps) => {
  return (
    <label className={`${styles.switch} ${className}`}>
      <input type="checkbox" id="toggle" {...rest} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;
