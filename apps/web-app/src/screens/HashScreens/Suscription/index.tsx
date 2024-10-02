import { X } from "lucide-react";
import styles from "./ModalCreate.module.css";
import { useUser } from "@/hooks";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
    const { user } = useUser();

    const navigate = useNavigate();
  const trialEndDate = new Date(user?.trialEndDate || "");
const trialStartDate = new Date();

const differenceInMs = trialEndDate.getTime() - trialStartDate.getTime();
const differenceInDays = Math.floor(differenceInMs / (1000 * 3600 * 24));

const progress = (14 - differenceInDays) / 14 * 100;
const handleButtonClick = () => {
  navigate(-1);
};
  
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.user}>

          <button onClick={handleButtonClick} >
              <X size={20} />
            </button>
            <h2>{user?.name} {user?.lastname}</h2>
            </div>

          </div>
          <div className={styles.main}>     
              <h2 className={styles.super_title}>Suscripcion</h2>     
              <div className={styles.basic}>
                <div className={styles.basic_header}>
                  <div>
                    <h3 className={styles.title}>Prueba</h3>
                    <p className={styles.copy}>Disfruta de todas las funciones de Helebba gratis durante 14 días y decide cuál se adapta mejor a tu negocio.</p>
                  </div>
                  <h3 className={styles.title}>Gratis</h3>
                </div>

                <div className={styles.progress_bar}>
                  <div className={styles.title}>
                    <p>14 días de prueba</p>
                    <p>{differenceInDays} Días restantes</p>
                  </div>
                  <div className={styles.bar}>
                    <div className={styles.progress} style={{width: `${progress}%`}} />
                  </div>
                </div>
              </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Subscription;
