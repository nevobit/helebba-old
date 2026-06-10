import { Link, Share2, X } from 'lucide-react';
import { Button, LinkButton, Modal, useModal } from '@helebba/design-system/web';
import styles from './Create.module.css';
import { BookingLocation } from '@helebba/entities';

export const ShareLink = ({ bookingLocation }: { bookingLocation: BookingLocation }) => {
    const { openModal, requestCloseModal } = useModal();

    const open = () => {
        openModal(
            <Modal.Window
                isOpen={true}
                className={styles.window}
                onClose={() =>
                    requestCloseModal({
                        confirm: false,
                        onConfirm: () => {
                            console.log('Modal cerrado.');
                        },
                    })
                }
            >
                <Modal.Header className={styles.header} >
                    <h2>Compartir el enlace de tu página pública</h2>
                    <button onClick={() => requestCloseModal({
                        confirm: false,
                        onConfirm: () => {
                            console.log('Modal cerrado.');
                        },
                    })}><X width={20} /></button>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.body} >
                        <p>Copia y comparte este enlace con tus clientes para que puedan acceder a tu página y programar citas.</p>
                        <LinkButton variant='plain' >reservas.helebba.com/{bookingLocation.hash}</LinkButton>
                        <Button variant='primary' icon={<Link size={14} />} >Copiar enlace</Button>
                    </div>
                </Modal.Body>
            </Modal.Window>,
        );
    };

    return (
        <Button size="slim" style={{
            padding: 8
        }} variant='monochrome' onClick={open} > <Share2 size={14} />  </Button>
    )
}
