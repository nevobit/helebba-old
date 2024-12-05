import { ReactNode } from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  className?: string;
  checkBox?: boolean;
}

const Input = ({ icon, className, checkBox = false, disabled = false, ...rest }: InputProps) => {
  return (
    <div className={`${styles.input} ${checkBox && styles.check} ${disabled && styles.disabled}`}>
      {icon && icon}
      <input
        {...rest}
        disabled={disabled}
        className={`${styles.input_element} ${
          className == 'none' && styles.input_none
        }`}
      />
    </div>
  );
};

export default Input;
