import { ScreenHeader } from '@helebba/design-system/web';
import { Empty } from '../../components';
// import styles from './Home.module.css';

export const Home = () => {
  return (
    <div>
      <ScreenHeader title='Reservaciones' tip='Cree un perfil comercial, asigne servicios y ofrezca a sus clientes un calendario en línea para reservar citas fácilmente.'>
        <div></div>
      </ScreenHeader>
      <Empty />

    </div>
  )
}
