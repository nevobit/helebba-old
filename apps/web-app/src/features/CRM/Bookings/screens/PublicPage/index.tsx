import { Button, Input, LineScaleLoader, ScreenHeader, Textarea, useForm } from '@helebba/design-system/web';
import styles from './Fields.module.css';
import { ArrowLeft, Ban, CheckCircle } from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useBookingLocation, useEditBookingLocation } from '../../hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { useUploadImage } from '@/hooks';
import CoverModal from './CoverModal';

const PublicPage = () => {
    const { id } = useParams();
    const { isLoading, bookingLocation } = useBookingLocation();
    const { isEditing, editBookingLocation } = useEditBookingLocation();
    const { uploadImage, url } = useUploadImage();
    const [activeStatus, setActiveStatus] = useState(false);

    const navigate = useNavigate();

    const { formState, setFormState, handleChange } = useForm({
        ...bookingLocation
    })

    const onSubmit = () => {
        editBookingLocation({ ...formState, id })
    }

    useEffect(() => {
        if (bookingLocation) {
            setFormState({
                ...bookingLocation,
                name: bookingLocation.name || '',
                phone: bookingLocation.phone || '',
                address: bookingLocation.address || '',
                url: bookingLocation.url || '',
                description: bookingLocation.description || '',
                active: activeStatus
            });
            setActiveStatus(bookingLocation.active)
        }
    }, [bookingLocation]);

    const uploadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            uploadImage(e.target.files[0]);
        }
    };

    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveStatus(event.target.id == 'active' ? true : false);
    };

    if (isLoading) return <LineScaleLoader />

    return (
        <div className={styles.container}>
            <ScreenHeader
                afterChildren={
                    <>
                        <Button onClick={() => navigate(-1)} variant="monochromePlain" > <ArrowLeft size={20} /> </Button>
                    </>
                }
                title='Página pública' tip='Crea un perfil de negocio, asigna servicios y ofrece a tus clientes un calendario online para reservar fácilmente.'
            >
                <Button loading={isEditing} variant='primary' onClick={onSubmit} >Guardar</Button>
            </ScreenHeader>

            <div className={styles.content} >

                <div className={styles.information}>
                    <div className={styles.option} >
                        <div>
                            <h4>Logo</h4>
                            <p>Añade el logo de tu negocio (2000x2000 px máx.)</p>
                        </div>
                        <div className={styles.optionContent} >
                            <div className={styles.logoContent} >
                                <img src={url ? url : bookingLocation.picture} />
                            </div>

                            <label htmlFor="image" className={styles.changeInput}>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    accept=".png,.jpg,.jpeg,.svg"
                                    onChange={uploadHandler}
                                />
                                Cambiar
                            </label>

                        </div>
                    </div>
                    <div className={styles.option} >
                        <div>
                            <h4>Imagen de cabecera</h4>
                            <p>Añade una imágen de cabecera para la página pública (2000x2000px)</p>
                        </div>
                        <div className={styles.optionContent} >
                            <div className={styles.brandContent} >
                                <img src={bookingLocation.defaultHeader} />
                                <div className={styles.btn} >
                                    <CoverModal id={id || ''} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.option} >
                        <div>
                            <h4>Nombre del negocio*</h4>
                        </div>
                        <div>
                            <Input value={formState.name} name='name' onChange={handleChange} />
                        </div>
                    </div>
                    <div className={styles.option} >
                        <div>
                            <h4>Teléfono</h4>
                        </div>
                        <div>
                            <Input value={formState.phone || ''} name='phone' onChange={handleChange} />
                        </div>
                    </div>
                    <div className={styles.option} >
                        <div>
                            <h4>Dirección</h4>
                        </div>
                        <div>
                            <Input value={formState?.address || ''} name='address' onChange={handleChange} />
                        </div>
                    </div>
                    <div className={styles.option} >
                        <div>
                            <h4>URL pública</h4>
                            <p>Es el enlace que tus clientes usarán para acceder a tu página de reservas.</p>
                        </div>
                        <div>
                            <Input value={`https://reservas.helebba.com.co/${formState.hash}`} name='url' onChange={handleChange} disabled />
                        </div>
                    </div>

                    {/* <div className={styles.option} >
                        <div>
                            <h4>Logo de Helebba</h4>
                            <p>Muestra un encabezado con el logo de Helebba.</p>
                        </div>
                    </div> */}
                    <div className={styles.option} >
                        <div>
                            <h4>Descripción</h4>
                            <p>Breve descripción de tu negocio visible para tus clientes.</p>
                        </div>
                        <div>
                            <Textarea value={formState.description} name='description' onChange={handleChange} />
                        </div>
                    </div>
                </div>

                <div className={styles.site} >
                    <div className={styles.siteHeader} style={{
                        backgroundColor: bookingLocation.active ? 'rgb(27, 135, 81)' : 'rgb(217, 140, 33)'
                    }}>
                        {bookingLocation.active ? (
                            <h3>
                                <CheckCircle size={20} />
                                ¡Tu sitio está publicado y funcionando!
                            </h3>
                        ) : (
                            <h3>
                                <Ban size={20} /> Tu sitio no está publicado
                            </h3>
                        )}

                    </div>
                    <div className={styles.siteContent} >
                        <label htmlFor="active">
                            <input checked={activeStatus} type="radio" id='active' name='active' onChange={handleStatusChange} />
                            <div>
                                <h3>Publicado</h3>
                                <p>La página pública está activada y tus clientes pueden acceder y reservar servicios.</p>
                            </div>
                        </label>
                        <label htmlFor="active2">
                            <input checked={!activeStatus} type="radio" id='active2' name='active' onChange={handleStatusChange} />
                            <div>
                                <h3>No publicado</h3>
                                <p>La página pública no es accesible.</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PublicPage