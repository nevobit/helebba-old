import React from 'react';
import { Search, X } from 'lucide-react';
import Input from '@/components/Shared/Input';
import Button from '@/components/Shared/Button';
import { DivisaFormater } from '@/utilities/divisa-formater';
import { Account, Product } from '@helebba/entities';
import ProductSearch from './ProductSearch';
import styles from '../Create/CreateInvoice.module.css';
import { Element } from '@/hooks/documents/useHandleDocument';

interface ItemsTableProps {
  elements: Element[];
  addElement: () => void;
  editElement: (id: string, value: string, field: string) => void;
  removeElement: (id: string) => void;
  editComplexElement: (id: string, name: string, price: number, productId: string) => void;
  account: Partial<Account>;
}

const ItemsTable: React.FC<ItemsTableProps> = ({
  elements,
  addElement,
  editElement,
  removeElement,
  editComplexElement,
  account,
}) => {
  return (
    <div className={styles.items_table}>
      <div className={styles.head}>
        <div></div>
        <h4>Concepto</h4>
        <h4>Descripción</h4>
        <h4 className={styles.head_amount}>Cantidad</h4>
        <h4>Precio</h4>
        <h4>Impuesto(%)</h4>
        <h4>Total</h4>
        <div></div>
      </div>
      {elements.map((element) => (
        <div className={styles.body} key={element.id}>
          <div className={styles.body_option}>
            <Search size={16} color="var(--main-color)" />
          </div>
          <div className={styles.list}>
            <ProductSearch
              onSelect={(product: Product) => 
                editComplexElement(element.id, product.name, product.price, product.id)
              }
            />
          </div>
          <div>
            <Input
              value={element.description}
              onChange={({ target }) => editElement(element.id, target.value, 'description')}
              placeholder="Desc"
            />
          </div>
          <div className={styles.body_amount}>
            <Input
              value={element.amount}
              onChange={({ target }) => editElement(element.id, target.value, 'amount')}
            />
          </div>
          <div>
            <Input
              value={element.price}
              onChange={({ target }) => editElement(element.id, target.value, 'price')}
            />
          </div>
          <div>
            <Input
              value={element.tax}
              onChange={({ target }) => editElement(element.id, target.value, 'tax')}
            />
          </div>
          <div className={styles.total}>
            <Input
              readOnly
              value={DivisaFormater({
                value:
                  Number(element.price * element.amount) +
                  Number(element.price * element.amount * Number((element.tax / 100))),
                country: account?.country
              })}
            />
          </div>
          <div
            className={styles.body_option}
            onClick={() => removeElement(element.id)}
          >
            <X size={16} color="var(--main-color)" />
          </div>
        </div>
      ))}
      <div className={styles.table_footer}>
        <Button onClick={addElement} variant="third">
          Añadir línea
        </Button>
      </div>
    </div>
  );
};

export default ItemsTable;