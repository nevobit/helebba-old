import styles from './Plans.module.css'

const Plans = () => {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.container}>

        <div className={styles.header}>
          <ul>
            <li>1. Seleccione un plan</li>
            <li>2. Detalle</li>
            <li>3. Pago</li>
          </ul>
        </div>
        <div className={styles.offer}>
          <h2>Disfruta de un 50% de descuento en Helebba durante 3 meses. Oferta por tiempo limitado.</h2>
        </div>

        <div className={styles.body}>
          <h2>Elige las herrameintas adecuadas para tu negocio</h2>

          <div className={styles.options}>
            <div className={styles.buttons}>
              <button className={styles.active}>Planes</button>
              {/* <button>Planes de negocios</button> */}
            </div>
          </div>
        </div>
        <div className={styles.cards}>
            <div className={styles.entrepeneurs}>
            <div className={styles.pricing_cards}>
                        {/* <div className={styles.card}>
                            <h3>Gratis</h3>
                            <p>Perfecto para principiantes.</p>

                            <div className={styles.price}>
                                0 COP<span>/mes</span>
                            </div>

                            <button>Seleccionar</button>

                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> 30 facturas al año</span>
                                <span><i className='bx bx-check'></i> 5 escaneos gratis al año</span>
                                <span><i className='bx bx-check'></i> 1 usuarios + asesor</span>
                                <span><i className='bx bx-check'></i> 10 contactos</span>
                            </div>


                            <div className={styles.includes}>
                                <h4>INCLUYE</h4>
                                <ul>
                                    <li>Facturacion y gastos</li>
                                </ul>
                            </div>
                        </div> */}
                        <div className={styles.card}>
                            <h3>Básico</h3>
                            <p>Gestión total para emprendedores.</p>

                            <div className={styles.price}>
                                29,900 COP<span>/mes</span>
                            </div>
                            <a href={`https://treli.co/payment-plan/?username=yunsde26&product_id=538073&quantity=1&plan_id=0&plan_currency=COP`}>Seleccionar</a>

                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> 250 facturas al año</span>
                                <span><i className='bx bx-check'></i> 40 escaneos al año</span>
                                <span><i className='bx bx-check'></i> 1 usuario + asesor</span>
                                <span><i className='bx bx-check'></i> 25 Contactos</span>
                            </div>


                            <div className={styles.includes}>
                                <h4>Incluye</h4>
                                <ul>
                                    <li>Todo lo del plan Gratis</li>
                                    <li>Modelos de impuestos</li>
                                    <li>Portal del cliente</li>
                                    <li>Multidivisa</li>
                                    <li>Gestion de proyectos</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <h3>Estándar</h3>
                            <p>Administra tu empresa.</p>

                            <div className={styles.price}>
                                49,900 COP<span>/mes</span>
                            </div>
                            <a href={`https://treli.co/payment-plan/?username=yunsde26&product_id=633605&quantity=1&plan_id=0&plan_currency=COP`}>Seleccionar</a>

                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> 3.000 facturas al año</span>
                                <span><i className='bx bx-check'></i> 300 escaneos al año</span>
                                <span><i className='bx bx-check'></i> 4 usuario + asesor</span>
                            </div>


                            <div className={styles.includes}>
                                <h4>Incluye</h4>
                                <ul>
                                    <li>Todo lo del plan Básico</li>
                                    <li>Modelos de impuestos</li>
                                    <li>Portal del cliente</li>
                                    <li>Multidivisa</li>
                                    <li>Gestion de proyectos</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <h3>Avanzado</h3>
                            <p>Haz crecer tu empresa</p>

                            <div className={styles.price}>
                                199,900 COP<span>/mes</span>
                            </div>
                            <a href="https://treli.co/payment-plan/?username=yunsde26&product_id=538073&quantity=1&plan_id=0&plan_currency=COP">Seleccionar</a>

                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> 10.000 facturas al año</span>
                                <span><i className='bx bx-check'></i> 800 escaneos al año</span>
                                <span><i className='bx bx-check'></i> 7 usuario + asesor</span>
                            </div>


                            <div className={styles.includes}>
                                <h4>Incluye</h4>
                                <ul>
                                    <li>Todo lo del plan Estándar</li>
                                    <li>Modelos de impuestos</li>
                                    <li>Portal del cliente</li>
                                    <li>Multidivisa</li>
                                    <li>Gestion de proyectos</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <h3>Premium</h3>
                            <p>Todo bajo control</p>

                            <div className={styles.price}>
                                399,900 COP<span>/mes</span>
                            </div>
                            <a href="https://treli.co/payment-plan/?username=yunsde26&product_id=538073&quantity=1&plan_id=0&plan_currency=COP">Seleccionar</a>

                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> Facturas ilimitadas</span>
                                <span><i className='bx bx-check'></i> 1500 escaneos al año</span>
                                <span><i className='bx bx-check'></i> 15 usuario + asesor</span>
                                <span><i className='bx bx-check'></i> 25 Contactos</span>
                            </div>


                            <div className={styles.includes}>
                                <h4>Incluye</h4>
                                <ul>
                                    <li>Todo lo del plan Avanzado</li>
                                    <li>Modelos de impuestos</li>
                                    <li>Portal del cliente</li>
                                    <li>Multidivisa</li>
                                    <li>Gestion de proyectos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
