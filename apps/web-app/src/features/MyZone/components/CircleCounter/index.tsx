import styles from "./CircleCounter.module.css";

const CircleCounter = ({ count, max = 30 }: { count: number, max?: number }) => {
    const percentage = Math.min((count / max) * 100, 100);

    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className={styles.container}>
            <svg className={styles.circleSvg} width="120" height="120">
                <circle
                    className={styles.circleBackground}
                    cx="60"
                    cy="60"
                    r={radius}
                />
                <circle
                    className={styles.circleProgress}
                    cx="60"
                    cy="60"
                    r={radius}
                    style={{
                        strokeDasharray: `${circumference} ${circumference}`,
                        strokeDashoffset: offset,
                    }}
                />
            </svg>
            <span className={styles.number}>{count}</span>
        </div>
    );
};

export default CircleCounter;
