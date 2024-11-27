'use client'
import React, { useEffect, useState } from 'react'
import styles from "./Top.module.css"
import { ArrowRight, Phone } from 'lucide-react'

const TopBlack = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-05T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (number: number) => number.toString().padStart(2, "0");


  return (
    <div className={styles.top} >
      <div className={styles.container}>
        <p>BLACK FRIDAY: 75% de descuento durante 3 meses <ArrowRight size={18} color='#8BE737' /></p>
        <div>
          <div className={styles.counter}>
            <span>
              <h2>{formatNumber(timeLeft.days)}</h2>
              <p>DÍAS</p>
            </span>
            <span>
              <h2>{formatNumber(timeLeft.hours)}</h2>
              <p>HORAS</p>
            </span>
            <span>
              <h2>{formatNumber(timeLeft.minutes)}</h2>
              <p>MINUTOS</p>
            </span>
            <span>
              <h2>{formatNumber(timeLeft.seconds)}</h2>
              <p>SEGUNDOS</p>
            </span>
          </div>
        </div>
        <p>Habla con el equipo de ventas: <div className={styles.number}><Phone size={15} /> +57 320 653 5488</div></p>
      </div>
    </div>
  )
}

export default TopBlack