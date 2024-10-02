import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import styles from './Menus.module.css';
import { MoreVertical } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useOutsideClick } from '@/hooks';
import { Link } from 'react-router-dom';

// Definición de la interfaz Props para el componente principal Menus
interface Props {
  children: React.ReactNode;
}

// Definición de la interfaz ButtonProps para los componentes Button y Option
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

// Definición de la interfaz MenusContextProps para el contexto
interface MenusContextProps {
  open: (id: string) => void; // Función para abrir un menú
  close: () => void; // Función para cerrar el menú actual
  openId: string; // ID del menú actualmente abierto
  position: { x: number; y: number }; // Posición del menú en la pantalla
  setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>; // Función para establecer la posición del menú
}

// Valores iniciales para el contexto MenusContextProps
const intialValues: MenusContextProps = {
  open,
  close,
  setPosition: () => {},
  openId: '',
  position: { x: 0, y: 0 },
};

// Creación del contexto MenusContext con los valores iniciales
const MenusContext = createContext(intialValues);

// Componente principal Menus
const Menus = ({ children }: Props) => {
  const [openId, setOpenId] = useState(''); // Estado para el ID del menú abierto
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Estado para la posición del menú

  const close = () => setOpenId(''); // Función para cerrar el menú actual
  const open = setOpenId; // Función para abrir un menú

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}>
      {children}
    </MenusContext.Provider>
  );
};

// Componente Menu (envuelve los elementos del menú)
const Menu: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

// Componente Toggle (botón para abrir/cerrar el menú)
const Toggle = ({ id, children }: { id: string; children?: ReactNode }) => {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonElement = (event.target as HTMLElement).closest('button');
    if (!buttonElement) {
      return;
    }

    const rect = buttonElement.getBoundingClientRect();
    if (typeof setPosition === 'function') {
      setPosition(
        () =>
          ({
            x: window.innerWidth - rect.width - rect.x,
            y: rect.y + rect.height + 8,
          }) as { x: number; y: number },
      );
    }

    openId === '' || openId !== id ? open(id) : close();
  };

  return (
    <button className={styles.toggle} onClick={handleClick}>
      {children ? children : <MoreVertical size={20} />}
    </button>
  );
};

// Componente List (renderiza la lista de opciones del menú)
interface ListProps {
  id: string;
  children: ReactNode;
}

const List: React.FC<ListProps> = ({ id, children }) => {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick<HTMLUListElement>({
    handler: close,
    listenCapturing: true,
  });

  // Si el menú actual no está abierto, no se renderiza nada
  if (openId !== id) return null;

  // Se renderiza la lista de opciones del menú en el cuerpo del documento usando createPortal
  return createPortal(
    <ul
      className={styles.list}
      style={{ top: position && position.y, right: position && position.x }}
      ref={ref}>
      {children}
    </ul>,
    document.body,
  );
};

// Componente Button (botón dentro del menú)
const Button = ({ children, onClick, ...rest }: ButtonProps) => {
  const { close } = useContext(MenusContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e); // Ejecuta la función onClick pasada como prop
    close(); // Cierra el menú actual
  };

  return (
    <li>
      <button onClick={handleClick} className={styles.button} {...rest}>
        {children}
      </button>
    </li>
  );
};

// Componente Option (opción dentro del menú)
const Option = ({ children, onClick, ...rest }: ButtonProps) => {
  const { close } = useContext(MenusContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e); // Ejecuta la función onClick pasada como prop
    close(); // Cierra el menú actual
  };

  return (
    <li>
      <button onClick={handleClick} className={styles.option} {...rest}>
        {children}
      </button>
    </li>
  );
};

const LinkTo = ({
  to,
  children,
  ...rest
}: {
  to: string;
  children: ReactNode;
}) => {
  return (
    <li>
      <Link to={to} className={styles.button} {...rest}>
        {children}
      </Link>
    </li>
  );
};

// Exporta los componentes como propiedades del objeto Menus
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
Menus.Option = Option;
Menus.LinkTo = LinkTo;

export default Menus;
