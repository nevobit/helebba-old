import { useContact } from '@/hooks';
import styles from './Contact.module.css';
import LineScaleLoader from '@/containers/Loader';
import { Link } from 'react-router-dom';
import { ArrowLeft, Link as LinkIcon } from 'lucide-react';
import { PrivateRoutes } from '@/constant-definitions';

const Contact = () => {
  const { isLoading, contact } = useContact();

  if (isLoading) return <LineScaleLoader />;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Link to={PrivateRoutes.CONTACTS}>
            <ArrowLeft size={18} color='rgba(0,0,0,0.6)' />
          </Link>
          <span>
            {contact?.name.split(' ')[0].substring(0, 1)}
            {contact?.name.split(' ')[1].substring(0, 1)}
          </span>

          <h3>{contact.name}</h3>
        </div>
      </div>
      <div className={styles.tabs}>
        <button className={styles.active} >Resumen</button>
        {/* <button>Notas</button> */}
        {/* <button>Archivos</button> */}
      </div>

      <div className={styles.content}>
        <div className={styles.information}>
          <div className={styles.element} >
            <span>Correo electrónico</span>
            <a
            href={contact?.email?.length > 4 ? `mailto:${contact?.email}` : "#"}
          >{contact?.email}</a>
          </div>
          {contact?.socialNetworks?.website && (

          <div className={styles.element} >
            <span>Página web</span>
            <button>{contact?.socialNetworks?.website}</button>
          </div>
          )}

          <div className={styles.line} />

          <div className={styles.element}>
            <h3>Dirección</h3>
            <span>Dirección</span>
            <a target="_blank" href={ contact.billAddress?.address? `https://www.google.com/maps?q=${contact.billAddress.address}+${contact.billAddress.city}` : ""  } className={styles.action}>{contact?.billAddress?.address}</a>
          </div>
          <div className={styles.element} >
            <span>País</span>
            <p>{contact?.billAddress?.country}</p>
          </div>

          <div className={styles.line} />
          <div className={styles.element}>
            <h3>Campos personalizados</h3>
            <button>Agregar campos personalizados</button>
          </div>
          <div className={styles.line} />
          <div className={styles.element}>
            <button style={{
              paddingTop: 20
            }} ><LinkIcon size={15} />  Redes sociales</button>
          </div>
          <div className={styles.line} />

        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
