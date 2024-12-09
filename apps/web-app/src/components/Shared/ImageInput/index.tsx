import { Trash, Upload, X } from 'lucide-react'
import styles from './ImageInput.module.css'
import { Loader } from '..'
import { ChangeEvent } from 'react';

interface Props{
    isLoading: boolean;
    uploadImage: (image: string | Blob) => Promise<void>;
    urls: string[]
    removeImage?: (image: string) => void;
    multiImage?: boolean;
    className?: string;
}

const ImageInput = ({ isLoading, uploadImage, urls, removeImage, multiImage = true, className }: Props) => {
    const uploadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          uploadImage(e.target.files[0]);
        }
    };
    return (
        <div className={`${styles.main} ${className}`}>
            <div className={styles.file_input}>
                <input
                    type="file"
                    name="image"
                    id="image"
                    accept=".png,.jpg,.jpeg,.svg"
                    onChange={uploadHandler}
                />
                {isLoading && urls.length < 1 && (<div className={styles.loader_container}><Loader small /></div>)}
                {urls.length < 1 && !isLoading ? (
                    <label htmlFor="image">
                        <div className={styles.input_box}>
                            <Upload size={20} />
                            <span>Selecciona o arrastra aquí tus archivos</span>
                        </div>
                        <div className={styles.file_types}>
                            <span>
                                Archivos permitidos: .png, .jpg, .jpeg, .svg
                            </span>
                        </div>
                    </label>
                ) : (
                        <picture className={styles.picture}>
                            <div onClick={() => removeImage?.(urls[0])}>
                                <Trash size={16} />
                            </div>
                            <img className={styles.main_image} src={urls[0]} alt="" />
                        </picture>
                )}
            </div>
            {multiImage && (

            <div className={styles.other_images}>
                {urls.slice(1).map((photo: string) => (
                    <picture className={styles.second_piture} key={photo} >
                        <button type='button' className={styles.remove} onClick={() => removeImage?.(photo)} > <X size={14} /> </button>
                    
                    <img key={photo} className={styles.second_image} src={photo} style={{
                        objectFit: 'contain'
                    }} />
                    </picture>
                ))}
                {urls.length >= 1 && (
                    <label htmlFor="image">
                        <div className={styles.input_box_mini}>
                            {isLoading ? <Loader small /> : (
                                <Upload size={20} />

                            )}
                        </div>
                    </label>
                )}
            </div>
            )}
        </div>

    )
}

export default ImageInput