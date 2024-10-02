import React from 'react';
import { DivisaFormater } from '@/utilities/divisa-formater';
import styles from '../Create/CreateInvoice.module.css';
import { Account } from '@helebba/entities';

interface InvoiceSummaryProps {
  subtotal: number;
  taxesTotal: number;
  total: number;
  account: Partial<Account>;
}

const InvoiceSummary: React.FC<InvoiceSummaryProps> = ({ subtotal, taxesTotal, total, account }) => {
  return (
    <div className={styles.footer}>
      <div>
        <h3>{DivisaFormater({ value: subtotal, country: account?.country })}</h3>
        <p>Subtotal</p>
      </div>
      <div className={styles.tax_sell}>
        <h3>{DivisaFormater({ value: taxesTotal, country: account?.country })}</h3>
        <p>Impuesto de venta</p>
      </div>
      <div>
        <h3>{DivisaFormater({ value: total, country: account?.country })}</h3>
        <p>Total</p>
      </div>
    </div>
  );
};

export default InvoiceSummary;