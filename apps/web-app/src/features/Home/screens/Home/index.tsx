import styles from './Home.module.css'
import { ArrowRight, BookOpen, Box, Briefcase, CheckCircle, Crosshair, File, Lock, ShoppingCart, Users, Video } from 'lucide-react'
import countries from '@/utilities/countries'
import { Link } from 'react-router-dom'
import { useExpenses, useIncome, useUser } from '@/hooks'
import { useEffect, useState } from 'react'
import { useAccountStore } from '@/state-manager'
import { DivisaFormater } from '@/utilities'
import { useAccount, useEditAccount } from '@/features/Accounts/hooks'
import { Button, Field, Input, useForm } from '@helebba/design-system/web'
import { CheckPoint, Success } from '@/components'
import { PrivateRoutes } from '@/router'
import CreateInvitation from '@/screens/HashScreens/Invitations/CreateInvitation'

const Home = () => {
  const { user } = useUser();
  const { account }= useAccount();
  const { isEditing, editAccount } = useEditAccount();
  const { income } = useIncome();
  const { expenses } = useExpenses();


  const step = 0;
  const { formState: accountUpdated, handleChange, setFormState} = useForm({
    id: account?.id,
    name: account?.name,
    identification: account?.identification,
    address: account?.address,
    postal_code: account?.postal_code,
    city: account?.city,
    country: account?.country,
  });
  const selectedCountryIndex = countries.findIndex(country => country.code === account?.country);
  const selectAccount = useAccountStore((state) => state.selectAccount);

  const [confirm, setConfirm] = useState(false);
  const handleShowToast = () => {
    setConfirm(true);
    setTimeout(() => {
      setConfirm(false);
    }, 2000);
  };

  console.log(confirm)

  const updateAccountHandler = () => {
    editAccount(accountUpdated, {
      onSuccess(data){
        selectAccount(data)
        handleShowToast()
      }
    })
  }
  
  useEffect(() => {
    setFormState({
      id: account?.id,
      name: account?.name,
      identification: account?.identification,
      address: account?.address,
      postal_code: account?.postal_code,
      city: account?.city,
      country: account?.country,
    })
  }, [account])
  
  
  return (
    <div className={styles.body}>
      <div className={styles.banner}></div>
      <div className={styles.home_body}>
        <div className={styles.home_header}>
        <h2>¡Hola, {user?.name}!</h2>
        <p>Tu camino en Helebba no ha hecho más que empezar. <br />
        A partir de ahora, cada acción que realices potenciará la gestión de tu negocio. ¿Listo para seguir adelante?</p>
        </div>

        <div className={styles.metrics} >
          <div>
            <h4>Ingresos</h4>
            <h2>{DivisaFormater({ value: income, country: account?.country })}</h2>
          </div>
          <div>
            <h4>Gastos</h4>
            <h2>{DivisaFormater({ value: expenses, country: account?.country })}</h2>
          </div>
          <div>
            <h4>Ganancia</h4>
            <h2>{DivisaFormater({ value: income - expenses, country: account?.country })}</h2>
          </div>
        </div>
        {step == 0 ? (
        <div className={styles.panel_home}>
          <div className={styles.panel_header}>
            <h3>Emepezar a facturar</h3>
            <p>Complete los sigueintes pasos para configurar sus documentos de vantas y mejorar su proceso de pago.</p>
          </div>
          <div className={styles.panel_details}>
            <div className={styles.steps}>
              <button className={`${styles.step} ${step === 0 ? styles.activeStep : ''}`}>
                <h4><Briefcase size={16} /> Los detalles de su negocio</h4>
              </button>
              {/* <button className={`${styles.step} ${step === 1 ? styles.activeStep : ''}`}>
                <h4><PenTool size={16} />Personaliza tus facturas</h4>
              </button>
              <button className={`${styles.step} ${step === 2 ? styles.activeStep : ''}`}>
                <h4><DollarSign size={16} /> Vincula tus cuentas bancarias</h4>
              </button>
              <button className={`${styles.step} ${step === 3 ? styles.activeStep : ''}`}>
                <h4><Briefcase size={16} /> Agregar metodo de pago</h4>
              </button> */}
            </div>
            {step == 0 ? (
              
            <div className={styles.content}>
              <h3>Completa los datos de tu negocio</h3>
              <p>Complete estos campos con la informacion que utilizo para registrar legalmente su empresa.</p>
              <div className={styles.first}>
                <Field label='Nombre de la empresa'>
                  <Input defaultValue={account?.name} value={accountUpdated.name} name='name'  onChange={handleChange} />
                </Field>
                <Field label='ID de la empresa'>
                  <Input name='identification' value={accountUpdated.identification} onChange={handleChange} />
                </Field>
              </div>
              <Field label='Dirección'>
                  <Input  name='address' value={accountUpdated.address} onChange={handleChange} />
                </Field>
                <div className={styles.first}>
                <Field label='Codigo postal'>
                  <Input name='postal_code' value={accountUpdated.postal_code} onChange={handleChange}  />
                </Field>
                <Field label='Ciudad'>
                  <Input name='city' value={accountUpdated.city} onChange={handleChange} />
                </Field>
                <Field label='Pais'>
                  <select defaultValue={countries[selectedCountryIndex]?.code} value={accountUpdated.country} name='country' onChange={handleChange} >
                    {countries.map((country) => (
                    <option key={country?.code} value={country?.code}>{country?.name}</option>
                      
                    ))}
                  </select>
                </Field>
                </div>
                <Button  loading={isEditing} onClick={updateAccountHandler} className={styles.btn}>Continuar</Button>
            </div>
            ): null}
            
          </div>
        </div>
        ): null}


        {user?.plan == "trial" && (
          
          <div className={`${styles.panel_home} ${styles.trial_panel}`}>
            <span>Periodo de prueba</span>

            <h3>Elige tu plan ahora y obtén 50% de descuento</h3>
            <p>Entendemos que esto lleva tiempo, por eso te hacemos un descuento especial para que descubras todo nuestro potencial</p>

            <div className={styles.tags} >
              <span><Lock size={16} color='rgba(0,0,0,0.6)' /> Facturación</span>
              <span><Lock size={16} color='rgba(0,0,0,0.6)' /> Contabilidad</span>
              <span><Lock size={16} color='rgba(0,0,0,0.6)' /> Inventario</span>
              <span><Lock size={16} color='rgba(0,0,0,0.6)' /> Banca</span>
              <span><Lock size={16} color='rgba(0,0,0,0.6)' /> CRM</span>
              <span><Lock size={16} color='rgba(0,0,0,0.6)' /> Recursos Humanos</span>
              <span><Lock size={16} color='rgba(0,0,0,0.6)' /> Proyectos</span>
            </div>

            <Button>Elije tu plan</Button>
          </div>
        
        )}
        <div className={styles.panel_home}>
          <div className={styles.panel_header}>
            <h3>Acciones pendientes</h3>
          </div>
          <div className={styles.panel_content}>
            <CheckPoint><CheckCircle size={18} /> </CheckPoint>
            <p>No tienes acciones pendientes</p>
          </div>
        </div>
      </div>
      
      <div className={styles.home_footer}>
        <h2>Sacale el maximo partido a Helebba</h2>
        <p>Personalizar Helebba es fácil con la orientación adecuada. <br />
        Explore esta sección para descubrir cómo adaptar Helebba a sus necesidades y preferencias específicas.</p>
        
        <div className={styles.panel_home}>
          <div className={styles.panel_header}>
            <h3>Invita a tu equipo</h3>
            <p>Invita a tus compañeros de trabajo a unirse a tu equipo en Helebba y comienza a trabajar juntos en una ubicación centralizada.</p>
          </div>
          <div className={styles.panel_content}>
            <CreateInvitation />
            <p className={styles.blue_p}>Aprende a administrar usuarios</p>
          </div>
        </div>
        
        <div className={styles.panel_home}>
          <div className={styles.panel_header}>
            <h3>Aprende a usar Helebba</h3>
            <p>Descubre nuestros recursos y ponte en contacto con nuestro equipo para recibir orientación experta sobre cómo utilizar Helebba al máximo.</p>
          </div>
          <div className={styles.panel_buttons}>
            <a href="https://wa.link/5uj5mf" target="_blank">
              <div>
              <CheckPoint> <BookOpen size={18} /> </CheckPoint>
                <div>
                <h3>Academy, tu punto de referencia</h3>
                <p>Descubre articulos utiles sobre cada parte de Helebba.</p>
                </div>
              </div>
              <span>Importar <ArrowRight size={14} /> </span>
            </a>
            <a href="https://wa.link/5uj5mf" target="_blank">
              <div>
              <CheckPoint> <Video size={18} /> </CheckPoint>
                <div>
                <h3>Seminarios web cada semana</h3>
                <p>Unete a nuestros webinars semanales para aprender sobre como gestionar tu negocio.</p>
                </div>
              </div>
              <span>Importar <ArrowRight size={14} /> </span>
            </a>
            <a href="https://wa.link/5uj5mf" target="_blank">
              <div>
              <CheckPoint> <Crosshair size={18} /> </CheckPoint>
                <div>
                <h3>Pongase en contacto con nuestro equipo de exito del cliente</h3>
                <p>Migra tus contactos y accede a ellos desde cualquier documento.</p>
                </div>
              </div>
              <span>Importar <ArrowRight size={14} /> </span>
            </a>
          </div>
        </div>
    
        <div className={styles.panel_home}>
          <div className={styles.panel_header}>
            <h3>Encuentre a su contador</h3>
            <p>Invita a tu asesoría o navega por nuestro directorio de profesionales de confianza para conectar con un experto que comprenda tus necesidades únicas</p>
          </div>
          <div className={styles.panel_content}>
            <a href="https://wa.link/5uj5mf" target="_blank" >Encontrar contador</a>
            <p className={styles.blue_p}>Descubre las ventajas de la contabilidad colaborativa</p>
          </div>
        </div>
            
        <div className={styles.panel_home}>
          <div className={styles.panel_header}>
            <h3>Importa tus datos</h3>
            <p>Importe todos sus datos desde archivos de Excel o directamente desde cualquier otro software de contabilidad</p>
          </div>
          <div className={styles.panel_buttons}>
            <Link to={PrivateRoutes.INVOICES}>
              <div>
              <CheckPoint> <File size={18} /> </CheckPoint>
                <div>
                <h3>Facturas</h3>
                <p>Sube tus facturas de venta para consolidar las finanzas de tu negocio.</p>
                </div>
              </div>
              <span>Importar <ArrowRight size={14} /> </span>
            </Link>
            <Link to={PrivateRoutes.EXPENSES}>
              <div>
              <CheckPoint> <ShoppingCart size={18} /> </CheckPoint>
                <div>
                <h3>Compras</h3>
                <p>Importa tus gastos y sigue la evolucion de tu negocio.</p>
                </div>
              </div>
              <span>Importar <ArrowRight size={14} /> </span>
            </Link>
            <Link to={PrivateRoutes.CONTACTS}>
              <div>
              <CheckPoint> <Users size={18} /> </CheckPoint>
                <div>
                <h3>Contactos</h3>
                <p>Migra tus contactos y accede a ellos desde cualquier documento.</p>
                </div>
              </div>
              <span>Importar <ArrowRight size={14} /> </span>
            </Link>
            <Link to={PrivateRoutes.PRODUCTS}>
              <div>
              <CheckPoint> <Box size={18} /> </CheckPoint>
                <div>
                <h3>Productos</h3>
                <p>Importa tus products e incluyelos en tus documentos de venta.</p>
                </div>
              </div>
              <span>Importar <ArrowRight size={14} /> </span>
            </Link>
          </div>
        </div>
        
        <div className={styles.panel_home}>
          <div className={styles.panel_header}>
            <h3>Proteja su cuenta</h3>
            <p>Activa la autenticación de dos factores (2FA) para mantener tu cuenta de Helebba y los datos de tu negocio seguros contra accesos no autorizados.</p>
          </div>
          <div className={styles.panel_content}>
            <a href="https://wa.link/5uj5mf" target="_blank">Activar 2FA</a>
            <p className={styles.blue_p}>Aprende a mantener tu cuenta segura</p>
          </div>
        </div>
      </div>

            <Success confirm={confirm} />
    </div>
  )
}

export default Home
