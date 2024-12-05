import React from 'react'
import styles from './Features.module.css';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { CTA } from '@/sections';

const Features = () => {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <h1>Todas las funcionalidades</h1>
                <p>Para gestionar tu negocio con Helebba</p>

                <div className={styles.buttons} >

                    <Link href="https://app.helebba.com">Empieza gratis</Link>
                    <Link href="https://app.helebba.com">Empieza gratis con Google</Link>
                </div>

            </div>

            <div className={`${styles.features} ${styles.white}`}>
                <div className={styles.content}>
                    <div>
                        <h2>Facturación</h2>
                        <p>Crea facturas en segundos y prográmalas con un solo clic.</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Facturas de venta
                                </h3>
                                <p>
                                    Crea facturas de venta con todos los requisitos legales en
                                    un par de clics.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Plantillas de facturas
                                    personalizables
                                </h3>
                                <p>
                                    Más de 100 plantillas para darle un aspecto corporativo a
                                    tus documentos.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Presupuestos
                                </h3>
                                <p>
                                    Prepáralos y envíalos desde Helebba, una vez aprobados podrás
                                    convertirlos en facturas.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Facturas recibidas
                                </h3>
                                <p>
                                    Contabiliza facturas recibidas de la misma forma que creas
                                    una factura de venta.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Nóminas
                                </h3>
                                <p>
                                    Emite las nóminas de tu equipo de una en una o impórtalas en
                                    grupo con Excel.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Sugerencias de conciliación
                                    bancaria
                                </h3>
                                <p>
                                    Propuestas que Helebba sugiere automáticamente para que
                                    puedas ahorrar tiempo.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Objetivos de venta y de
                                    gasto
                                </h3>
                                <p>
                                    Establece objetivos de venta y de gastos para controlar el
                                    rendimiento de tu negocio.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Plantillas de facturas
                                    personalizables
                                </h3>
                                <p>
                                    Más de 100 plantillas para darle un aspecto corporativo a
                                    tus documentos.
                                </p>
                            </li>

                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Envio de facturas
                                </h3>
                                <p>
                                    Envía tus documentos desde Helebba con un clic y controla si
                                    se han visto o no.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Gastos
                                </h3>
                                <p>
                                    Contabiliza los gastos sin necesidad de conocimientos
                                    contables.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Formas de pago
                                </h3>
                                <p>
                                    Puedes crear múltiples formas para facilitar el pago de tus
                                    facturas.
                                </p>
                            </li>

                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Campos personalizados en las
                                    facturas
                                </h3>
                                <p>
                                    Crea campos personalizados en las facturas para adaptarlas a
                                    tus necesidades.
                                </p>
                            </li>

                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Smart Inbox
                                </h3>
                                <p>
                                    Centraliza todas las facturas y gastos recibidos en un solo
                                    lugar.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Tags para analítica
                                    personalizada
                                </h3>
                                <p>
                                    Añade Tags (etiquetas) a tus ventas y gastos para poder
                                    filtrar los informes.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Lector de gastos
                                </h3>
                                <p>
                                    Lee la información de tus compras y gastos y los contabiliza
                                    automáticamente.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.features}>
                <div className={styles.content}>
                    <div>
                        <h2>CRM</h2>
                        <p>Controla de un vistazo la evolución de tus oportunidades de venta.</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Base de datos de clientes
                                </h3>
                                <p>
                                    Todos tus clientes, con toda su información, en un solo lugar.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Actividades
                                </h3>
                                <p>
                                    Crea actividades, como reuniones o llamadas, para cada oportunidad.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Integración con calendario
                                </h3>
                                <p>
                                    Integra tu calendario y visualiza todas las actividades y eventos creados en Helebba.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Programador de reuniones
                                </h3>
                                <p>
                                    Haz un link para reservar una reunión automáticamente, integrado con tu calendario.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Informes
                                </h3>
                                <p>
                                    Accede a los informes sobre tus actividades de venta para saber los ratios de conversión.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Embudo de ventas personalizado
                                </h3>
                                <p>
                                    Crea un embudo de ventas personalizado con múltiples etapas y muchas opciones más.
                                </p>
                            </li>

                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Calendario
                                </h3>
                                <p>
                                    Visualiza todas las actividades en el calendario integrado para que no te pierdas ni una.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Notas
                                </h3>
                                <p>
                                    Crea notas en las oportunidades de venta para poner la información que quieras.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Tags
                                </h3>
                                <p>
                                    Pon Tags en las oportunidades para poder filtrarlas rápidamente en cada embudo.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`${styles.features} ${styles.white}`}>
                <div className={styles.content}>
                    <div>
                        <h2>Inventario</h2>
                        <p>Monitoriza tu inventario en tiempo real y ten el control total sobre tu stock.</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Pedidos de Compra
                                </h3>
                                <p>
                                    Crea pedidos, envíaselos a tus proveedores y controla la recepción de mercancías.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Almacenes múltiples
                                </h3>
                                <p>
                                    Establece varios almacenes y elige dónde quieres recibir el stock o enviar tus ventas.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Productos con variantes
                                </h3>
                                <p>
                                    Agrega productos que tienen variantes como, por ejemplo, prendas de vestir o calzado.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Números de serie
                                </h3>
                                <p>
                                    Crea números de serie para tus productos para tener la trazabilidad individualizada.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Atributos personalizados
                                </h3>
                                <p>
                                    Establece atributos personalizados para clasificar tus productos.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Alarma de Stock
                                </h3>
                                <p>
                                    Crea alarmas de stock para no quedarte nunca sin unidades de tus productos.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Pedidos de Venta
                                </h3>
                                <p>
                                    Crea pedidos o permite que lo hagan tus clientes y sincronízalos con tu tienda online
                                </p>
                            </li>

                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Estados personalizados
                                </h3>
                                <p>
                                    Crea estados personalizados para tus pedidos y clasifícalos con un clic.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Productos simples
                                </h3>
                                <p>
                                    Crea productos simples y únicos de forma diferenciada.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Productos con lote
                                </h3>
                                <p>
                                    Crea lotes de productos para tener toda la trazabilidad de uno en concreto.
                                </p>
                            </li>

                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Listado de tarifas
                                </h3>
                                <p>
                                    Crea múltiples listados de precios y asigna a cada cliente el listado de precios que quieras.
                                </p>
                            </li>

                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> IVA por país
                                </h3>
                                <p>
                                    Cumple con todas las normativas de IVA.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.features}>
                <div className={styles.content}>
                    <div>
                        <h2>Contabilidad</h2>
                        <p>Ahorra tiempo al automatizar hasta el 95% de tu contabilidad.</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Cuadro de cuentas
                                </h3>
                                <p>
                                    Utiliza cuentas existentes o crea subcuentas personalizadas adaptadas.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Informe de Balance de Situación
                                </h3>
                                <p>
                                    Con vista anual, mensual o comparativa con el ejercicio anterior.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Listado de activos
                                </h3>
                                <p>
                                    Consúltalo de un vistazo, accede a sus facturas y sube una imagen para identificarlos.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Bloqueo de períodos
                                </h3>
                                <p>
                                    Bloquea períodos para asegurarte de que no se modifica la información.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Cuentas Anuales
                                </h3>
                                <p>
                                    (Disponible muy pronto) Genera las cuentas anuales para presentarlas ante las autoridades.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Libro diario
                                </h3>
                                <p>
                                    Genera asientos de forma manual o edita los asientos creados automáticamente.
                                </p>
                            </li>

                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Informe de Pérdidas y Ganancias
                                </h3>
                                <p>
                                    Con vista anual, mensual, con comparativa contra objetivos o con el ejercicio anterior.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Amortización de Activos
                                </h3>
                                <p>
                                    Crea tablas de amortización con base en las tablas de Hacienda y amortiza tus activos.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Punteado de asientos
                                </h3>
                                <p>
                                    Puntea asientos para controlar los que has revisado y están correctos.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`${styles.features} ${styles.white}`}>
                <div className={styles.content}>
                    <div>
                        <h2>TPV</h2>
                        <p>Conecta las ventas en tu tienda física con el resto de tu negocio, sin salir de Helebba</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Ventas y devoluciones en tu tablet
                                </h3>
                                <p>
                                    Completa las ventas en el punto de venta a través de la tablet o emite reembolsos.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Pagos en efectivo o con tarjeta
                                </h3>
                                <p>
                                    Acepta pagos como quieras, serán asignados automáticamente a la cuenta bancaria de tu negocio.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Recibo impreso o digital
                                </h3>
                                <p>
                                    Puedes imprimir el recibo de la venta o enviarlo al cliente por email.
                                </p>
                            </li>

                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Posibilidad de pausar las ventas
                                </h3>
                                <p>
                                    Mantén en espera una venta en curso para poder continuarla en un momento posterior.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.features}>
                <div className={styles.content}>
                    <div>
                        <h2>Sistema</h2>
                        <p>Funcionalidades generales que complementan el resto de las herramientas.</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Roles de usuario
                                </h3>
                                <p>
                                    Asigna o crea roles con los que los usuarios pueden acceder a diferentes partes de Helebba.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Directorio de Asesorías
                                </h3>
                                <p>
                                    Base de datos de asesorías Partners de Helebba para ayudarte con la contabilidad.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h3>
                                    <Check size={14} color={"rgb(25,99,239)"} /> Almacenamiento de archivos
                                </h3>
                                <p>
                                    Guarda todos tus archivos en carpetas y organízate como quieras.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <CTA />
        </div>
    )
}

export default Features