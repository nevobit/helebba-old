import { Button } from '@helebba/design-system/web';
import styles from './Form.module.css';
import { useEffect, useState } from 'react';
import { Clock, Pin } from 'lucide-react';
import { BookingLocation } from '@helebba/entities';
import { ImageInput } from '@/components';
import { useUploadImage } from '@/hooks';
import { useEditBookingLocation } from '../../hooks';

const coverImages = [
    '/covers/bg_1.png',
    '/covers/bg_2.png',
    '/covers/bg_3.png',
    '/covers/bg_4.png',
    '/covers/bg_5.png',
    '/covers/bg_6.png',
    '/covers/bg_7.png',
]

const FormImage = ({ bookingLocation }: { bookingLocation: BookingLocation }) => {
    const [selectedImage, setSelectedImage] = useState('/covers/bg_1.png');
    const { uploadImage, url, isLoading, urls } = useUploadImage();
    const { isEditing, editBookingLocation } = useEditBookingLocation();

    useEffect(() => {
        if (url) {
            setSelectedImage(url);
        }
    }, [url]);
    return (
        <div className={styles.container}>
            <div className={styles.stack} >
                <div className={styles.box} >
                </div>
                <div className={styles.boxCover} style={{
                    backgroundImage: `url(${selectedImage})`
                }} >
                    <div className={styles.boxText} >
                        <h4>{bookingLocation.name}</h4>
                        <p><Pin size={12} /> Tu dirección</p>
                        <p><Clock size={12} /> Tu horario</p>
                    </div>
                </div>
            </div>

            <h2>Elige tu imagen de portada</h2>
            <p>Selecciona una imagen de portada o sube la tuya propia, si es posible en formato horizontal.</p>

            <div className={styles.images} >
                <ImageInput multiImage={false} className={styles.inputImage} urls={urls} uploadImage={uploadImage} isLoading={isLoading} />
                {coverImages.map((image) => (
                    <div className={`${styles.image} ${selectedImage == image ? styles.active : ''}`} style={{
                        backgroundImage: `url(${image})`
                    }} onClick={() => setSelectedImage(image)} />
                ))}
            </div>
            <Button variant='primary' fullWidth
                loading={isEditing} onClick={() => editBookingLocation({ id: bookingLocation.id, hasHeader: selectedImage.length > 0, defaultHeader: selectedImage, onboarding: { started: true, completedSettings: true, completedBackground: true, completedLogo: false, finished: false } })}

            >Continuar</Button>

        </div>
    )
}

export default FormImage