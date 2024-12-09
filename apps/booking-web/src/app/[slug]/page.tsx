import { Card } from '@/components';
import { Header } from '@/components/Header';
import styles from '@/styles/Barbershop.module.css';
import { Clock, Phone } from 'react-feather';
import { getLocationInfo } from '../services';
import BookingModal from '@/components/BookingModal';
import { Metadata, ResolvingMetadata } from 'next';
import Empty from '@/components/Empty';
import { TimeSlot, Service } from '@helebba/entities';

const daysOfWeek = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];

type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = (await params).slug;
    const info = await getLocationInfo(slug);

    const previousImages = (await parent).openGraph?.images || []

    return {
        title: info?.name,
        description: info?.description,
        openGraph: {
            images: [info?.defaultHeader, ...previousImages],
        },
    }
}


export default async function Home({
    params
}: {
    params: { [key: string]: string };
}) {
    const { slug } = await params;
    const info = await getLocationInfo(slug);

    const getOpeningStatus = () => {
        const now = new Date();
        const currentDay = now.getDay() === 0 ? 6 : now.getDay() - 1; // Ajustar índice (Domingo como último día)
        const currentTime = now.toTimeString().slice(0, 5); // Formato HH:mm

        const todaySchedule = info.timeSlots.find((slot: TimeSlot) => slot.weekday === currentDay);

        if (todaySchedule && todaySchedule.enabled) {
            if (currentTime >= todaySchedule.startTime && currentTime <= todaySchedule.endTime) {
                return { isOpen: true, nextOpening: null };
            }

            if (currentTime < todaySchedule.startTime) {
                return {
                    isOpen: false,
                    nextOpening: `${todaySchedule.startTime} (${daysOfWeek[currentDay]})`,
                };
            }
        }

        for (let i = 1; i <= 7; i++) {
            const nextDay = (currentDay + i) % 7;
            const nextDaySchedule = info.timeSlots.find((slot: TimeSlot) => slot.weekday === nextDay);

            if (nextDaySchedule && nextDaySchedule.enabled) {
                return {
                    isOpen: false,
                    nextOpening: `${nextDaySchedule.startTime} (${daysOfWeek[nextDay]})`,
                };
            }
        }

        return { isOpen: false, nextOpening: "Sin próximas aperturas" };
    };

    const { isOpen, nextOpening } = getOpeningStatus();

    if (!info.active) return <Empty />

    return (
        <div className={styles.main}>
            <Header />

            <div className={styles.mainContainer} >


                <header className={styles.header} style={{
                    backgroundImage: `url(${info.defaultHeader})`
                }} >
                    <div className={styles.logo} style={{
                        backgroundImage: `url(${info.picture})`
                    }} >
                    </div>
                </header>

                <main className={styles.container}>
                    <div className={styles.content}>
                        <div>
                            <h1 className={styles.first_title}>{info.name}</h1>
                            <p className={styles.first_description}>
                                {info.description}
                            </p>

                            <div className={styles.gp_items_container}>
                                <div className={styles.gp_items}>
                                    <Clock size={18} />
                                    {isOpen ? (
                                        <span className={styles.open}>Abierto ahora</span>
                                    ) : (
                                        <span className={styles.closed}>
                                            <span style={{
                                                color: '#d92121'
                                            }} >Cerrado</span> · Apertura: {nextOpening}
                                        </span>
                                    )}
                                </div>

                                {info.phone && (

                                    <div className={styles.gp_items}>
                                        <Phone />
                                        <span>{info.phone}</span>
                                    </div>
                                )}

                            </div>

                            <div className={styles.section__service}>
                                <h2 className={styles.subtitle}>Servicios</h2>
                                <div className={styles.services}>
                                    {info.services.map((service: Service) => (
                                        <Card key={service.id} className={styles.serviceCard}>
                                            <div>
                                                <h3 className={styles.serviceName} >{service.name}</h3>
                                                <p className={styles.servicePrice} >${service.price.toLocaleString()}</p>
                                            </div>
                                            <BookingModal service={service} fields={info.customFields} />
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className={styles.title__hours}>Horarios de apertura</h2>
                            <table className={styles.hours}>
                                <tbody>
                                    {info.timeSlots.map((schedule: TimeSlot) => (
                                        <tr key={schedule.id}>
                                            <td>{daysOfWeek[schedule.weekday]}</td>
                                            <td>{schedule.enabled ? `${schedule.startTime} - ${schedule.endTime}` : "Cerrado"} </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>

            <footer className={styles.footer}>Desarrollado por Helebba</footer>
        </div>
    );
}
