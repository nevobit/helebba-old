import { MoreVertical, UploadCloud } from 'lucide-react'
import styles from './ButtonOptions.module.css'
import { useEffect, useRef, useState } from 'react';

interface Props {
  children?: React.ReactNode;
  no_border?: boolean;
}

const ButtonOptions = ({ children, no_border }: Props) => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const menuRef = useRef<HTMLDivElement>(null);
//  const { createContact } = useCreateContact();
//  const { handleFileUpload } = useImport({ create: createContact });

 useEffect(() => {
   function handleOutsideClick(event: MouseEvent) {
     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
       setIsMenuOpen(false);
     }
   }

   document.addEventListener("click", handleOutsideClick);

   return () => {
     document.removeEventListener("click", handleOutsideClick);
   };
 }, [menuRef]);

 
 const handleButtonClick = () => {
   setIsMenuOpen(!isMenuOpen);
 };

 return (
   <div className={styles.menu} ref={menuRef}>
     <button onClick={handleButtonClick} className={no_border ? styles.alter_menu : '' }> 
        <MoreVertical  size={18}/>
     </button>
     {isMenuOpen && (
       <ul className={styles.menuOptions}>
          {children? 
          ( children ): 
          (
         <li><UploadCloud size={16} /> Importar contactos</li>             
          )
        }
       </ul>
     )}
     {/* <Input type="file" onChange={handleFileUpload} /> */}
   </div>
 );
}

export default ButtonOptions
