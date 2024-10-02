import { Contact } from "@helebba/entities";
import styles from "./Table.module.css";

const Table = ({ handler, elements, search }: { handler: (uuid: string) => void, elements: [], search: string }) => {
  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {/* <th><input type="checkbox" name="" id="" /></th> */}
            <th>Nombre</th>
            <th>Correo electrónico</th>
            <th>Teléfono</th>
            <th>Movil</th>
            <th>Dirección</th>
            <th>Ciudad</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {elements
            .filter((element: Contact) =>
              element.name?.toLowerCase().includes(search.toLowerCase())
            )
            .map((element: Contact) => (
              <tr onClick={() => handler(element.id)} key={element.id}>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.phone}</td>
                <td>{element.mobile}</td>
                <td>{element?.billAddress?.address}</td>
                <td>{element?.billAddress?.city}</td>
                <td>{element.type}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
