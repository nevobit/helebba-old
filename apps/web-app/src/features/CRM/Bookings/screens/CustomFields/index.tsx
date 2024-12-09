import { Button, Input, LineScaleLoader, ScreenHeader } from '@helebba/design-system/web';
import styles from './Fields.module.css';
import { ArrowLeft, GripVertical, Plus, Trash } from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useBookingLocation, useEditBookingLocation } from '../../hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';


const CustomFields = () => {
    const { id } = useParams();
    const { isLoading, bookingLocation } = useBookingLocation();
    const { isEditing, editBookingLocation } = useEditBookingLocation();
    const navigate = useNavigate();

    const [fields, setFields] = useState([
        { key: "name", label: "Nombre", type: "text", required: true, scopes: null, options: null },
        { key: "email", label: "Correo electrónico", type: "email", required: true, scopes: null, options: null },
    ]);

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return; // Si no hay destino (se soltó fuera), no hace nada

        const reorderedFields = Array.from(fields);
        const [movedField] = reorderedFields.splice(result.source.index, 1);
        reorderedFields.splice(result.destination.index, 0, movedField);

        setFields(reorderedFields);
    };

    const onSubmit = () => {
        const newFields = fields.map((field) => ({ ...field, key: field.label.toLowerCase().replace(/\s+/g, '-') }))
        editBookingLocation({ id, customFields: newFields })
    }

    const handleChangeFieldInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedLabel = e.target.value;
        setFields((prevFields) =>
            prevFields.map((f, i) =>
                i === index ? { ...f, label: updatedLabel } : f
            )
        );
    }

    useEffect(() => {
        if (bookingLocation && bookingLocation.customFields) {
            const updatedFields = bookingLocation.customFields.map((field) => {
                return {
                    key: field.key,
                    label: field.label,
                    type: field.type,
                    required: field.required,
                    scopes: null,
                    options: null
                };
            });
            setFields(updatedFields);
        }
    }, [bookingLocation]);

    console.log(fields)

    if (isLoading) return <LineScaleLoader />

    return (
        <div className={styles.container}>
            <ScreenHeader
                afterChildren={
                    <>
                        <Button onClick={() => navigate(-1)} variant="monochromePlain" > <ArrowLeft size={20} /> </Button>
                    </>
                }
                title='Formulario de reserva' tip='Crea un perfil de negocio, asigna servicios y ofrece a tus clientes un calendario online para reservar fácilmente.'
            >
                <Button loading={isEditing} variant='primary' onClick={onSubmit} >Guardar</Button>
            </ScreenHeader>

            <div className={styles.information}>
                <div>
                    <h5>Formulario de reserva</h5>
                    <p>Personaliza todos los campos obligatorios.</p>
                </div>
                <div className={styles.fields} >
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="fields">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {fields.map((field, index) => (
                                        <Draggable key={field.key} draggableId={field.key} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        ...provided.draggableProps.style,
                                                    }}
                                                >
                                                    <div className={styles.input} >
                                                        <span><GripVertical size={20} strokeWidth='1px' color='rgba(0,0,0,0.5)' /></span>
                                                        <Input
                                                            type={field.type}
                                                            placeholder={field.label}
                                                            value={field.label}
                                                            disabled={field.key == 'name' || field.key == 'email'}
                                                            onChange={(e) => handleChangeFieldInput(e, index)}
                                                        />
                                                        <select disabled={field.key == 'name' || field.key == 'email'}
                                                            defaultValue={field.key == 'name' || field.key == 'email' ? 'mandatory' : 'optional'} >
                                                            <option value="optional">Opcional</option>
                                                            <option value="mandatory">Obligatorio</option>
                                                        </select>
                                                        <Button
                                                            disabled={field.key == 'name' || field.key == 'email'}
                                                            className={styles.deleteBtn}
                                                            onClick={() =>
                                                                setFields(fields.filter((f) => f.key !== field.key))
                                                            }
                                                            icon={<Trash size={18} />}
                                                            variant="monochrome"
                                                        >

                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
                <Button
                    onClick={() =>
                        setFields([
                            ...fields,
                            { key: `${Date.now()}`, label: "Nuevo campo", type: "text", required: false, scopes: null, options: null },
                        ])
                    }
                    variant='plain'
                    icon={<Plus size={16} />}
                >
                    Nuevo campo
                </Button>
            </div>
        </div>
    )
}

export default CustomFields