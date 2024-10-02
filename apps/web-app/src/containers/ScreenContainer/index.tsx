import { ReactNode } from "react";
import styles from "./ScreenContainer.module.css";
import { Briefcase, DownloadCloud, Search, Users } from "lucide-react";
import Input from "@/components/Shared/Input";

interface Props {
  children: ReactNode;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setOption: React.Dispatch<React.SetStateAction<string>>;
  option?: string;
  isContact?: boolean;
}

const ScreenContainer = ({ children, isContact, setSearch, option, setOption }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        {isContact? (

        <div className={styles.buttons}>
          <button onClick={() => setOption("")} className={option == "" ? styles.selected : ""} title="Todos">Todos</button>
          <button onClick={() => setOption("enterprise")} className={option == "enterprise" ? styles.selected : ""} title="Empresas">
            <Briefcase size={14} />{" "}
          </button>
          <button onClick={() => setOption("client")} className={option == "client" ? styles.selected : ""} title="Clientes" >
            <Users size={14} />
          </button>
        </div>
        ): (
          <div></div>
        )}

        <div className={styles.options}>
          <Input onChange={({target}) => setSearch(target.value) } icon={<Search color="#333" size={32} />} />
          <button className={styles.option}>
            <DownloadCloud size={18} strokeWidth={2} />{" "}
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ScreenContainer;
