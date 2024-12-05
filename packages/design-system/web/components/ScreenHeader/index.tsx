import { ReactNode } from 'react'
import styles from './Header.module.css';
import Tooltip from './Tooltip';

interface Props {
    title: string;
    children: ReactNode;
    tip: string
}

const ScreenHeader = ({ title, tip, children }: Props) => {
    return (
        <div className={styles.header} >
            <h2>{title} <Tooltip text={tip} /></h2>
            {children}
        </div>
    )
}

export default ScreenHeader