import React from 'react'
import styles from "./Pricing.module.css"
import Buttons from './Buttons';
import BlackFriday from '@/sections/Home/BlackFriday';
import Entrepenuers from './_screens/Entrepenuers';
import Small from './_screens/Small';
import Medium from './_screens/Medium';
import Consultancies from './_screens/Consultancies';

const Pricing = ({
    searchParams,
  }: {
    searchParams: { [key: string]: string | undefined };
    params: { [key: string]: string };
  }) => {

  const renderScreen = () => {
    switch (searchParams?.type) {
      case 'entrepeneurs':
        return <Entrepenuers />
      case 'empresas-pequenas':
        return <Small />
      case 'empresas-medianas':
        return <Medium />
      case 'asesorias':
        return <Consultancies />
      default:
        return <Entrepenuers />
    }
  }

  return (
    <div>
      <BlackFriday image={false} />
      <div className={styles.banner}>
        <Buttons />
        {renderScreen()}
      </div>
    </div>
  )
}

export default Pricing