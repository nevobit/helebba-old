import { Button, LineScaleLoader, Menus, ScreenHeader } from '@helebba/design-system/web';
import { Empty } from '../../components';
import styles from './Home.module.css';
import Form from '../../components/Form';
import FormImage from '../../components/FormImage';
import FormLogo from '../../components/FormLogo';
import MainScreen from '../../components/MainScreen';
import { ShareLink } from '../../components/ShareLink';
import { useBookingLocation, useBookingsLocation } from '../../hooks';
import { BookingLocation } from '@helebba/entities';
import { useNavigate, useParams } from 'react-router-dom';
import { Calendar, ChevronDown, Globe, List, Settings } from 'lucide-react';

interface OnboardingState {
  started: boolean;
  completedSettings: boolean;
  completedBackground: boolean;
  completedLogo: boolean;
  finished: boolean;
}

interface OnboardingStep {
  key: keyof OnboardingState;
  component: React.ReactNode;
}


export const Home = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, bookingsLocatios } = useBookingsLocation();
  const { isLoading: isLoadingBooking, bookingLocation } = useBookingLocation();

  const isWorking = isLoading || isLoadingBooking;

  const onboardingSteps: OnboardingStep[] = [
    { key: "started", component: <Empty /> },
    { key: "completedSettings", component: <Form bookingLocation={bookingLocation} /> },
    { key: "completedBackground", component: <FormImage bookingLocation={bookingLocation} /> },
    { key: "completedLogo", component: <FormLogo bookingLocation={bookingLocation} /> },
    { key: "finished", component: <MainScreen /> },
  ];
  const getCurrentStep = (onboarding: OnboardingState): OnboardingStep | undefined => {
    return onboardingSteps.find((step) => !onboarding[step.key]);
  };

  if (isWorking) return <LineScaleLoader />;

  const currentStep = getCurrentStep(bookingLocation.onboarding);



  return (
    <div className={styles.container}>
      <ScreenHeader title='Reservaciones' tip='Cree un perfil comercial, asigne servicios y ofrezca a sus clientes un calendario en línea para reservar citas fácilmente.'
        leftChildren={<>
          <Menus.Menu>
            <Menus.Toggle id='menu-bookin-location' >
              <div className={styles.toggle} >{bookingsLocatios?.items?.find((item: BookingLocation) => item.id == id).name} <ChevronDown size={15} /></div>
            </Menus.Toggle>

            <Menus.List id='menu-bookin-location' >
              {bookingsLocatios.items.map((item: BookingLocation) => (
                <Menus.Button onClick={() => navigate("/crm/bookings/" + item.id)} key={item.id} className={styles.menuButton}  >
                  {item.name}
                </Menus.Button>

              ))}
            </Menus.List>
          </Menus.Menu>
        </>}
      >
        <div className={styles.options} >
          <Menus.Menu>
            <Menus.Toggle id='options-booking-location' >
              <Button size='slim' variant='monochrome'>
                <div className={styles.toggle} ><Settings size={16} /></div>
              </Button>
            </Menus.Toggle>

            <Menus.List id='options-booking-location' >
              <Menus.Button onClick={() => navigate(`/crm/bookings/${id}/public-page`)} className={styles.menuButton}  >
                <Globe size={16} /> Página pública
              </Menus.Button>
              <Menus.Button onClick={() => navigate(`/crm/bookings/${id}/schedules`)} className={styles.menuButton}  >
                <Calendar size={16} /> Horarios de apertura
              </Menus.Button>
              <Menus.Button onClick={() => navigate(`/crm/bookings/${id}/custom-fields`)} className={styles.menuButton}  >
                <List size={16} /> Formulario de reserva
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
          <ShareLink bookingLocation={bookingLocation} />
        </div>
      </ScreenHeader>
      {bookingLocation?.onboarding.finished ? (
        <MainScreen />
      ) : (
        <>
          {currentStep ? <> {currentStep.component}</> : <Empty />}
        </>
      )}
    </div>
  )
}
