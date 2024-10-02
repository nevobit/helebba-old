import { Modal } from '@/containers'
import { Button } from '..'
import styles from './ConfirmDelete.module.css'

const ConfirmDelete = ({ isLoading, name, handler }: {isLoading?: boolean, onCloseModal?: () => void; name: string, handler: () => void }) => {
  return (
    <Modal.Window header width={300} title="" name={name}>
    <div className={styles.container} >
        <h4>Aviso</h4>
        <p>¿Estás segur@?</p>

        <div className={styles.buttons} >
            <Button variant='danger' loading={isLoading} onClick={handler} >Confirmar</Button>
            <Modal.Close>
                <Button variant="third">Cancelar</Button>
            </Modal.Close>
        </div>
    </div>
  </Modal.Window>

  )
}

export default ConfirmDelete