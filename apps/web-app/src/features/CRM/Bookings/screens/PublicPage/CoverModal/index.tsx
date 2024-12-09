import styles from '../Fields.module.css'
import { Button, Modal, useModal } from "@helebba/design-system/web";
import { X } from "lucide-react";
import Selection from "./Selection";



const CoverModal = ({ id }: { id: string }) => {
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
                    <Button
                        variant='monochromePlain'
                        onClick={() => requestCloseModal({
                            confirm: false,
                            onConfirm: () => {
                                console.log('Modal cerrado.');
                            },
                        })}><X width={20} /></Button>
                </Modal.Header>
                <Selection id={id} />
            </Modal.Window>,
        );
    };
    return (
        <Button size="slim" style={{
            padding: 8
        }} variant='monochrome' onClick={open} > Cambiar </Button>
    )
}

export default CoverModal