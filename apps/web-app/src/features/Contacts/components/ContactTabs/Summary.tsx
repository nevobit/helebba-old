import { Contact } from '@helebba/entities'
import styles from './Tabs.module.css';
import { Button, Field } from '@helebba/design-system/web';
import { Check, Clock, ClockArrowDown, ExternalLink, File, Handshake, Mail, Plus, Ticket } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { DivisaFormater } from '@/utilities';

const data = [
    { month: 'Ene', value: 0 },
    { month: 'Feb', value: 0 },
    { month: 'Mar', value: 0 },
    { month: 'Abr', value: 0 },
    { month: 'May', value: 0 },
    { month: 'Jun', value: 0 },
    { month: 'Jul', value: 0 },
    { month: 'Ago', value: 0 },
    { month: 'Sep', value: 0 },
    { month: 'Oct', value: 0 },
    { month: 'Nov', value: 0 },
    { month: 'Dic', value: 0 },
];
const Summary = ({ contact }: { contact: Contact }) => {
    return (
        <div className={styles.summaryContainer} >
            <div className={styles.information}>

                <div className={styles.infoBox}>
                    <div className={styles.contactInfo}>

                        <div className={styles.field}>
                            <span>Correo electrònico</span>
                            <p>{contact.email}</p>
                        </div>
                        <div className={styles.field}>
                            <span>Celular</span>
                            <p>{contact.mobile}</p>
                        </div>
                    </div>

                    <div className={styles.locationInfo} >
                        <h5>Dirección</h5>

                        <div>

                            <div className={styles.field}>
                                <span>Dirección</span>
                                <p>{contact.billAddress?.address}</p>
                            </div>


                            <div className={styles.field}>
                                <span>País</span>
                                <p>{contact.billAddress?.country}</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={styles.infoBox} >
                    <div className={styles.contentInfo}>
                        <h3 className={styles.title}>Personas de contacto</h3>

                        <Button variant='plain' icon={<Plus size={14} />}>Añadir persona</Button>
                    </div>
                </div>

                <div className={styles.infoBox} >
                    <div className={styles.contentInfo}>
                        <h3 className={styles.title}>Portal</h3>
                        <Button variant='primary' style={{
                            marginBottom: 20
                        }} fullWidth={true} icon={<ExternalLink size={14} />} > Ver portal del cliente </Button>


                        <Field label='Catalogo B2B Helebba' tip='Tus clientes podran ver el catalogo de tus productos y realizar pedidos de venta on-line.'>
                            <select name="" id="">
                                <option value="">No asignado</option>
                                <option value="">General</option>
                            </select>
                        </Field>


                        <Button variant='plain' icon={<Mail size={14} />}>Enviar enlace al contacto</Button>
                    </div>
                </div>

                <div className={styles.infoBox} >
                    <div className={styles.contentInfo}>
                        <h3 className={styles.title}>Informes</h3>

                        <div className={styles.buttons}>
                            <Button variant='secondary' fullWidth >Productos vendidos</Button>
                            <Button variant='secondary' fullWidth >Servicios vendidos</Button>
                            <Button variant='secondary' fullWidth >Productos comprados</Button>
                            <Button variant='secondary' fullWidth >Servicios comprados</Button>
                        </div>
                    </div>
                </div>

            </div>
            <div>


                <div className={styles.infoBox} >
                    <div className={styles.contentInfo}>
                        <h3 className={styles.title}>Próximas actividades</h3>
                        <Button variant='plain' icon={<Plus size={14} />}>Nueva actividad</Button>
                    </div>
                </div>

                <div style={{
                    marginTop: 20
                }} className={styles.infoBox}>
                    <div className={styles.infoHeader}>
                        <div className={styles.values}>
                            <div>
                                <p className={styles.subtitle} ><span className={styles.dot} ></span>Ventas</p>
                                <h4 className={styles.value}>{DivisaFormater({ value: 0 })}</h4>
                            </div>
                            <div>
                                <p className={styles.subtitle} ><span style={{
                                    backgroundColor: '#FE4F4B'
                                }} className={styles.dot} ></span>Compras</p>
                                <h4 className={styles.value} >{DivisaFormater({ value: 0 })}</h4>
                            </div>
                        </div>
                        <select name="" id="" defaultValue={"2024"}>
                            <option value="">2022</option>
                            <option value="">2023</option>
                            <option value="2024">2024</option>
                            <option value="">2025</option>
                            <option value="">2026</option>
                        </select>
                    </div>
                    <div className={styles.col}>
                        <LineChart
                            width={450}
                            height={300}
                            data={data}
                            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                        >
                            <XAxis dataKey="month" tick={{ fill: 'rgba(0,0,0,0.4)' }} fontSize={12} />
                            <YAxis tick={{ fill: 'rgba(0,0,0,0.4)', }} tickFormatter={(value) => `$${value}`} color='rgba(0,0,0,0.1)' fontSize={12} />
                            <Tooltip />
                            <Line type="monotone" dataKey="value" strokeWidth={3} stroke="#82ca9d" />
                        </LineChart>

                        <div>

                            <div className={styles.totalInfo}>
                                <div>
                                    <span className={styles.icon}>
                                        <Check size={14} color={"rgb(25,99,239)"} />
                                    </span>
                                    <div>
                                        <p>Total cobrado</p>
                                        <h5>{DivisaFormater({ value: 0 })}</h5>
                                    </div>
                                </div>
                                <div>
                                    <span className={styles.icon}>
                                        <Ticket size={14} />
                                    </span>
                                    <div>
                                        <p>Total pagado</p>
                                        <h5>{DivisaFormater({ value: 0 })}</h5>
                                    </div>
                                </div>
                                <div>
                                    <span className={styles.icon}>
                                        <Clock size={14} />
                                    </span>
                                    <div>
                                        <p>Pendiente de cobro</p>
                                        <h5>{DivisaFormater({ value: 0 })}</h5>
                                    </div>
                                </div>
                                <div>
                                    <span className={styles.icon}>
                                        <ClockArrowDown size={14} />
                                    </span>
                                    <div>
                                        <p>Pendiente de pago</p>
                                        <h5>{DivisaFormater({ value: 0 })}</h5>
                                    </div>
                                </div>
                                <div>
                                    <span className={styles.icon}>
                                        <Handshake size={14} />
                                    </span>
                                    <div>
                                        <p>Cobros por adelantado</p>
                                        <h5>{DivisaFormater({ value: 0 })}</h5>
                                    </div>
                                </div>
                                <div>
                                    <span className={styles.icon}>
                                        <Handshake size={14} />
                                    </span>
                                    <div>
                                        <p>Pagos por adelantado</p>
                                        <h5>{DivisaFormater({ value: 0 })}</h5>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.quoteInfo}>
                                <span className={styles.icon}>
                                    <File size={14} />
                                </span>
                                <div>
                                    <p>No hay presupuestos pendientes</p>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>

                <div className={styles.col} >
                    <div className={styles.infoBox} >
                        <div className={styles.contentInfo}>
                            <h3 className={styles.title}>Oportunidades abiertas</h3>
                            <Button variant='plain' icon={<Plus size={14} />}>Nueva oportunidad</Button>
                        </div>
                    </div>
                    <div className={styles.infoBox} >
                        <div className={styles.contentInfo}>
                            <h3 className={styles.title}>Notas</h3>
                            <Button variant='plain' icon={<Plus size={14} />}>Nueva nota</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Summary