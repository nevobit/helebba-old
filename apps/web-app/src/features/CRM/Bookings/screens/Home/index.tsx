import { ScreenHeader } from '@helebba/design-system/web';
import { Empty } from '../../components';
import styles from './Home.module.css';
// import Form from '../../components/Form';
// import FormImage from '../../components/FormImage';
// import FormLogo from '../../components/FormLogo';
import MainScreen from '../../components/MainScreen';
import { ShareLink } from '../../components/ShareLink';

export const Home = () => {
  const isConfigured = true;
  return (
    <div className={styles.container}>
      <ScreenHeader title='Reservaciones' tip='Cree un perfil comercial, asigne servicios y ofrezca a sus clientes un calendario en línea para reservar citas fácilmente.'>
        <div>
          <ShareLink />
        </div>
      </ScreenHeader>

      {!isConfigured && (
        <Empty />
      )}

      {/* <Form /> */}
      {/* <FormImage /> */}
      {/* <FormLogo /> */}
      <MainScreen />

    </div>
  )
}
