import { useEffect, useState } from "react";
import styles from "./Info.module.css";
import {
  ArrowRight,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ButtonOptions from "@/components/Shared/ButtonOptions";
import { useContact, useDeleteContact } from "@/hooks";
import LineScaleLoader from "@/containers/Loader";
import { Modal } from "@/containers";
import Menus from "@/components/Shared/Menus";
import ContactFrom from "../CreateContact/ContactFrom";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "@/constant-definitions";

interface Props {
  open: boolean;
  closeModal: () => void;
  deleteContact?: (uuid: string) => void;
}

const Info = ({ open, closeModal }: Props) => {
  const { isLoading, isPending, contact, refetch } = useContact();
  const { deleteContact } = useDeleteContact();

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, isEmail: boolean) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if (isEmail) {
          setCopiedEmail(true);
        } else {
          setCopiedPhone(true);
        }
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles: ", err);
      });
  };


  setTimeout(() => {
    if(copiedEmail){
      setCopiedEmail(false)
    }
    if(copiedPhone){
      setCopiedEmail(false)
    }
  }, 3000)
  useEffect(() => {
    refetch()
  }, [refetch])

  if(isLoading || isPending) return <LineScaleLoader />
 
  return (
    <Modal>

    <Menus.Menu>
      <div
        className={
          !open
            ? styles.modal_overlay
            : `${styles.modal_overlay} ${styles.open}`
        }
        onClick={closeModal}
      />
      <div className={!open ? styles.modal : `${styles.modal} ${styles.open}`}>
        <div className={styles.header}>
          <div>
            <h3>{contact?.name?.charAt(0)}</h3>
            <h2>{contact?.name}</h2>
          </div>
          <ButtonOptions>
          <Modal.Open opens="edit">
                <Menus.Option >Editar</Menus.Option>
              </Modal.Open>
            {/* <li>
              <span onClick={() => edit(contact.uuid)}>Editar</span>
            </li> */}
            <li>
              <span onClick={() => deleteContact(contact.id, { onSuccess(){
                closeModal()
              } })}>Eliminar</span>
            </li> 
          </ButtonOptions>
        </div>

        <div className={styles.actions}>
          <a
            href={contact?.email?.length > 4 ? `mailto:${contact?.email}` : "#"}
            className={styles.action}
          >
            <div>
              <Mail
                color={
                  contact?.email?.length > 4
                    ? "var(--main-color)"
                    : "rgba(100,100,100,.5)"
                }
              />
            </div>
            <p>Correo electrónico</p>
          </a>
          <a target="_blank" href={contact?.phone?.length > 4 ? `https://wa.me/${contact.phone}` : ""   } className={styles.action}>
            <div>
              <Phone
                color={
                  contact?.phone?.length > 4
                    ? "var(--main-color)"
                    : "rgba(100,100,100,.5)"
                }
              />
            </div>
            <p>Llamada</p>
          </a>
          <a href={contact?.socialNetworks?.website ? contact.socialNetworks.website : ""} target="_blank" className={styles.action}>
            <div>
              <Globe
                color={
                  contact?.socialNetworks?.website?.length > 4
                    ? "var(--main-color)"
                    : "rgba(100,100,100,.5)"
                }
              />
            </div>
            <p>Web</p>
          </a>
          <a target="_blank" href={ contact?.billAddress?.address? `https://www.google.com/maps?q=${contact?.billAddress?.address}+${contact?.billAddress?.city}` : ""  } className={styles.action}>
            <div>
              <MapPin
                color={
                  contact?.billAddress?.address && contact?.billAddress?.address?.length  > 4
                    ? "var(--main-color)"
                    : "rgba(100,100,100,.5)"
                }
              />
            </div>
            <p>Mapa</p>
          </a>
          <Link to={`${PrivateRoutes.CONTACT}/${contact?.id}`} className={styles.action}>
            <div>
              <ArrowRight />
            </div>
            <p>Más</p>
          </Link>
        </div>

        <div className={styles.edit}>
          <h3>Información del contacto</h3>
          {/* <span onClick={() => edit(contact.uuid)}>Editar</span> */}
        </div>
        {(contact?.email || contact?.phone) && (
          <ul className={styles.contact_info}>
            {contact?.email && (
              <li>
                <span>Correo</span>{" "}
                <span>
                  {copiedEmail ? (
                    <span>Copiado</span>
                  ) : (
                    <>
                      {contact.email}{" "}
                      <button
                        onClick={() => copyToClipboard(contact.email, true)}
                      >
                        Copiar
                      </button>
                    </>
                  )}
                </span>
              </li>
            )}

            {contact?.phone && (
              <li>
                <span>Celular</span>{" "}
                <span>
                  {copiedPhone ? (
                    <span>Copiado</span>
                  ) : (
                    <>
                      {contact.phone}{" "}
                      <button
                        onClick={() => copyToClipboard(contact.phone, false)}
                      >
                        Copiar
                      </button>
                    </>
                  )}
                </span>
              </li>
            )}

{contact?.billAddress?.address && (
              <li>
                <span>Dirección</span>
                <span>
                    {contact?.billAddress.address}
                </span>
              </li>
            )}

{contact?.billAddress?.city && (
              <li>
                <span>Ciudad</span>
                <span>
                    {contact?.billAddress.city}
                </span>
              </li>
            )}

{contact?.billAddress?.province && (
              <li>
                <span>Provincia</span>
                <span>
                    {contact?.billAddress.province}
                </span>
              </li>
            )}
          </ul>
        )}


        

        

        {/* <div className={styles.new}>
          <h3>Crear nuevo</h3>
          <div className={styles.options}>
            <Link to="/">
              <Edit size={14} /> Nota
            </Link>
            <Link to="/">
              <List size={14} /> Presupuesto
            </Link>
            <Link to="/">
              <Send size={14} /> Factura
            </Link>
            <Link to="/">
              <Calendar size={14} /> Actividad
            </Link>
            <Link to="/">
              <ShoppingCart size={14} /> Compra
            </Link>
          </div>
          </div> */}
      </div>

      <Modal.Window title="Editar Contacto" name="edit">
              <ContactFrom contactToEdit={contact} />
      </Modal.Window>
    </Menus.Menu>
    </Modal>

  );
};

export default Info;
