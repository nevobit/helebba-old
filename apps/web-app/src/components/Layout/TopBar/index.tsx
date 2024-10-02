import styles from './TopBar.module.css';
// import Plans from '@/containers/Plans';
import { useUser } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Modal } from '@/containers';
import Plans from '@/screens/Private/TrialExpired/Plans';
import { SubscriptionType } from '@helebba/entities';
import { PrivateRoutes } from '@/router';
import { useSubscription } from '@/hooks/subscriptions';

const TobBar = () => {
  const { subscription } = useSubscription();
  const { user } = useUser();
  const trialEndDate = new Date(user?.trialEndDate || "");
  const trialStartDate = new Date();
  
  const differenceInMs = trialEndDate.getTime() - trialStartDate.getTime();
  const differenceInDays = Math.floor(differenceInMs / (1000 * 3600 * 24));
  const navigate = useNavigate();

  useEffect(() => {
    if (differenceInDays <= 0) {
      navigate(PrivateRoutes.TRIAL_EXPIRED);
    }
  }, [differenceInDays, navigate]);

  return (
    <Modal>
    {subscription?.type == SubscriptionType.FREE && (

      <div className={styles.container}>
        <p>
          Te quedan {differenceInDays > 0 ? differenceInDays : 0}{' '}
          {differenceInDays > 1 ? 'días' : 'día'} de prueba.{' '}
          <Modal.Open opens="plans">
          <button>
            Actualice ahora y obtenga su 50% de descuento
          </button>
          </Modal.Open>

        </p>
      </div>
    )}

<Modal.Window  style={{
                width: "100%",
                height: "100%"
            }} title={"Planes"} name='plans'>
                <Plans />
            </Modal.Window>

      {/* {openPlans && <Plans setOpen={setOpenPlans} />} */}
    </Modal>
  );
};

export default TobBar;
