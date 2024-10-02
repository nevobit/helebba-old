import ButtonOptionsImport from '@/components/Shared/ButtonOptionsImport';
import styles from './ScreenHeader.module.css'
interface Props {
 title: string
 letter?: string;
 setOpen?: () => void;
 defaultOptions?: boolean;
 children?: React.ReactNode;
 style?: React.CSSProperties
}

const ScreenHeader = ({title, letter, defaultOptions, children, style}: Props) => {
  
  
  return (
   <div className={styles.header} style={style}>
   <h2>{title}{letter? letter == 's'? 's': letter: ""}</h2>
   <div className={styles.options}>
   {defaultOptions && (  
    <ButtonOptionsImport />
    

    )}
    {children}
   

    </div>
 </div>
  )
}

export default ScreenHeader
