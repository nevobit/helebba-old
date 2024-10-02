import { CatalogTable } from "../../components/Table/CatalogTable"
import { useCatalog } from "../../hook/useCatalog"

export const CatalogViewTable = () => {

  const { catalogo } = useCatalog()

  return (
    <section>
      <CatalogTable catalogo={catalogo} />
    </section>
  )
}
