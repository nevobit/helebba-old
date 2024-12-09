import styles from './Header.module.css';

export const HeaderName = ({ name }: { name: string }) => {
    return (
        <div className={styles.content}>
            <div className={styles.letter}>
                {name?.charAt(0).toUpperCase()}
                {name?.split(" ")[1] ? name?.split(" ")[1]?.charAt(0).toUpperCase() : name?.charAt(1).toUpperCase()}
            </div>
            <h2 className={styles.name}>{name}</h2>
        </div>
    )
}
