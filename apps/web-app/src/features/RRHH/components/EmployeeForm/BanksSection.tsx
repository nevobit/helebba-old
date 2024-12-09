import { Button, Field, Input } from '@helebba/design-system/web';
import styles from './Form.module.css';
import { Bank } from '@helebba/entities';
import { Trash } from 'lucide-react';


const BanksSection = ({ banks, addBank, deleteBank }: { banks: Bank[], addBank: () => void, deleteBank: (id: string) => void }) => {
    console.log(banks)
    return (
        <div>
            {banks.length <= 0 ? (
                <div className={styles.empty} >
                    <h3>Agrega el primer banco para tu contacto</h3>
                    <Button type='button' variant='secondary' onClick={addBank}>Añadir banco</Button>
                </div>
            ) : (
                <div>
                    {banks.map((bank) => (
                        <div className={styles.bankForm} >
                            <div className={styles.multiInput}>

                                <Field label='Banco' >
                                    <select name="" id="">
                                        <option value="">Escoger</option>
                                        <option value="">Bancolombia</option>
                                        <option value="">Banamex</option>
                                        <option value="">Escoger</option>
                                        <option value="">Escoger</option>
                                        <option value="">Escoger</option>
                                        <option value="">Escoger</option>
                                        <option value="">Escoger</option>
                                    </select>
                                </Field>
                                <Field label='Número de cuenta' >
                                    <Input />
                                </Field>

                                <Field label='Código SWIFT/BIC' >
                                    <Input />
                                </Field>
                            </div>

                            <div className={styles.multiInput} >


                                <Field label='Tipo de cuenta' >
                                    <Input />
                                </Field>

                                <Field label='Nombre del titular' >
                                    <Input />
                                </Field>
                                <Field label='Moneda' >
                                    <Input />
                                </Field>
                            </div>


                            <Field label='Referencia' >
                                <Input />
                            </Field>

                            <div className={styles.bankFooter}>
                                <label htmlFor="default">
                                    <input id='default' type='checkbox' />
                                    Banco predeterminado
                                </label>
                                <Button type='button' variant='plain' tone='critical' onClick={() => deleteBank(bank.id)} ><Trash size={13} /> Eliminar</Button>
                            </div>
                        </div>
                    ))}

                    <Button type='button' variant='plain' onClick={addBank}>Añadir banco</Button>
                </div>
            )}
        </div>
    )
}

export default BanksSection