import { Empty, ScreenHeader } from "@/containers";
import Image from "/images/empty/contacts.png";
import ScreenContainer from "@/containers/ScreenContainer";
import { useState } from "react";
import { useContact, useContacts } from "@/hooks";
import CreateContact from "./CreateContact";
import LineScaleLoader from "@/containers/Loader";
import { useContactStore } from "@/state-manager";
import Info from "./Info";
import styles from "./Contacts.module.css"
import ContactTable from "./Table/ContactTable";
const title = "Contacto";

const Contacts = () => {
  const [open, setOpen] = useState(false);
  const { isLoading, contacts } = useContacts();
  const { refetch } = useContact();
  const [option, setOption] = useState("");
  const selectContactId = useContactStore((state) => state.selectContact);

  const handler = async (id: string) => {
    await selectContactId(id);
    refetch();
    setOpen(true);
  };

  const [search,setSearch] = useState('');

  if (isLoading) return <LineScaleLoader />;

  return (
    <>
      <ScreenHeader defaultOptions title={title}>
        <CreateContact
          text={
            <>
              Nuevo contacto{' '}
              <span
                className={styles.shortcut}
                title="Acceso directo, presiona N">
                N
              </span>
            </>
          }
        />
      </ScreenHeader>
      <ScreenContainer isContact option={option} setOption={setOption} setSearch={setSearch}>
        {contacts?.items.length > 0 ? (
          <ContactTable option={option} search={search} handler={handler} />
        ) : (
          <Empty
          button={
            <CreateContact 
            text={
              <>Añade tu primer contacto </>
            } />
          }
            title={title}
            copy="Aquí es donde puede administrar a sus clientes o proveedores y toda su información."
            image={Image}
          />
        )}
      </ScreenContainer>
      {/* <Modal
        isOpen={openDelete}
        closeButton
        closeModal={() => setOpenDelete(false)}
        footer={
          <div>
            <Button variant="danger" onClick={deleteButton}>
              Confirmar
            </Button>
          </div>
        }
      >
        <p>¿Estas seguro?</p>
      </Modal> */}
      <Info
        open={open}
        // edit={editContact}
        // deleteContact={deleteContactHandler}
        closeModal={() => setOpen(false)}
      />
      {/* {openCreate && <CreateContact setOpen={setOpenCreate} />} */}

      {/* {openUpdate && (
        <UpdateContact setOpen={setOpenUpdate} uuid={selectedContact} />
      )} */}
    </>
  );
};

export default Contacts;
