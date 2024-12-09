import { Button } from '@helebba/design-system/web';
import styles from './Form.module.css';
import { Camera, Clock, Pin } from 'lucide-react';
import { ImageInput } from '@/components';
import { useUploadImage } from '@/hooks';
import { BookingLocation } from '@helebba/entities';
import { useEditBookingLocation } from '../../hooks';

const FormLogo = ({ bookingLocation }: { bookingLocation: BookingLocation }) => {
    const { isLoading, url, urls, uploadImage } = useUploadImage();
    const { isEditing, editBookingLocation } = useEditBookingLocation();

    return (
        <div className={styles.container}>
            <div className={styles.stack} >
                <div className={styles.box} >
                </div>
                <div className={styles.boxLogo} >
                    {url.length > 0 ? (
                        <img src={url} alt="" />
                    ) : (
                            <Camera size={16} />
                    )}
                </div>
                <div className={styles.boxCover} style={{
                    backgroundImage: `url(${bookingLocation.defaultHeader})`
                }} >
                    <div className={styles.boxText} >
                        <h4>Negocio principal</h4>
                        <p><Pin size={12} /> Tu dirección</p>
                        <p><Clock size={12} /> Tu horario</p>
                    </div>
                </div>
            </div>

            <h2>¿Quieres subir un logo?</h2>
            <p>Tamaño óptimo: 512 x 512 píxeles.</p>
            <ImageInput multiImage={false} isLoading={isLoading} urls={urls} uploadImage={uploadImage} />

            <Button
                className={styles.btn}
                variant='primary' fullWidth
                loading={isEditing} onClick={() => editBookingLocation({ id: bookingLocation.id, picture: url, hasPicture: url.length > 0, onboarding: { started: true, completedSettings: true, completedBackground: true, completedLogo: true, finished: true } })}
            >Continuar</Button>

        </div>
    )
}

export default FormLogo