import { Button, LineScaleLoader, ScreenHeader } from '@helebba/design-system/web';
import styles from './Schedules.module.css';
import { ArrowLeft, Calendar, Plus, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useBookingLocation, useEditBookingLocation } from '../../hooks';
import { useNavigate, useParams } from 'react-router-dom';

interface TimeSlot {
    startTime: string;
    endTime: string;
}

interface DaySchedule {
    weekday: number;
    enabled: boolean;
    startTime: string;
    endTime: string;
    timeSlots: TimeSlot[];
}

const daysOfWeek = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"];

const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
        for (let minutes = 0; minutes < 60; minutes += 15) {
            const formattedTime = `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
            options.push(
                <option key={formattedTime} value={formattedTime}>
                    {formattedTime}
                </option>
            );
        }
    }
    return options;
};

const Schedules = () => {
    const { id } = useParams();
    const { isLoading, bookingLocation } = useBookingLocation();
    const { isEditing, editBookingLocation } = useEditBookingLocation();
    const navigate = useNavigate();

    const [schedule, setSchedule] = useState<DaySchedule[]>(
        Array.from({ length: 7 }, (_, i) => ({
            weekday: i,
            enabled: i < 5,
            startTime: '09:00',
            endTime: '17:30',
            timeSlots: i < 5 ? [] : [],
        }))
    );

    const handleTimeChange = (
        dayIndex: number,
        slotIndex: number,
        field: "startTime" | "endTime",
        value: string
    ) => {
        const updatedSchedule = [...schedule];
        updatedSchedule[dayIndex].timeSlots[slotIndex][field] = value;
        setSchedule(updatedSchedule);
    };

    const handleMainTimeChange = (
        dayIndex: number,
        field: "startTime" | "endTime",
        value: string
    ) => {
        const updatedSchedule = [...schedule];
        updatedSchedule[dayIndex][field] = value;
        setSchedule(updatedSchedule);
    };

    const toggleDay = (dayIndex: number) => {
        const updatedSchedule = [...schedule];
        updatedSchedule[dayIndex].enabled = !updatedSchedule[dayIndex].enabled;
        if (!updatedSchedule[dayIndex].enabled) {
            updatedSchedule[dayIndex].timeSlots = [];
        }
        setSchedule(updatedSchedule);
    };

    const addTimeSlot = (dayIndex: number) => {
        const updatedSchedule = [...schedule];
        updatedSchedule[dayIndex].timeSlots.push({ startTime: "00:00", endTime: "01:00" });
        setSchedule(updatedSchedule);
    };

    const removeTimeSlot = (dayIndex: number, slotIndex: number) => {
        const updatedSchedule = [...schedule];
        updatedSchedule[dayIndex].timeSlots.splice(slotIndex, 1);
        setSchedule(updatedSchedule);
    };


    const onSubmit = () => {
        editBookingLocation({ id, timeSlots: schedule })
    }

    useEffect(() => {
        if (bookingLocation && bookingLocation.timeSlots) {
            const updatedSchedule = Array.from({ length: 7 }, (_, i) => {
                const dayData = bookingLocation.timeSlots.find((slot) => slot.weekday === i);
                return {
                    weekday: i,
                    enabled: dayData?.enabled || false,
                    startTime: dayData?.startTime || '09:00',
                    endTime: dayData?.endTime || '17:30',
                    timeSlots: dayData?.timeSlots || [],
                };
            });
            setSchedule(updatedSchedule);
        }
    }, [bookingLocation]);


    if (isLoading) return <LineScaleLoader />

    return (
        <div className={styles.container}>
            <ScreenHeader
                afterChildren={
                    <>
                        <Button onClick={() => navigate(-1)} variant="monochromePlain" > <ArrowLeft size={20} /> </Button>
                    </>
                }
                title='Horarios de apertura' tip='Crea un perfil de negocio, asigna servicios y ofrece a tus clientes un calendario online para reservar fácilmente.'
            >
                <Button loading={isEditing} variant='primary' onClick={onSubmit} >Guardar</Button>
            </ScreenHeader>

            <div className={styles.information}>
                <Calendar size={24} />
                <div>
                    <h5>¿Qué son los horarios de apertura?</h5>
                    <p>Configura desde aquí el horario regular de tu negocio, con días y franjas horarias específicas. Añade días de cierre en los que no aceptes reservas y fechas excepcionales en las que tu negocio esté abierto.</p>
                </div>
            </div>

            <div className={styles.content} >

                <div className={styles.box} >
                    <div className={styles.boxHeader} >
                        <h2>Horario habitual</h2>
                    </div>
                    <div className={styles.boxContent}>
                        {schedule.map((day, dayIndex) => (
                            <div key={day.weekday} className={styles.boxItem} >

                                <div className={styles.mainInfo} >
                                    <span className={styles.left}>
                                        <input
                                            type="checkbox"
                                            checked={day.enabled}
                                            onChange={() => toggleDay(dayIndex)}
                                        />
                                        <span>{daysOfWeek[day.weekday]}</span>
                                    </span>
                                    {day.enabled ? (
                                        <div className={styles.option}>
                                            <select defaultValue='09:00' value={day.startTime} onChange={({ target }) => handleMainTimeChange(day.weekday, 'startTime', target.value)}>
                                                {generateTimeOptions()}
                                            </select>
                                            <span> - </span>
                                            <select defaultValue='17:30' value={day.endTime} onChange={({ target }) => handleMainTimeChange(day.weekday, 'endTime', target.value)}>
                                                {generateTimeOptions()}
                                            </select>
                                        </div>
                                    ) : (<p>Sin disponibilidad</p>)}
                                    {day.enabled && (

                                        <Button
                                            variant="monochromePlain"
                                            onClick={() => addTimeSlot(dayIndex)}
                                            disabled={!day.enabled}
                                            style={{ marginLeft: "10px" }}
                                            icon={<Plus size={18} />}
                                        >
                                        </Button>
                                    )}
                                </div>


                                {day.enabled &&
                                    day.timeSlots.map((slot, slotIndex) => (
                                        <div key={slotIndex} className={styles.mainInfo}>
                                            <div></div>
                                            <div className={styles.option}>
                                                <select defaultValue='09:00' value={slot.startTime} onChange={({ target }) => handleTimeChange(dayIndex, slotIndex, 'startTime', target.value)}>
                                                    {generateTimeOptions()}
                                                </select>
                                                <span> - </span>
                                                <select defaultValue='17:30' value={slot.endTime} onChange={({ target }) => handleTimeChange(dayIndex, slotIndex, 'endTime', target.value)}>
                                                    {generateTimeOptions()}
                                                </select>
                                            </div>
                                            <Button variant="monochromePlain" icon={<Trash size={18} />} onClick={() => removeTimeSlot(dayIndex, slotIndex)}></Button>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Schedules