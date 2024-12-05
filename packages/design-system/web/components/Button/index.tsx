import React from 'react';
import { classNames } from '../../../utilities';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | string[] | React.ReactNode;
  size?: 'micro' | 'slim' | 'medium' | 'large';
  textAlign?: 'left' | 'right' | 'center' | 'start' | 'end';
  fullWidth?: boolean;
  disclosure?: 'down' | 'up' | 'select' | boolean;
  image?: string;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  imagePosition?: 'left' | 'right';
  tone?: 'critical' | 'success';
  variant?: 'plain' | 'primary' | 'secondary' | 'tertiary' | 'monochromePlain' | 'monochrome';
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  disabled,
  loading,
  variant,
  tone,
  icon,
  iconPosition = 'left',
  image,
  imagePosition = 'left',
  children,
  fullWidth,
  className: externalClassName,
  ...rest
}, ref) => {
  const isDisabled = disabled || loading;

  const className = classNames(
    styles.button,
    isDisabled && styles.disabled,
    loading && styles.loading,
    fullWidth && styles.fullWidth,
    styles[`${variant}`],
    styles[`${tone}`],
    externalClassName
  );

  const commonProps = {
    className,
    ref,
    ...rest,
  };

  return (
    <button {...commonProps} disabled={isDisabled}>
      {image && imagePosition === 'left' && (
        <img src={image} alt="" className={styles.image} />
      )}
      {icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      {!loading ? children : <span className={styles.spinner} />}
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
      {image && imagePosition === 'right' && (
        <img src={image} alt="" className={styles.image} />
      )}
    </button>
  );
});

Button.displayName = 'Button';