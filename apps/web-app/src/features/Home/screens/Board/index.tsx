import { DivisaFormater } from '@/utilities';
import styles from './Board.module.css';
import { useDocuments } from '@/hooks/documents/useDocuments';
import { Document, DocumentType } from '@helebba/entities';

export const paymentMethodLabels: Record<string, string> = {
    cash: 'Efectivo',
    card: 'Tarjeta',
    transfer: 'Transferencia',
    addi: 'Addi',
    mercadopago: 'Mercado Pago',
    other: 'Otro',
    sistecredito: 'Sistecredito',
} as const;

const Board = () => {
    const { documents } = useDocuments(DocumentType.INVOICE);
    const { documents: expenseDocuments } = useDocuments(DocumentType.EXPENSES);


    console.log(documents)
    const currentYear = new Date().getFullYear();

    const yearInvoices = documents?.items.filter((document: Document) => {
        const date = new Date(document.createdAt!);

        return date.getFullYear() === currentYear;
    });

    const totalSales = yearInvoices?.reduce(
        (acc: any, document: Document) => acc + Number(document.total ?? 0),
        0,
    );

    const yearExpenses = expenseDocuments?.items.filter((document: Document) => {
        const date = new Date(document.createdAt!);

        return date.getFullYear() === currentYear;
    });

    const totalExpenses = yearExpenses?.reduce(
        (acc: any, document: Document) => acc + Number(document.total ?? 0),
        0
    );

    const totalProfit = totalSales - totalExpenses;

    const currentMonth = new Date().getMonth();

    const monthlySales = yearInvoices?.filter((document: Document) => {
        const date = new Date(document.createdAt!);

        return date.getMonth() === currentMonth;
    });

    const salesByPaymentMethod = monthlySales?.reduce((acc: any, document: Document) => {
        console.log(document.paymentMethod)
        const method = document.paymentMethod ?? 'DESCONOCIDO';

        acc[method] = (acc[method] ?? 0) + Number(document.total ?? 0);

        return acc;
    }, {} as Record<string, number>);
    console.log(salesByPaymentMethod)


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tableros</h1>

            <div>
                <button className={styles.btn}>Resumen</button>
            </div>

            <div className={styles.cards}>
                <div className={styles.card}>
                    <h2>Ventas</h2>
                    <p>Año actual</p>
                    <h4>{DivisaFormater({ value: totalSales })}</h4>
                </div>

                <div className={styles.card}>
                    <h2>Gastos</h2>
                    <p>Año actual</p>
                    <h4>{DivisaFormater({ value: totalExpenses })}</h4>
                </div>

                <div className={styles.card}>
                    <h2>Ganancias</h2>
                    <p>Año actual</p>
                    <h4>{DivisaFormater({ value: totalProfit })}</h4>
                </div>

                <div className={styles.card}>
                    <h2>Ventas por método de pago</h2>
                    <p>Mes actual</p>

                    <div className={styles.salesByPaymentMethod}>

                        {Object.entries(salesByPaymentMethod ?? {}).map(
                            ([method, amount]) => (
                                <div key={method}>
                                    <strong>{paymentMethodLabels[method] ?? method}</strong>:{' '}
                                    {DivisaFormater({ value: Number(amount) || 0 })}
                                </div>
                            ),
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Board;