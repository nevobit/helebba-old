import { ReactNode } from 'react'
import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement>{
  icon?: ReactNode
  className?: string
  checkBox?: boolean
}

const Textarea = ({icon, className, checkBox=false, ...rest}: InputProps) => {
  return (
    <div className={`${styles.input} ${checkBox && styles.check}`}>
      {icon && icon }
      <textarea {...rest} className={`${styles.input_element} ${className == 'none' && styles.input_none}`}  />
    </div>
  )
}

export default Textarea