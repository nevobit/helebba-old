import React, { useEffect, useState } from 'react'
import styles from './Documents.module.css'
import Button from '@/components/Shared/Button'
import { Image, List, Upload, X } from 'lucide-react'
import { useAccount, useEditAccount, useUploadImage } from '@/hooks'
import Loader from '@/components/Shared/Loader'
import { PDFViewer } from '@react-pdf/renderer'
import Format01 from '@/containers/Invoices/Format01'
import Input from '@/components/Shared/Input'
import Field from '@/components/Shared/Field'
import { useNavigate } from 'react-router-dom'
import { useAccountStore } from '@/state-manager'
import { Account } from '@helebba/entities'

const Documents = () => {
    const { isLoading, url, uploadImage } = useUploadImage();
    const accountStore = useAccountStore((state) => state.account);

    const { account } = useAccount();
    const { isEditing, editAccount } = useEditAccount();
 
    const [step, setStep] = useState('logo');
    const [address, setAddress] = useState(accountStore?.address);
    const [website, setWebsite] = useState(accountStore?.website);
    const [conditions, setConditions] = useState(accountStore?.conditions);
    const [phone, setPhone] = useState(accountStore?.phone);
    const [department, setDepartment] = useState(accountStore?.department);
    const [city, setCity] = useState(accountStore?.city);
    const [identification, setIdentification] = useState(accountStore?.identification);
    const [pdfData, setPdfData] = useState<Partial<Account>>(accountStore); // Nuevo estado para almacenar los datos del PDF

    const navigate = useNavigate();

    const uploadHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        uploadImage(event.target.files![0]);
      };


      const updateAccountHandler = () => {
        editAccount({id: account.id, logo: url == ""? account.logo : url, address, website, phone, city, department, identification, conditions});
      }

      useEffect(() => {
        // Actualiza los datos del PDF cuando cambian los campos
        setPdfData({ address, website, conditions, phone, city, department, identification });
    }, [account, address, website, conditions, phone, city, department, identification]);

  return (
    <div className={styles.overlay}>
        <div className={styles.header}>
            <div>
                <Button  onClick={() => navigate(-1)} variant='cancel'><X size={18} /></Button>
                <h3>Factura</h3>
            </div>
            <Button loading={isEditing} onClick={updateAccountHandler}>Guardar</Button>
        </div>

        <div className={styles.center}>

        <div className={styles.options}>
            <ul>
                <li onClick={() => setStep('logo')} ><Image size={18} /> Logo</li>
                {/* <li onClick={() => setStep('custom')} >Personalizar</li> */}
                <li onClick={() => setStep('campos')} ><List size={18} /> Campos</li>
                {/* <li onClick={() => setStep('')} >Detalles</li> */}
            </ul>
        </div>

        <div className={styles.option}>
          {step == 'logo' && (

            <>


            <h3>Sube tu logo</h3>
            <p>El tamaño del logo recomendado es de máximo 500px de ancho o alto. Formatos aceptados: png y jpg.</p>
       
            <div className={styles.file_input}>
                  <input
                    type="file"
                    name="image" 
                    id="image" 
                    accept=".png,.jpg,.jpeg,.svg"
                    onChange={uploadHandler}
                  />
                  {isLoading  && url.length < 1 && ( <div className={styles.loader_container}><Loader small /></div>) }
                  {url.length < 1 && !isLoading? (
                    
                  <label htmlFor="image">
                    <div className={styles.input_box}>
                      <Upload size={20} />
                      <span>Selecciona o arrastra aquí tus archivos</span>
                    </div>
                    <div className={styles.file_types}>
                      <span>
                        Archivos permitidos: .png, .jpg, .jpeg
                      </span>
                    </div>
                  </label>
                  ): ( 
                    <img className={styles.main_image} src={url} alt=""  />
                  )}
                </div>
              </>
          )}

{step == 'campos' && (

            <>


            <h3>Campos</h3>
            <p>Apareceran en el creador de documentos y en el PDF.</p>
       
            <Field label='NIT - Identificación'>
              <Input value={identification} onChange={({target}) => setIdentification(target.value)} />
            </Field>
            <Field label='Teléfono'>
              <Input value={phone} onChange={({target}) => setPhone(target.value)} />
            </Field>
            <Field label='Dirección'>
              <Input value={address} onChange={({target}) => setAddress(target.value)}/>
            </Field>
            <Field label='Ciudad'>
              <Input value={city} onChange={({target}) => setCity(target.value)}/>
            </Field>
            <Field label='Departamento o Estado'>
              <Input value={department} onChange={({target}) => setDepartment(target.value)}/>
            </Field>
            <Field label='Correo electrónico'>
              <Input value={website} onChange={({target}) => setWebsite(target.value)} />
            </Field>
          
            <Field label='Condiciones'>
              <textarea className={styles.textarea}  value={conditions} onChange={({target}) => setConditions(target.value)} name="" id="" >

              </textarea>
              {/* <Input  /> */}
            </Field>
          

              </>
          )}
          
        </div>
        <PDFViewer
                style={{
                    height: 800,
                    width: 900,
                }}
            >
                <Format01 account={pdfData}  />
            </PDFViewer>  
        </div>

    </div>
  )
}

export default Documents