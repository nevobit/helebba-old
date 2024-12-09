import { ReactNode } from 'react'
import styles from './Header.module.css';
import Tooltip from './Tooltip';

interface Props {
    title: string;
    children: ReactNode;
    leftChildren?: ReactNode;
    afterChildren?: ReactNode; 
    tip: string

}

const ScreenHeader = ({ title, tip, afterChildren, leftChildren, children }: Props) => {
    return (
        <div className={styles.header} >
            <div className={styles.left}>
                {afterChildren}
                <h2>{title} <Tooltip text={tip} /></h2>
                {leftChildren}
            </div>
            {children}
        </div>
    )
}

export default ScreenHeader