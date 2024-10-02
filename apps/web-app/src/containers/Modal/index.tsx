import { Button, Subtitle } from '@/components';
import styles from './Modal.module.css'
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { Dispatch,  ReactNode, SetStateAction, cloneElement, createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOutsideClick } from '@helebba/design-system/utilities';

interface Props{
    children: JSX.Element;
    onClose?: () => void;
    title: string;
    name?: string;
    element?: unknown;
    options?: ReactNode;
    width?: number;
    style?: React.CSSProperties
    styleHeader?: React.CSSProperties
    header?: boolean;

}

const initialValue ={
    openName: "",
    open, 
    close, 
} as {
    openName?: string;
    close: () => void;
    open: Dispatch<SetStateAction<string>>
}

const ModalContext = createContext(initialValue);

const Modal = ({children, defaultOpen}: { children: ReactNode,  defaultOpen?: string  }) => {
    const [openName, setOpenName] = useState(defaultOpen ? defaultOpen : '');
    const navigate = useNavigate();



    const handleButtonClick = () => {
      navigate(-1);
    };

    const close = () => {
        setOpenName('');
        if(defaultOpen == "defaultModal"){
            handleButtonClick()
        }
    };
    
    const open = setOpenName;


    return (<ModalContext.Provider value={{openName, close, open}}>
        {children}
    </ModalContext.Provider>)
}

const Open = ({children, onClick, opens: opensWindowName}: { children: JSX.Element, onClick?: () => void, opens: SetStateAction<string> }) => {
    const {open} = useContext(ModalContext);

    const handleOpen = () => {
        onClick?.();
        open(opensWindowName)
    }
    return cloneElement(children, { onClick: () => handleOpen()  });
}


const Close = ({children, onClick}: { children: JSX.Element, onClick?: () => void}) => {
    const {close} = useContext(ModalContext);

    const handleOpen = () => {
        onClick?.();
        close()
    }
    return cloneElement(children, { onClick: () => handleOpen()  });
}


const Window = ({children, header, name, width, style, title, element, styleHeader, options }: Props) => {
    const {openName, close} = useContext(ModalContext);
    const ref = useOutsideClick<HTMLDivElement>({handler: close, listenCapturing: true});

    if(name !== openName) return null;

  return createPortal (
    <div className={styles.overlay}>
        <div className={styles.modal}  style={{
            width,
            ...style,
            gridTemplateRows: header ? "1fr" : "5rem 1fr"
        }} ref={ref} >
            {!header && (

            <div className={styles.header} style={styleHeader} >
                <Subtitle text={element !== undefined? String(element) : title} />
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                }}>
                    <div>{options}</div>
                    <Button onClick={close} variant='third'><X size={15} /></Button>
                </div>
            </div>
            )}


            <div className={styles.main}>
            {cloneElement(children, { onCloseModal: close })}
            </div>
        </div>
    </div>, 
    document.body
  )
}

Modal.Open = Open;
Modal.Window = Window;
Modal.Close = Close;

export default Modal