import { Modal } from '@/containers'
import styles from './Send.module.css'
import { DivisaFormater } from '@/utilities';
import { Button } from '@/components';
import { useForm, useSendDocument } from '@/hooks';
import { Document } from '@helebba/entities';
import { useAccountStore } from '@/state-manager';

const SendDocument = ({ doc }: { doc: Partial<Document>  }) => {
    const account = useAccountStore((state) => state.account);

    const { isSending, sendDocument } = useSendDocument(doc?.docType);
    const { formState: send, handleChange} = useForm({
        to: "",
        subject: "",
        body: `Hola:

Aquí está ${doc.docType} ${doc.docNumber} por ${DivisaFormater({value: doc.total || 0, country: account?.country})}$
                        
Si tienes alguna duda, por favor ponte en contacto con nosotros.
Gracias`
    });
  return (
    <Modal.Window title="Enviar documento" name="send-document" >
        <>
        <div className={styles.information} >
            <div className={styles.field} >
                <h3>Para: </h3>
                <input type="text" name='to' onChange={handleChange} />
            </div>
            <div  className={styles.field} >
                <h3>Asunto: </h3>
                <input type="text" name='subject' onChange={handleChange} />
            </div>
            <div>
                <textarea value={send.body} name="body" onChange={handleChange} id=""></textarea>
            </div>
        </div>

        <div className={styles.footer}>
        <Button variant="third" > Cancelar </Button>
            <Button loading={isSending} onClick={() => sendDocument({ account: account.id!,  docType: doc.docType!, id: doc.id!, info: { emails: [send.to], subject:send.subject, message: send.body } })}  > Enviar </Button>
        </div>
        </>

    </Modal.Window>
  )
}

export default SendDocument