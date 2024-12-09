import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import { Calendar, ChartPie, Clock10, Folder, IdCard } from 'lucide-react';
import { LineScaleLoader } from '@helebba/design-system/web';
import { useEmployeeMe } from '../../hooks';

const Layout = () => {
    const { isLoading, employee } = useEmployeeMe();

    if (isLoading) return <LineScaleLoader />

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar} >
                <h2>Mi zona</h2>

                <Link to='/personalinfo' className={styles.avatar} >
                    <div>
                        {employee.name?.charAt(0).toUpperCase()}
                        {employee.lastname ? employee.lastname?.split(" ")[0]?.charAt(0).toUpperCase() : employee.name?.charAt(1).toUpperCase()}
                    </div>
                    <h4>{employee.name} {employee.lastname}</h4>
                </Link>

                <ul className={styles.items}>
                    <li><Link to='/employees/summary' > <ChartPie size={16} /> Resumen </Link></li>
                    <li><Link to='/employees/' > <Clock10 size={16} /> Control horario  </Link></li>
                    <li><Link to='/employees/' > <Calendar size={16} /> Ausencias </Link> </li>
                    <li><Link to='/employees/' > <ChartPie size={16} /> Nóminas  </Link></li>
                    <li><Link to='/employees/' > <Folder size={16} /> Documentos </Link> </li>
                    <li><Link to='/employees/' > <IdCard size={16} /> Mi perfil </Link> </li>
                </ul>
            </aside>
            <div className={styles.content} >
                <Outlet />
            </div>

        </div>
    )
}

export default Layout