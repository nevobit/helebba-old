'use client';
import React from 'react';
import styles from './Pricing.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Buttons = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelectChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('type', value);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className={styles.pricing_buttons}>
      <button
        onClick={() => handleSelectChange('companies')}
        className={
          searchParams?.get('type') == 'companies' ? styles.active : ''
        }>
        Empresas
      </button>
      <button
        onClick={() => handleSelectChange('freelancers')}
        className={
          searchParams?.get('type') == 'freelancers' ? styles.active : ''
        }>
        Independientes
      </button>
    </div>
  );
};

export default Buttons;
