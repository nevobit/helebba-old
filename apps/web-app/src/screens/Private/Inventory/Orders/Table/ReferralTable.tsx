import Menus from '@/components/Shared/Menus';
import { Table } from '@/containers';
import { useDocuments, useTableSelection } from '@/hooks';
import { DocumentType, Document } from '@helebba/entities';
import ReferralRow from './ReferralRow';

const ReferralsTable = () => {
  const { documents } = useDocuments(DocumentType.REFERRALS);
  const [{ selectedRows, selectAll }, toggleRowSelect, toggleSelectAll] =
    useTableSelection({ data: documents?.items });

  return (
    <Menus>
      <Table columns="3rem 1fr 1fr 1fr 1fr 1fr 1fr 5rem">
        <Table.Header>
          <div>
            {' '}
            <input
              type="checkbox"
              checked={selectAll}
              onChange={toggleSelectAll}
              style={{
                border: '1px solid rgba(0,0,0,0.3)',
                width: 23,
                height: 23,
              }}
            />{' '}
          </div>

          <div>Fecha</div>
          <div>Numero factura</div>
          <div>Cliente</div>
          <div>Subtotal</div>
          <div>Total</div>
          <div>Estado del documento</div>

          <div></div>
        </Table.Header>
        <Table.Body<Document>
          data={documents?.items}
          render={(document, index) => (
            <ReferralRow
              doc={document}
              index={index}
              key={document.id}
              selected={selectedRows.includes(document.id)}
              onSelect={() => toggleRowSelect(document.id)}
            />
          )}
        />
      </Table>
    </Menus>
  );
};

export default ReferralsTable;
