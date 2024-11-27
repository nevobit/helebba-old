import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import items from './items';
import { useState } from 'react';
import {
  Plus,
  Search,
  Bell,
  HelpCircle,
  LogOut,
  User,
  Gift,
  CreditCard,
  Settings,
  Package,
  Users,
  Home,
  BookOpen,
  Menu,
} from 'lucide-react';
import HeaderLink from '@/components/Shared/HeaderLink';
import { googleLogout } from '@react-oauth/google';
import { useUser } from '@/hooks';
import { Modal } from '@/containers';
import ProductFrom from '@/screens/Private/Inventory/Products/CreateProduct/ProductFrom';
import ContactFrom from '@/screens/Private/Contacts/CreateContact/ContactFrom';
import WarehouseForm from '@/screens/Private/Inventory/Warehouses/Create/WarehouseForm';
import { useAccount } from '@/features/Accounts/hooks';
import { PrivateRoutes } from '@/router';
import { Button, Menus } from '@helebba/design-system/web';

interface SubPath {
  name: string;
  path: string;
}
interface Path extends SubPath {
  subPaths?: SubPath[];
}
const Header = () => {
  const { user } = useUser();
  const { account } = useAccount();
  const [active, setActive] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const logoutHandler = () => {
    googleLogout();
    localStorage.clear();
    navigate("/login")
  };

  const navigateHash = (route: string) => {
    window.location.hash = route;
  };

  return (
    <Modal>
      <header className={styles.header}>
           <button
        className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu width={28} height={28} color='#fff' />
      </button>
      <nav className={`${styles.nav} ${isMobileMenuOpen ? `${styles.mobile_menu} ${styles.active}` : ''}`}>
          <NavLink
            to="/"
            onClick={() => setActive(() => '')}
            className={
              active == '' ? `${styles.active} ${styles.logo}` : styles.logo
            }>
            {' '}
            <img src="/isotype.svg" alt="Logo Helebba" width={155} />{' '}
          </NavLink>
          {items.map((item: Path) => (
            <HeaderLink
              active={active}
              setActive={setActive}
              key={item.name}
              {...item}
            />
          ))}
        </nav>
        <div>
            <div className={styles.menus}>
              <div className={styles.btn_menu}>
                <Menus.Menu>
                  <Menus.Toggle id="header">
                  <Plus color="#fff" size={22} />
                  </Menus.Toggle>

                  <Menus.List id="header">
                    <div className={styles.list}>
                      <Modal.Open opens="contact">
                        <Menus.Button>
                        <Users size={16} color="rgba(0,0,0,0.6)" /> Contacto
                        </Menus.Button>
                      </Modal.Open>

                      <Modal.Open opens="product">
                        <Menus.Button>
                        <Package size={16} color="rgba(0,0,0,0.6)" /> Producto
                        </Menus.Button>
                      </Modal.Open>
                      <Modal.Open opens="warehouse">
                        <Menus.Button>
                        <Home size={16} color="rgba(0,0,0,0.6)" /> Almacén
                        </Menus.Button>
                      </Modal.Open>
                    </div>
                  </Menus.List>
                </Menus.Menu>
              </div>

            <Button style={{
              padding: 0
            }} variant="plain" onClick={() => navigateHash('search')}>
                <Search color="#fff" size={20} />
            </Button>

              <div className={styles.btn_menu}>
                <Menus.Menu>
                  <Menus.Toggle id="notifications">
                    <Bell color="#fff" size={20} />
                  </Menus.Toggle>

                  <Menus.List id="notifications">
                    <div className={styles.notifications}>
                      <h3>Notificaciones</h3>
                      <p>No hay notificaciones... ¡todavia!</p>
                      <p>
                        Los mensajes y alertas sobre tu cuenta de Helebba
                        aparecerán aquí.
                      </p>
                    </div>
                  </Menus.List>
                </Menus.Menu>
              </div>

              <a href="https://wa.link/5uj5mf" target="_blank">
              <HelpCircle color="#fff" size={20} style={{
                marginTop: 5
              }} />
              </a>
          </div>

          <Menus.Menu>
            <Menus.Toggle id='user-options'>
              <div className={styles.user_btn}>
              <span>{user?.name?.charAt(0)}</span>
                <div>
                  <h3 className={styles.user_name}>
                    {user?.name} {user?.lastname}
                  </h3>
                  <p className={styles.account}>{account?.name}</p>
                </div>
              </div>
            </Menus.Toggle>

            <Menus.List id='user-options' >
              <span className={styles.user_options}>
                <li>
                  <button onClick={() => navigateHash('/settings/profile')}>
                    <User size={16} /> Editar perfil
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateHash('settings/configuration')}>
                    <Settings size={16} /> Configuración
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateHash('settings/subscription')}>
                    <CreditCard size={16} /> Suscripción
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate(PrivateRoutes.REFERRALS)}>
                    <Gift size={16} /> Invita y gana 50 CO$
                  </button>
                </li>
                <span className={styles.sepator}></span>
                <li>
                  <button onClick={() => navigate("/partners/marketplace")}>
                    <BookOpen size={16} /> Asesores financieros
                  </button>
                </li>
                <span className={styles.sepator}></span>
                <li>
                  <Link to={PrivateRoutes.ACCOUNTS_NEW}>
                    <Plus size={16} /> Anadir cuenta
                  </Link>
                </li>
                <li>
                  <button onClick={logoutHandler}>
                    <LogOut size={16} /> Cerrar sesión
                  </button>
                </li>
              </span>
            </Menus.List>
          </Menus.Menu>

        </div>
      </header>
      <Modal.Window
        width={1250}
        styleHeader={{
          padding: 20,
          paddingBottom: 0,
        }}
        style={{
          padding: 0,
        }}
        title="Crear Producto"
        name="product">
        <ProductFrom />
      </Modal.Window>

      <Modal.Window title="Crear Contacto" name="contact">
        <ContactFrom />
      </Modal.Window>

      <Modal.Window title="Crear Almacén" name="warehouse">
        <WarehouseForm />
      </Modal.Window>
    </Modal>
  );
};

export default Header;
