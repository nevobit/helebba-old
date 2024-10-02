import { CatalogListTags } from "../../components/ListTags"
import { useCatalog } from "../../hook/useCatalog"

export const CatalogViewTags = () => {

  const { catalogo } = useCatalog()

  return (
    <section>
      <CatalogListTags catalogo={catalogo} />
    </section>
  )
}
