import React from 'react'
import styles from "./Pricing.module.css"
import Head from 'next/head';
import Buttons from './Buttons';
import PricingInfo from './PricingInfo';
import PricingInfoPlus from './PricingInfoPlus';

const Pricing = ({
    searchParams,
  }: {
    searchParams: { [key: string]: string | undefined };
    params: { [key: string]: string };
  }) => {
  return (
    <div>
        <Head>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        </Head>
          <div className={styles.banner}>
                    <h2>Empieza tu prueba gratis</h2>
                    <p>Prueba Helebba gratis durante 7 días. No necesitas tarjeta de crédito.</p>
                </div>

                <div>
                   <Buttons />

                    {searchParams?.type == "companies"? (
                        <PricingInfo />
                    ): (

                <PricingInfoPlus />
                    )}

                </div>
    </div>
  )
}

export default Pricing