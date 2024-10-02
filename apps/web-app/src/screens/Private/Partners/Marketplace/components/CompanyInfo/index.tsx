import { Globe, Phone } from "lucide-react"
import { Company } from "../../mocks/Company"
import styles from "./Info.module.css"

const CompanyInfo = ({ company }: { company?: Company }) => {
  return (
    <div className={styles.card}>
        <div className={styles.info} >
                <img src={company?.logo} width={150} alt={company?.name} />

                <div className={styles.divider} ></div>

                <div className={styles.data} > <Globe size={18} /> {company?.website} </div>
                <div className={styles.data} > <Phone size={18} /> {company?.phone} </div>

        </div>
        <div>
            <h4 className={styles.title} >Descripción</h4>
            <p className={styles.desc} >{company?.description}</p>

            <h4 className={styles.title}  >Industrias</h4>
            <div className={styles.list} >
            {company?.industries?.map((item) => (
                <span key={item} className={styles.item}>{item}</span>
            ))}
            </div>

            <h4 className={styles.title}  >Servicios</h4>
            <div className={styles.list} >
            {company?.services?.map((item) => (
                <span key={item} className={styles.item}>{item}</span>
            ))}
            </div>
            
        </div>
    </div>
  )
}

export default CompanyInfo