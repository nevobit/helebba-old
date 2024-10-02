import styles from './HeaderLink.module.css'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface Path{
  name: string,
  path: string
}

interface Props {
  name: string;  
  path: string;
  subPaths?: Path[]
  setActive: React.Dispatch<React.SetStateAction<string>>;
  active: string;
}


const HeaderLink = ({name, path, subPaths, setActive,  active}: Props) => {
 const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado
 const menuRef = useRef<HTMLDivElement>(null);
 
 return (
   <div onClick={() => setActive(name)}  onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}  className={styles.menu} ref={menuRef}>
     <Link to={path} className={active == name ? styles.active : styles.span}>{name}</Link>
     {isMenuOpen && subPaths && (
       <ul className={styles.menuOptions}  >
        {subPaths?.map(({name, path}) => (
         <li key={name}><Link to={path}>{name}</Link></li>          
        ))}
       </ul>
     )}
   </div>
 );
}

export default HeaderLink
