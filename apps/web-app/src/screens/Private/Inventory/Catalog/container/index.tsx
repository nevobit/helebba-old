import styles from './container.module.css'
import CatalogForm from "../components/form/CatalogForm"
import ListProductView from "../components/ListCatalogView/ListCatalog"
import { useSelectCatalog } from '../hook/useSelectCatalog';

const ContainerCatalog: React.FC = (): JSX.Element => {

  const { categorySelection, handleCategorySelectionChange } = useSelectCatalog();

  console.log('Selecion: ', categorySelection);

  return (
    <div className={styles.container}>
      <CatalogForm handleCategorySelectionChange={handleCategorySelectionChange} />
      <ListProductView />
    </div>
  )
}

export default ContainerCatalog