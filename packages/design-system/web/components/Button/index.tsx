import React, { ReactNode } from 'react'
import { classNames } from '../../../utilities'
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | string[] | ReactNode;
    size?: 'micro' | 'slim' | 'medium' | 'large';
    textAlign?: 'left' | 'right' | 'center' | 'start' | 'end';
    fullWidth?: boolean;
    disclosure?: 'down' | 'up' | 'select' | boolean;
    icon?: React.ReactElement;
    tone?: 'critical' | 'success';
    variant?: 'plain' | 'primary' | 'secondary' | 'tertiary' | 'monochromePlain';
    loading?: boolean;
}

export const Button = ({ disabled, size, loading, ...rest }: ButtonProps) => {
  const isDisabled = disabled || loading;

  const className = classNames(
    styles.button,
    isDisabled && styles.disabled,
    loading && styles.loading,
    size && styles[size],
  );

  const commonProps = {
    className,
    ...rest,
  };

  return <button {...commonProps}></button>;
};