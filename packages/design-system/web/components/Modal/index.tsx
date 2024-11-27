import { createContext, useContext, useState, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { Button } from '../Button';

type ModalContextType = {
  openModal: (modal: ReactNode) => void;
  closeModal: () => void;
  requestCloseModal: ({ confirm, onConfirm, }: { confirm?: boolean; onConfirm: () => void; }) => void;

};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const Modal = ({ children }: { children?: ReactNode }) => {
  const [modalStack, setModalStack] = useState<ReactNode[]>([]);
  const [confirmationModal, setConfirmationModal] = useState<ReactNode | null>(null);

  const openModal = (modal: ReactNode) => {
    setModalStack((prev) => [...prev, modal]);
  };

  const closeModal = () => {
    setModalStack((prev) => prev.slice(0, -1));
  };

  const requestCloseModal = ({
    confirm = false,
    onConfirm,
  }: {
    confirm?: boolean;
    onConfirm: () => void;
  }) => {
    if (!confirm) {
      onConfirm();
      closeModal();
      return;
    }

    setConfirmationModal(
      <Modal.Window className={styles.confirmationModal} isOpen={true} onClose={() => setConfirmationModal(null)}>
        <Modal.Header> <h2 className={styles.confirmTitle}>Descartar los cambios</h2></Modal.Header>
        <Modal.Body> <p className={styles.confirmCopy}>¿Se perderán todos los cambios no guardados. Quieres proceder?</p></Modal.Body>
        <Modal.Footer className={styles.confirmFooter}>
          <Button onClick={() => setConfirmationModal(null)}>Cancelar</Button>
          <Button
            variant='primary'
            tone='critical'
            onClick={() => {
              onConfirm();
              closeModal();
              setConfirmationModal(null);
            }}
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal.Window>
    );
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, requestCloseModal }}>
      {children}
      {modalStack.map((modal, index) => (
        <div key={index} style={{ zIndex: 1000 + index }}>
          {modal}
        </div>
      ))}
      {confirmationModal && (
        <div style={{ zIndex: 1100 }}>{confirmationModal}</div>
      )}
    </ModalContext.Provider>
  );
};

const Window = ({ isOpen, onClose, children, className }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} ${className}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  );
};

Modal.Window = Window;
Modal.Header = ({ children, className }: { children: ReactNode, className?: string }) => (
  <div className={`${styles.modal_header} ${className} `}>{children}</div>
);
Modal.Body = ({ children, className }: { children: ReactNode, className?: string }) => (
  <div className={`${styles.body} ${className}`}>{children}</div>
);
Modal.Footer = ({ children, className }: { children: ReactNode, className?: string }) => (
  <div className={`${styles.footer} ${className} `}>{children}</div>
);
