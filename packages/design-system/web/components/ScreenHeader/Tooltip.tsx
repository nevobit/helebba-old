import { useState } from 'react';
import styles from './Header.module.css'; // Importamos el archivo CSS Module
import { CircleAlert } from 'lucide-react';

const Tooltip = ({ text }: { text: string }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    return (
        <div
            className={styles.tooltipContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span><CircleAlert size={16} height={14} /></span>
            {isVisible && <div className={styles.tooltip}>{text}</div>}
        </div>
    );
};

export default Tooltip;
