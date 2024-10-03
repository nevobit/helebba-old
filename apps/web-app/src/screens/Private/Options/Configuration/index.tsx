import {
  X,
} from "lucide-react";
import styles from "./ModalCreate.module.css";
import Button from "@/components/Shared/Button";
// import { AppStore } from "@/redux/store";
// import { useDispatch, useSelector } from "react-redux";
// import { useUploadImage } from "@/hooks/useUploadImage";
import { Option } from "@/components/UI";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "@/constant-definitions";
import { useUser } from "@/hooks";

const Configuration = () => {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();

  const handleNavigation = (destination: string) => {
    navigate(destination);
  };
  const handleButtonClick = () => {
    navigate(-1);
  };

  const submit = () => {};

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.user}>
              <button onClick={handleButtonClick} >
                <X size={20} />
              </button>
              <h2>
                {user?.name} {user?.lastname}
              </h2>
            </div>
            <Button loading={isLoading} onClick={submit}>
              Guardar
            </Button>
          </div>
          <div className={styles.main}>
            <div className={styles.basic}>
              <h3 className={styles.title}>Ajustes</h3>
              <div className={styles.options}>
                <Option
                  title="Cuenta"
                  copy="Configura y personaliza tu cuenta."
                >
                  <li>Preferencias</li>
                  <li>Administración de usuarios</li>
                  <li>Configuración de correo electrónico</li>
                </Option>
                <Option
                  title="Facturación"
                  copy="Configura las platillas, formas de pago, impuestos y mucho mas."
                >
                  <li>Preferencias</li>
                  <li onClick={() => handleNavigation(PrivateRoutes.DOCUMENTS)}>
                    Plantillas de documentos
                  </li>
                  <li>Metodos de pago</li>
                  <li>Impuestos</li>
                  <li>Confirmidad</li>
                </Option>
                <Option
                  title="Proyectos"
                  copy="Configura los estados y tipos de tareas, facturación y mucho más."
                >
                  <li>Preferencias</li>
                  <li>Facturación y presupuestos</li>
                </Option>
                <Option
                  title="CRM"
                  copy="Administra tus equipos de ventas y configura los tipos de actividades disponibles"
                >
                  <li>Preferencias</li>
                  <li>Campos personalizados</li>
                </Option>
                <Option
                  title="Suscripción"
                  copy="Administra y actualice su plan y metodo de pago"
                >
                  <li>Su suscripción</li>
                </Option>
                <Option
                  title="Mas"
                  copy="Administra tus equipos de ventas y configura los tipos de actividades disponibles"
                >
                  <li>Importar</li>
                  <li>Almacenamiento en la nube</li>
                  <li>Monedas</li>
                  <li  onClick={() => handleNavigation("/settings/api")} >Desarrolladores</li>
                  <li>Papelera</li>
                </Option>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Configuration;
