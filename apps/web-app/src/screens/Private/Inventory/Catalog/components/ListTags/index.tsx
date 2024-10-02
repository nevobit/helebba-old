import { Tag } from "lucide-react"
import styles from './listTags.module.css'
import { Articulo } from '../Table/CatalogTable'
import CreateContact from "@/screens/Private/Contacts/CreateContact"
import Image from "/images/empty/contacts.png";
import { Empty } from "@/containers"

const title = 'Catálogo'

interface Props {
  catalogo: Articulo[]
}

export const CatalogListTags: React.FC<Props> = ({ catalogo }) => {

  return (
    <div className={styles.container}>
      {catalogo?.length > 0 ? (
        catalogo.map((p) => (
          <div className={styles.tagsProduct}>
            <Tag size={100} />
            <div className={styles.content}>
              <h2>{p.nombre}</h2>
              <span>{`${p.precio} $`}</span>
            </div>
          </div>
        ))
      ) : (
        <div>
          <Empty
            button={<CreateContact text={<>Añade tu primer contacto </>} />}
            title={title}
            copy="Aquí es donde puede administrar a sus clientes o proveedores y toda su información."
            image={Image}
          />
        </div>
      )}
    </div>
  );
}
