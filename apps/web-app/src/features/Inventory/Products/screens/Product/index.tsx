import { Button, LineScaleLoader, Menus, Modal, useModal } from '@helebba/design-system/web';
import styles from './Product.module.css';
import { useProduct } from '../../hooks';
import { HeaderName } from '@/features/Contacts/components';
import { ArrowLeft, BarChart, Bell, Boxes, Check, Copy, Edit, Plus, Trash, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DivisaFormater } from '@/utilities';
import Chart from './Chart';

const Product = () => {
    const { product } = useProduct();

    const { openModal, requestCloseModal } = useModal();

    const open = (image: string) => {
        openModal(
            <Modal.Window
                className={styles.containerModal}
                isOpen={true}
                onClose={() =>
                    requestCloseModal({
                        confirm: false,
                        onConfirm: () => {
                            console.log('Modal cerrado.');
                        },
                    })
                }
            >
                <Modal.Header className={styles.headerModal} >
                    <HeaderName name={product.name} />
                    <button onClick={() => requestCloseModal({
                        confirm: false,
                        onConfirm: () => {
                            console.log('Modal cerrado.');
                        },
                    })}><X width={20} /></button>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                    <img className={styles.productModalImage} src={image} alt={product.name} />
                </Modal.Body>
            </Modal.Window>,
        );
    };


    if (!product) return <LineScaleLoader />

    return (
        <div className={styles.container}>
            <div className={styles.header} >
                <div>
                    <Link to='/products' > <ArrowLeft size={18} /> </Link>
                    <HeaderName name={product.name} />
                </div>

                <div>
                    <Menus.Menu>
                        <Menus.Toggle id='contact-menu' />
                        <Menus.List id='contact-menu'>
                            <Menus.Button>
                                <span className={styles.btn}>Editar <Edit size={14} /> </span>
                            </Menus.Button>
                            <Menus.Button>
                                <span className={styles.btn}>Clonar producto <Copy size={14} /> </span>
                            </Menus.Button>
                            <Menus.Button>
                                <span className={styles.btn}>Eliminar <Trash size={14} /></span>
                            </Menus.Button>
                            <div></div>
                        </Menus.List>
                    </Menus.Menu>
                    <Button icon={<Boxes size={16} strokeWidth='1.5px' />} variant='monochrome'>Actualizar stock</Button>
                </div>
            </div>
            <div className={styles.content}>

                <div className={styles.sidebar} >
                    <div className={styles.productHeader} onClick={() => open(product.images[0])} >
                        <div className={styles.productImage} >
                            <img className={styles.productImageDetail} src={product.images[0]} alt={product.name} />
                        </div>
                    </div>

                    <div className={styles.valueBox} >
                        <div className={styles.col} >
                            <p className={styles.valueLabel} >Precio</p>
                            <p className={styles.valueDetail} >{DivisaFormater({ value: product.price })}</p>
                        </div>
                        <div className={styles.col} >
                            <p className={styles.valueLabel} >Precio de compra</p>
                            <p className={styles.valueDetail} >{DivisaFormater({ value: product.purchasePrice })}</p>
                        </div>
                        <div className={styles.col} >
                            <p className={styles.valueLabel} >Costo</p>
                            <p className={styles.valueDetail} >{DivisaFormater({ value: product.price })}</p>
                        </div>
                    </div>
                    <div className={styles.valueBoxGrid} >
                        <div>
                            <p className={styles.valueLabel} >Impuestos</p>
                            <p className={styles.valueDetail} >{DivisaFormater({ value: product.tax })}</p>
                        </div>
                        <div>
                            <p className={styles.valueLabel} >Suministro</p>
                            <p className={styles.valueDetail} >Comprado</p>
                        </div>
                    </div>

                    <div className={styles.valueBoxGrid}>
                        <span className={styles.valueLabel}>Imágenes</span>

                        <div className={styles.images} >

                            {product.images.slice(1, product.images.length).map((img) => (
                                <div onClick={() => open(img)} style={{ backgroundImage: `url(${img})` }} className={styles.image} />
                            ))}

                            <button className={styles.btn_img}>
                                <Plus size={25} color='#4181f2' />
                            </button>
                        </div>

                    </div>
                    <div className={styles.boxSide}>
                        <div className={styles.boxHeader} >
                            <h4 className={styles.boxTitle} >Notas</h4>
                        </div>
                        <div className={styles.buttons}>
                            <Button variant='plain' icon={<Plus size={16} />} >Nueva nota</Button>
                        </div>

                    </div>
                    <div className={styles.boxSide}>
                        <div className={styles.boxHeader} >
                            <h4 className={styles.boxTitle} >Archivos</h4>
                        </div>
                        <div className={styles.buttons}>
                            <Button variant='plain' icon={<Plus size={16} />} >Nuevo archivo</Button>
                        </div>
                    </div>
                    <div className={styles.boxSide}>
                        <div className={styles.boxHeader} >
                            <h4 className={styles.boxTitle} >Informes de producto</h4>
                        </div>

                        <div className={styles.buttons}>
                            <Button variant='secondary' fullWidth >Compradores del producto</Button>
                            <Button variant='secondary' fullWidth >Presupuesto</Button>
                            <Button variant='secondary' fullWidth >Proveedores del producto</Button>
                            <Button variant='secondary' fullWidth >Histórico precio de compra</Button>
                        </div>
                    </div>
                </div>
                <div className={styles.info} >
                    <div className={styles.box}>
                        <div className={styles.boxHeader} >
                            <h4 className={styles.boxTitle} >Resumen</h4>
                        </div>

                        <div className={styles.overviewKpis} >
                            <div className={styles.boxContent} >
                                <div className={styles.boxIcon} >
                                    <Check size={16} color='#4181f2' />
                                </div>
                                <div>
                                    <p>Total stock</p>
                                    <h4>{product.stock} Unidades</h4>
                                    <p>Costo total {DivisaFormater({ value: product.stock * product.price })}</p>
                                </div>
                            </div>
                            <div className={styles.boxContent} >
                                <div className={styles.boxIcon} >
                                    <BarChart size={16} color='#4181f2' />
                                </div>
                                <div>
                                    <p>Vendido este mes</p>
                                    <h4> - Unidades</h4>
                                    <p>-</p>
                                </div>
                            </div>
                            <div className={styles.boxContent} >

                                <div className={styles.boxIcon} >
                                    <Bell size={16} color='#4181f2' />
                                </div>
                                <div>
                                    <p>Alerta de stock</p>
                                </div>
                            </div>
                        </div>

                        <h5 className={styles.subtitle} >Gráfico de stock</h5>
                        <Chart />



                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxHeader} >
                            <h4 className={styles.boxTitle} >Variantes</h4>
                            <Button variant='plain'>
                                Gestionar variantes</Button>
                        </div>

                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>SKU</th>
                                    <th>C. de barras</th>
                                    <th className={styles.textRight}>Tarifa principal</th>
                                    <th className={styles.textRight}>Precio de compra</th>
                                    <th className={styles.textRight}>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.variants?.map((rate) => (
                                    <tr key={rate.id}>
                                        <td>{rate.sku}</td>
                                        <td>{rate.barcode}</td>
                                        <td className={styles.textRight} >{DivisaFormater({ value: rate.price })}</td>
                                        <td className={styles.textRight} >{DivisaFormater({ value: rate.purchasePrice })}</td>
                                        <td className={styles.textRight} >{rate.stock}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.boxHeader} >
                            <h4 className={styles.boxTitle} >Lista de precios de venta</h4>
                            <Button variant='plain'>
                                Gestionar tarifas</Button>
                        </div>

                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Tarifa</th>
                                    <th className={styles.textRight} >Subtotal</th>
                                    <th className={styles.textRight}>Impuestos</th>
                                    <th className={styles.textRight}>Total</th>
                                    <th className={styles.textRight}>Margen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tarifa principal</td>
                                    <td className={styles.textRight}>{DivisaFormater({ value: product.price })}</td>
                                    <td className={styles.textRight}>{product.tax}</td>
                                </tr>
                                {product.rates?.map((rate) => (
                                    <tr key={rate.id}>
                                        <td>{rate.name}</td>
                                        <td className={styles.textRight}>{rate.price}</td>
                                        <td className={styles.textRight}>{rate.tax}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxHeader} >
                            <h4 className={styles.boxTitle} >Lista de precios de compra</h4>
                            <Button variant='plain'>
                                Gestionar precios de compra</Button>
                        </div>

                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Tarifa</th>
                                    <th className={styles.textRight} >Subtotal</th>
                                    <th className={styles.textRight}>Impuestos</th>
                                    <th className={styles.textRight}>Total</th>
                                    <th className={styles.textRight}>Margen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tarifa principal</td>
                                    <td className={styles.textRight}>{DivisaFormater({ value: product.purchasePrice })}</td>
                                    <td className={styles.textRight}>{product.purchaseTax}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Product