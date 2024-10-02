import { MoreVertical } from 'lucide-react'
import styles from './ButtonOptions.module.css'
import { useEffect, useRef, useState } from 'react';
import { Modal } from '@/containers';
import Input from './Input';

interface Props {
  children?: React.ReactNode;
  no_border?: boolean;
}

const ButtonOptionsImport = ({ no_border }: Props) => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const menuRef = useRef<HTMLDivElement>(null);

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
  //  <div className={styles.menu} ref={menuRef}>

  //    {isMenuOpen && (
  //      <ul className={styles.menuOptions}>
  //         {children? 
  //         ( children ): 
  //         (
  //        <li><UploadCloud size={16} /> Importar contactos</li>             
  //         )
  //       }
  //      </ul>
  //    )}
  //    {/* <Input type="file" onChange={handleFileUpload} /> */}
  //  </div>
  <Modal>
  <Modal.Open opens="import-form">
   <button onClick={handleButtonClick} className={no_border ? styles.alter_menu : '' }> 
        <MoreVertical  size={18}/>
    </button>
  </Modal.Open>
  <Modal.Window width={600} title={'Importar Contactos'} name="import-form">
    <>
      <p style={{
        fontSize: 14,
        color: "rgba(0,0,0,.7)"
      }} ><a style={{
        color: "var(--main-color)",
        cursor: "pointer"
      }} href="/importar_contactos.xlsx" download> Descarga una muestra del archivo XLSX</a> para ver un ejemplo del formato requerido</p>
      <Input />
    </>
    {/* <ContactFrom /> */}
  </Modal.Window>
</Modal>
 );
}

export default ButtonOptionsImport
