import { PDFViewer } from "@react-pdf/renderer"
import { Format01 } from "../Invoices"
import { Button } from "@/components"
import { PrivateRoutes } from "@/constant-definitions"
import { useAccountStore } from "@/state-manager"
import { Element } from "@/hooks/documents/useHandleDocument"

const Form = ({specs, onCloseModal}: { specs: Element[], onCloseModal?: () => void; }) => {
    const accountStore = useAccountStore((state) => state.account);
    const navigateHash = (route: string) => {
      onCloseModal?.()
      window.location.hash = route;
    };
  return (
    <div>
           <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: 15
            }} >
            <PDFViewer
                style={{
                    height: 800,
                    width: "95%",
                }}
            >
                <Format01 specs={specs} account={accountStore}  />
            </PDFViewer> 

            <div style={{
              marginTop: 20,
              marginLeft: "auto"
            }} >
              <Button onClick={() => navigateHash(PrivateRoutes.DOCUMENTS)} variant="third" >Editar Documento</Button>

            </div>
            </div>

    </div>
  )
}

export default Form