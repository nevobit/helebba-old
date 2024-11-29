'use client';
import React from 'react';
import styles from './Pricing.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { User, Users } from 'lucide-react';

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
    <div className={styles.buttons}>
      <button
        onClick={() => handleSelectChange('entrepeneurs')}
        className={
          searchParams?.get('type') == 'entrepeneurs' ? styles.active : ''
        }>
        Emprendedores
        <span><User size={16} />1</span>
      </button>
      <button
        onClick={() => handleSelectChange('empresas-pequenas')}
        className={
          searchParams?.get('type') == 'empresas-pequenas' ? styles.active : ''
        }>
        Empresas pequeñas
        <span><User size={16} />1-10</span>
      </button>
      <button
        onClick={() => handleSelectChange('empresas-medianas')}
        className={
          searchParams?.get('type') == 'empresas-medianas' ? styles.active : ''
        }>
        Empresas medianas
        <span><User size={16} />+10</span>
      </button>
      <button
        onClick={() => handleSelectChange('asesorias')}
        className={
          searchParams?.get('type') == 'asesorias' ? styles.active : ''
        }>
        Asesorías
        <span><Users size={16} /></span>
      </button>
    </div>
  );
};

export default Buttons;
