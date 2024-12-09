'use client'
import React, { useState } from 'react'
import styles from './BookingModal.module.css';
import { X } from 'react-feather';
import { createPortal } from 'react-dom';
import { Button } from './Button';
import ConfirmIcon from './ConfirmIcon';

interface CustomField {
    key: string;
    label: string;
    type: string;
    required: boolean;
    scopes: string[] | null;
    options: string[] | null;
}


const BookingModal = ({ service, fields }: { service: { name: string, price: number }, fields: CustomField[] }) => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [weekIndex, setWeekIndex] = useState(0);

    const generateDates = () => {
        const dates = [];
        const today = new Date();

        for (let i = 0; i < 365; i++) {
            const currentDate = new Date();
            currentDate.setDate(today.getDate() + i);
            const day = currentDate.getDate().toString().padStart(2, "0");
            const weekDay = currentDate.toLocaleString("es-ES", { weekday: "short" }).toLowerCase();
            dates.push({ day, weekDay, fullDate: currentDate });
        }

        return dates;
    };
    const dates = generateDates();

    const daysPerWeek = 7;
    const visibleDates = dates.slice(
        weekIndex * daysPerWeek,
        (weekIndex + 1) * daysPerWeek
    );
    const firstVisibleDate = visibleDates[0]?.fullDate || new Date();
    const monthName = firstVisibleDate.toLocaleString("es-ES", { month: "long" });
    const year = firstVisibleDate.getFullYear();

    const times = [
        "03:00",
        "03:15",
        "03:30",
        "03:45",
        "04:00",
        "04:15",
        "04:30",
        "04:45",
        "05:00",
        "05:15",
        "05:30",
        "05:45",
    ];

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [step, setStep] = useState('confirmed');

    if (!isOpen) {
        return <Button onClick={openModal}>Reserva</Button>;
    }

    return createPortal(
        <div className={styles.overlay} >

            <div className={styles.modal}>
                {step == 'select' && (

                    <div className={styles.select} >

                        <div className={styles.header}>
                            <button className={styles.closeButton}></button>
                            <h2>Selecciona una hora</h2>
                            <button onClick={closeModal} className={styles.closeButton}><X size={20} /></button>
                        </div>

                        <div className={styles.serviceInfo}>
                            <p><strong>Servicio:</strong> {service.name}</p>
                            <p><strong>Precio:</strong> {service.price}</p>
                            <p><strong>Duración:</strong> 50 min</p>
                        </div>

                        <div className={styles.monthYear}>
                            <span>{`${monthName.charAt(0).toUpperCase() + monthName.slice(1)} ${year}`}</span>
                        </div>

                        <div className={styles.calendar}>
                            <button
                                className={styles.arrow}
                                onClick={() => setWeekIndex((prev) => Math.max(prev - 1, 0))}
                                disabled={weekIndex === 0}
                            >
                                {"<"}
                            </button>
                            <div className={styles.dates}>
                                {visibleDates.map((date) => (
                                    <div
                                        key={date.fullDate.toString()}
                                        className={`${styles.date} ${selectedDate === date.fullDate.toDateString() ? styles.active : ""
                                            }`}
                                        onClick={() => setSelectedDate(date.fullDate.toDateString())}
                                    >
                                        <p>{date.day}</p>
                                        <span>{date.weekDay}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                className={styles.arrow}
                                onClick={() =>
                                    setWeekIndex((prev) =>
                                        prev < Math.floor(dates.length / daysPerWeek) ? prev + 1 : prev
                                    )
                                }
                                disabled={(weekIndex + 1) * daysPerWeek >= dates.length}
                            >
                                {">"}
                            </button>
                        </div>

                        <div className={styles.times}>
                            {times.map((time) => (
                                <button
                                    key={time}
                                    className={`${styles.time} ${selectedTime === time ? styles.active : ""
                                        }`}
                                    onClick={() => setSelectedTime(time)}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>

                        <button
                            className={styles.continueButton}
                            disabled={!selectedTime || !selectedDate}
                            onClick={() => setStep('confirm')}
                        >
                            Continuar
                        </button>

                    </div>
                )}

                {step == 'confirm' && (



                    <div className={styles.confirm} >
                        <div className={styles.header}>
                            <button className={styles.closeButton}></button>
                            <h2>Confirma tu reserva</h2>
                            <button onClick={closeModal} className={styles.closeButton}><X size={20} /></button>
                        </div>

                        <div className={styles.serviceInfo}>
                            <p><strong>Servicio:</strong> {service.name}</p>
                            <p><strong>Precio:</strong> {service.price}</p>
                            <p><strong>Fecha:</strong> {`${selectedDate}, ${selectedTime}`}</p>
                        </div>

                        <div className={styles.inputs} >

                            {fields.map((field) => (

                                <label key={field.key} className={styles.inputField}>
                                    {field.label}
                                    <input required={field.required} className={styles.input} type={field.type} />
                                </label>
                            ))}
                        </div>


                        <div className={styles.confirmFooter}>
                            <button onClick={() => setStep('select')} className={styles.backBtn}>Atrás</button>
                            <Button>Confirmar</Button>
                        </div>
                    </div>
                )}

                {step == 'confirmed' && (



                    <div className={styles.confirm} >
                        <div className={styles.headerConfirmed}>
                            <button className={styles.closeButton}></button>
                            <h2></h2>
                            <button onClick={closeModal} className={styles.closeButton}><X size={20} /></button>
                        </div>
                        <ConfirmIcon />
                        <h3 className={styles.confirmedTitle}>Reserva confirmada</h3>
                        <p className={styles.confirmedInfo} >Te hemos enviado un correo con los detalles de la reserva a</p>
                        <p className={styles.confirmedEmail}>joseuqinones@gmail.com</p>
                        <div className={styles.serviceInfo}>
                            <p><strong>Servicio:</strong> {service.name}</p>
                            <p><strong>Precio:</strong> {service.price}</p>
                            <p><strong>Fecha:</strong> {`${selectedDate}, ${selectedTime}`}</p>
                        </div>

                        <div className={styles.confirmedFooter}>
                            <p>¿Necesitas hacer cambios? <button>Edita</button> o <button>Anula</button></p>
                        </div>
                    </div>
                )}
            </div>

        </div>,
        document.body

    )
}

export default BookingModal