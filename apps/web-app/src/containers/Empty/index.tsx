import styles from './Empty.module.css'
import { ReactNode } from 'react';

interface Props {
 title: string;
 copy: string;
 image: string | ReactNode;
 open?: () => void;
 button?: ReactNode
 importButton?: ReactNode
}

const Empty = ({button, importButton, title, copy, image}: Props) => {
  return (
   <div className={styles.container_empty}>
  {typeof image == "string" ? (
   <img src={image} alt={title} />
  ) : (
      <>{image}</>
  )}
   <h2>{title}</h2>
   <p>{copy}</p>
   <div className={styles.options}>
    { button }
    {importButton}
   </div>
  </div>
  )
}

export default Empty
