import styles from './CheckPoint.module.css'

interface Props {
 children: React.ReactNode
}

const CheckPoint = ({children}: Props) => {
  return (
    <div className={styles.point}>
      {children}
    </div>
  )
}

export default CheckPoint
