import { X } from "lucide-react";
import styles from "./ModalCreate.module.css";
import Button from "@/components/Shared/Button";
import Field from "@/components/Shared/Field";
import Input from "@/components/Shared/Input";
import { useState } from "react";
import { useEditUser, useUser } from "@/hooks";
import LineScaleLoader from "@/containers/Loader";
import { useNavigate } from "react-router-dom";
import { User } from "@helebba/entities";

const EditProfile = () => {
  const { isLoading, user } = useUser();
  const { isEditing, editUser } = useEditUser();
  
  const [admin, setAdmin] = useState<Partial<User>>({
    name: user?.name,
    lastname: user?.lastname,
    email: user?.email,
    phone: user?.phone,
  });

  
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAdmin((prev: Partial<User>) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
   
  const submit = () => {
    editUser({...admin, id: user?.id}, { 
      onSuccess(){
        navigate(-1);
      }
     })
  }

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(-1);
  };

  if(isLoading){
    return <LineScaleLoader />
  }
  
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.user}>

          <button onClick={handleButtonClick} >
              <X size={20} />
            </button>
            <h2>Perfil de usuario: {user?.email} </h2>
            </div>
            <Button loading={isEditing} onClick={submit}>Guardar</Button>

          </div>
          <div className={styles.main}>            
              <div className={styles.basic}>
                <h3 className={styles.title}>Perfil de usuario</h3>

                <div className={styles.photo}>
                  <div>
                  <span>
                    {user?.name.charAt(0)}
                    {user?.lastname.charAt(0)}
                    </span>
                  </div>
                  <Button variant="third">Subir foto</Button>
                </div>
                <div className={styles.info}>

                <Field label="Nombre">
                  <Input
                    name="name"
                    placeholder="Agrega un nombre a tu producto"
                    onChange={handleChange}
                    value={admin.name}
                  />
                </Field>

                <Field label="Apellido">
                  <Input name="description" value={admin.lastname} onChange={handleChange} placeholder="" />
                </Field>

                <Field label="Telefono *">
                  <Input name="description" onChange={handleChange} placeholder="" value={admin.phone} />
                </Field>

                <Field label="Idioma">
                  <Input name="description" onChange={handleChange} placeholder="" />
                </Field>
                </div>

                <div className={styles.option}>
                  <h3>CONTRASEÑA</h3>
                  <p>Modifica la contraseña que utilizas actualmente para acceder a tu cuenta en Helebba.</p>
                  <Field>
                    <Button variant="third">Cambiar contraseña</Button>
                  </Field>
                </div>

                <div className={styles.option}>
                  <h3>AUTENTICACIÓN DE DOS FACTORES</h3>
                  <p>La autenticación de dos factores hace que su cuenta sea más segura. Junto con su contraseña, deberá ingresar el código secreto que le enviamos por mensaje de texto a su teléfono cada vez que inicie sesión.</p>
                  <Field>
                    <Button variant="third">Activar</Button>
                  </Field>
                </div>
                <div className={styles.option}>
                  <h3>PERSONALIZA LA BARRA SUPERIOR</h3>
                  <p>Elige tus elementos de la barra superior y ordénalos como quieras.</p>
                  <Field>
                    <Button variant="third">Personaliza la barra Superior</Button>
                  </Field>
                </div>

              </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default EditProfile;
