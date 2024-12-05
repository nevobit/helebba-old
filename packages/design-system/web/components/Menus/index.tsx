import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react';
import styles from './Menus.module.css';
import { MoreHorizontal, MoreVertical } from 'lucide-react';
import { createPortal } from 'react-dom';

const useOutsideClick = (handler: () => void, listenCapturing = true) => {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const element = ref.current;

      if (
        !element ||
        element.contains(target) ||
        (target as HTMLElement).closest(`.${styles.toggle}`)
      ) {
        return;
      }

      handler();
    };

    document.addEventListener('click', handleClick, listenCapturing);
    return () => {
      document.removeEventListener('click', handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
};

interface Props {
  children: React.ReactNode;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface MenusContextProps {
  open: (id: string) => void;
  close: () => void;
  openId: string;
  position: { x: number; y: number };
  setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
}

const MenusContext = createContext<MenusContextProps | undefined>(undefined);

function useMenusContext() {
  const context = useContext(MenusContext);
  if (!context) {
    throw new Error('useMenusContext debe ser usado dentro de un MenusProvider');
  }
  return context;
}

const Menus = ({ children }: Props) => {
  const [openId, setOpenId] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const open = (id: string) => setOpenId(id);
  const close = () => setOpenId('');

  return (
    <MenusContext.Provider value={{ openId, open, close, position, setPosition }}>
      {children}
    </MenusContext.Provider>
  );
};

const Menu: FC<Props> = ({ children }) => {
  return <div className={styles.menu}>{children}</div>;
};

const Toggle = ({
  id,
  children,
  vertical,
}: {
  id: string;
  children?: ReactNode;
  vertical?: boolean;
}) => {
  const { openId, close, open, setPosition } = useMenusContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const buttonElement = (event.target as HTMLElement).closest('button');
    if (!buttonElement) return;

    const rect = buttonElement.getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    if (openId === id) {
      close();
    } else {
      open(id);
    }
  };

  return (
    <button
      className={styles.toggle}
      onClick={handleClick}
      type="button"
    >
      {children || (vertical ? <MoreHorizontal size={18} /> : <MoreVertical size={18} />)}
    </button>
  );
};

const List = ({ id, children }: { id: string; children: ReactNode }) => {
  const { openId, position, close } = useMenusContext();
  const ref = useOutsideClick(close);

  if (openId !== id) return null;

  return createPortal(
    <ul
      className={styles.list}
      style={{
        top: position.y,
        right: position.x,
      }}
      ref={ref}>
      {children}
    </ul>,
    document.body,
  );
};

const Button = ({ children, onClick, ...rest }: ButtonProps) => {
  const { close } = useMenusContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick?.(e);
    close();
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className={styles.button}
        type="button"
        {...rest}
      >
        {children}
      </button>
    </li>
  );
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;