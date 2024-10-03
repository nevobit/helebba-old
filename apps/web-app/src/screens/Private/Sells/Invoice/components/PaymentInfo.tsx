import React from 'react';
import Field from '@/components/Shared/Field';
import styles from '../Create/CreateInvoice.module.css';

interface PaymentInfoProps {
  paymentMethod: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PaymentInfo: React.FC<PaymentInfoProps> = ({ paymentMethod, handleChange }) => {
  return (
    <div className={styles.last_card}>
      <div className={styles.invoice_payment}>
        <Field label="Información de pago">
          <select
            name="paymentMethod"
            value={paymentMethod}
            onChange={handleChange}
          >
            <option value="">No seleccionada</option>
            <option value="bank">Transferencia Bancaria</option>
            <option value="cash">Efectivo</option>
          </select>
        </Field>
      </div>
    </div>
  );
};

export default PaymentInfo;