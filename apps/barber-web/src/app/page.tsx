import { Button, Card } from '@/components';
import { Header } from '@/components/Header';
import styles from '@/styles/barbershop.module.css';
import { Clock, Phone } from 'react-feather';

export default function Home() {
  const businessHours = [
    { day: 'Lunes', hours: '09:00 - 17:30' },
    { day: 'Martes', hours: '09:00 - 17:30' },
    { day: 'Miercoles', hours: '09:00 - 17:30' },
    { day: 'Jueves', hours: '09:00 - 17:30' },
    { day: 'Viernes', hours: '09:00 - 17:30' },
    { day: 'Sabado', hours: 'Cerrado' },
    { day: 'Domingo', hours: 'Cerrado' },
  ];

  const services = [
    { name: 'Mantenimiento', price: 80000 },
    { name: 'Mantenimiento', price: 80000 },
  ];
  return (
    <div className={styles.main}>
      <Header />

      <header className={styles.header}>
        <div className={styles.logo}>
          <span>Logo</span>
        </div>
      </header>

      <main className={styles.container}>
        <div className={styles.content}>
          <div>
            <span className={styles.first_title}>Barbershop</span>
            <p className={styles.first_description}>
              El lugar ideal para descubrir servicios de calidad y asegurar una
              experiencia incomparable. Nos dedicamos a conectar a nuestros
              clientes con las mejores opciones, ofreciendo un servicio
              confiable, eficiente y personalizado para satisfacer todas sus
              necesidades.
            </p>

            <div className={styles.gp_items_container}>
              <div className={styles.gp_items}>
                <Clock />
                <span>Abierto 09:000 - 17:30</span>
              </div>

              <div className={styles.gp_items}>
                <Phone />
                <span>3226445890</span>
              </div>
            </div>

            <div className={styles.section__service}>
              <h2>Servicios</h2>
              <div className={styles.services}>
                {services.map((service, index) => (
                  <Card key={index} className={styles.serviceCard}>
                    <div>
                      <h3>{service.name}</h3>
                      <p>${service.price.toLocaleString()}</p>
                    </div>
                    <Button>Reservar</Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className={styles.title__hours}>Horarios de apertura</h2>
            <table className={styles.hours}>
              <tbody>
                {businessHours.map((schedule, index) => (
                  <tr key={index}>
                    <td>{schedule.day}</td>
                    <td>{schedule.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>Desarrollado por Helebba</footer>
    </div>
  );
}
