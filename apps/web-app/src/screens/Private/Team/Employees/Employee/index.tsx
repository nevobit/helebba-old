import { useEmployee } from '@/hooks';
import styles from './Employee.module.css';
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '@/constant-definitions';
import { ArrowLeft } from 'lucide-react';

const Employee = () => {
  const { employee } = useEmployee();

  console.log(employee)
  return (
    <div className={styles.container}>

<div className={styles.header}>
        <div>
          <Link to={PrivateRoutes.CONTACTS}>
            <ArrowLeft size={18} color='rgba(0,0,0,0.6)' />
          </Link>
          <span>
            {employee?.name.split(' ')[0].substring(0, 1)}
            {employee?.lastname?.split(' ')[0].substring(0, 1)}
          </span>

          <h3>{employee?.name}</h3>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <div className={styles.box}>
            <h4>Correo electronico</h4>
          </div>
        </div>
        <div>
          <div className={styles.flex}>
            <div className={styles.box}>
              <h4>Nóminas pagadas - 2024</h4>
            </div>
            <div className={styles.box}>
              <h4>Nóminas pendientes - 2024</h4>
            </div>
            <div className={styles.box}>
              <h4>Ausencias - 2024</h4>
            </div>
            <div className={styles.box}>
              <h4>Ausencias - 2024</h4>
              <ul>
                <li>
                    <span>0</span>
                    <p>DÍAS USADOS</p>
                </li>
                <li>
                    <span>0</span>
                    <p>DÍAS DISPONIBLES</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.box}>
            <h4>Lugar de trabajo</h4>
            <span>
                {employee?.workplace}
            </span>
          </div>
          <div className={styles.box}>
            <h4>Equipos</h4>
          </div>
          <div className={styles.box}>
            <h4>Días utilizados por tipo - 2024</h4>

            <ul>
                <li>
                    <span>0</span>
                    <p>VACACIONES</p>
                </li>
                <li>
                    <span>0</span>
                    <p>ENFERMEDADES</p>
                </li>
                <li>
                    <span>0</span>
                    <p>PATERNIDAD</p>
                </li>
                <li>
                    <span>0</span>
                    <p>ENFERMEDAD DE UN FAMILIAR</p>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
