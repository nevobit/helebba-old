import { Button } from '@helebba/design-system/web';
import styles from './Form.module.css';
import { useState } from 'react';
import { Camera, Clock, Pin } from 'lucide-react';
import { ImageInput } from '@/components';
import { useUploadImage } from '@/hooks';

const FormLogo = () => {
    const [selectedImage, setSelectedImage] = useState('/covers/bg_1.png')
    const { isLoading, url, urls, uploadImage } = useUploadImage();
    console.log(setSelectedImage, url)
    // const { formState: business, handleChange } = useForm({
    //     name: '',
    //     url: '',
    //     type: '',
    //     typeName: ''
    // });
    return (
        <div className={styles.container}>
            <div className={styles.stack} >
                <div className={styles.box} >
                </div>
                <div className={styles.boxLogo} >
                    <Camera size={16} />
                </div>
                <div className={styles.boxCover} style={{
                    backgroundImage: `url(${selectedImage})`
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
            <ImageInput isLoading={isLoading} urls={urls} uploadImage={uploadImage} />

            <Button variant='primary' fullWidth >Continuar</Button>

        </div>
    )
}

export default FormLogo