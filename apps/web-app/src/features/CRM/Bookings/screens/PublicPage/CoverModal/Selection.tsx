import { Button, ImageInput } from '@/components'
import { Modal, useModal } from '@helebba/design-system/web'
import styles from '../Fields.module.css';
import { useEffect, useState } from 'react';
import { useEditBookingLocation } from '../../../hooks';
import { useUploadImage } from '@/hooks';

const coverImages = [
    '/covers/bg_1.png',
    '/covers/bg_2.png',
    '/covers/bg_3.png',
    '/covers/bg_4.png',
    '/covers/bg_5.png',
    '/covers/bg_6.png',
    '/covers/bg_7.png',
]

const Selection = ({ id }: { id: string }) => {
    const [selectedImage, setSelectedImage] = useState('/covers/bg_1.png');
    const { uploadImage, url, isLoading, urls } = useUploadImage();
    const { closeModal } = useModal();

    const { isEditing, editBookingLocation } = useEditBookingLocation(closeModal);

    useEffect(() => {
        if (url) {
            setSelectedImage(url);
        }
    }, [url]);

    const onSubmit = () => {
        editBookingLocation({ id: id, defaultHeader: selectedImage });
    }
    return (
        <>
            <Modal.Body>
                <div className={styles.body} >
                    <div className={styles.images} >
                        <ImageInput multiImage={false} className={styles.inputImage} urls={urls} uploadImage={uploadImage} isLoading={isLoading} />
                        {coverImages.map((image) => (
                            <div className={`${styles.image} ${selectedImage == image ? styles.active : ''}`} style={{
                                backgroundImage: `url(${image})`
                            }} onClick={() => setSelectedImage(image)} />
                        ))}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button loading={isEditing} onClick={onSubmit} variant='primary' >Guardar</Button>
            </Modal.Footer>
        </>

    )
}

export default Selection