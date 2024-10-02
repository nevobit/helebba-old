import styles from './ImageInput.module.css'
import { Upload } from 'lucide-react'
import { Loader } from '../..'
import { useCreateContact, useImport } from '@/hooks';
import { Contact } from '@helebba/entities';
import { useState } from 'react';
interface CC {
    contact: Partial<Contact>
    account: string;
}
const Input = () => {
   const { createContact } = useCreateContact();
   const [notification, setNotification] = useState(false);
    console.log(notification)
   const handleShowToast = () => {
    setNotification(true);
    setTimeout(() => {
        setNotification(false);
    }, 2000);
  };
   const { isLoading, handleFileUpload } = useImport<CC>({ field: "account", create: createContact, setNotification: handleShowToast });

  return (
    <div className={styles.main}>
    <div className={styles.file_input}>
        <input
            type="file"
            name="image"
            id="image"
            accept=".xls,.xlsx,.csv"
            onChange={handleFileUpload}
        />
        {isLoading && (<div className={styles.loader_container}><Loader small /></div>)}
        {!isLoading ? (
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
            <div></div>
            // <img className={styles.main_image} src={urls[0]} alt="" />
        )}
    </div>
    <div className={styles.other_images}>
        {/* {urls.slice(1).map((photo: string) => (
            <picture className={styles.second_piture} key={photo} >
            <button className={styles.remove} onClick={() => removeImage?.(photo)} > <X size={14} /> </button>
            
            <img key={photo} className={styles.second_image} src={photo} style={{
                objectFit: 'contain'
            }} />
            </picture>
        ))} */}
        {/* {urls.length >= 1 && (
            <label htmlFor="image">
                <div className={styles.input_box_mini}>
                    {isLoading ? <Loader small /> : (
                        <Upload size={20} />

                    )}
                </div>
            </label>
        )} */}
    </div>

</div>
  )
}

export default Input