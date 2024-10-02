import { Modal, Table } from '@/containers';
import { Document, getStatusDocument } from '@helebba/entities';
import { colorsTable } from './dataTable';
import { Check } from 'lucide-react';
import { ConfirmDelete, Loader, Menus } from '@/components';
import { useCreateDocument, useDeleteDocument } from '@/hooks';
import { Format01 } from '@/containers/Invoices';
import ReactPDF, { PDFDownloadLink } from '@react-pdf/renderer';
import { useAccountStore } from '@/state-manager';
import { MouseEvent } from 'react';
import SendDocument from '@/containers/Invoices/SendDocument';
import { DivisaFormater } from '@/utilities';

interface Props {
  doc: Partial<Document>;
  index: number;
  selected: boolean;
  onSelect: () => void;
}

const ReferralRow = ({ doc, index, selected, onSelect }: Props) => {
  const account = useAccountStore((state) => state.account);
  const { createDocument } = useCreateDocument(doc.docType);
  const { isDeleting, deleteDocument  } = useDeleteDocument();
 
  const generatePdfSuccess = async (
    e:  MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    instance: ReactPDF.BlobProviderParams
  ) => {
    e.preventDefault();
    if (instance.loading || !instance.url) {
      return;
    }
    downloadURI(instance.url, `${doc.docNumber}.pdf`);
  };

  function downloadURI(uri: string, name: string) {
    const link = document.createElement("a");
    link.href = uri;
    link.download = name;
    link.click();
  }

  const handleDuplicate = () => {
    const { id, ...withoutId } = doc;
    console.log(id)
    createDocument({
      account: withoutId.account!,
      document: withoutId
    });
  }
  return (
    <Table.Row>
      <div
        onClick={onSelect}
        style={{
          backgroundColor: selected ? 'rgba(0,0,0,0.1)' : colorsTable[index],
          borderRadius: 3,
          height: 25,
          width: 25,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 500,
        }}>
        {selected ? (
          <Check color="#000" size={18} />
        ) : (
          <>
            {doc.docType ? doc.docType.charAt(0).toUpperCase() : ''}
          </>
        )}
      </div>
      <div>{doc.date}</div>
      <div>{doc.docNumber}</div>
      <div>{doc.contactName}</div>
      {doc.subtotal && <div>{DivisaFormater({value:doc.subtotal, country: account?.country })}</div>}
        {doc.total && <div>{DivisaFormater({value:doc.total, country: account?.country })}</div>}
      <div>{getStatusDocument(doc.statusDocument || 0)}</div>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={doc.id || ''} />
            <Menus.List id={doc.id || ''}>
              <Modal.Open opens="send-document">
                <Menus.Button>Enviar</Menus.Button>
              </Modal.Open>
              
              <PDFDownloadLink
                    document={
                        <Format01
                            // ref={canvasRef}
                            specs={doc.products!}
                            name={doc.contactName}
                            phone={""}
                            city={""}
                            account={account}
                            date={doc?.date}
                            due={doc.dueDate}
                            
                        />
                    }
                >
                    {(params) =>
                        params.loading ? <div style={{
                            width: 150,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}><Loader small={true} /></div> : <Menus.Button onClick={(e) => generatePdfSuccess(e, params)}>Descargar</Menus.Button>
                    }
                </PDFDownloadLink>

              
              <Modal.Open opens="edit">
                <Menus.LinkTo
                  to={`/doc/referral/${doc.id}/${doc.docType}/edit`}>
                  Editar
                </Menus.LinkTo>
              </Modal.Open>
                <Menus.Button onClick={handleDuplicate}>Duplicar</Menus.Button>
                
                <Modal.Open opens="delete" >
                <Menus.Button >Eliminar</Menus.Button>

                </Modal.Open>
            </Menus.List>
          </Menus.Menu>
          <ConfirmDelete isLoading={isDeleting} name='delete' handler={() => deleteDocument({id: doc.id!, docType: doc.docType!})} />
          
         <SendDocument doc={{...doc, docType: "Remisión"}} />
        </Modal>
      </div>
    </Table.Row>
  );
};

export default ReferralRow;
