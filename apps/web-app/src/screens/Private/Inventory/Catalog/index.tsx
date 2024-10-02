import { ScreenHeader } from "@/containers";
import ContainerCatalog from "./container";

const title = 'Catálogo'

const Catalog: React.FC = (): JSX.Element => {
  return (
    <div>
      <ScreenHeader defaultOptions title={title} />
      <ContainerCatalog />
    </div>
  );
};

export default Catalog
