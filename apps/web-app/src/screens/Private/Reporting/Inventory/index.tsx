import { useProducts } from "@/hooks"
import styles from "./Inventory.module.css"
import { Product } from "@helebba/entities";
import { DivisaFormater } from "@/utilities";
import { useAccountStore } from "@/state-manager";

export const InventoryAnalytics = () => {
    const { products } = useProducts();
    const account = useAccountStore((state) => state.account);
    
  return (
    <div className={styles.container} >
        <h2 className={styles.title}  >Análisis de inventario</h2>
    <div className={styles.table_container} >
            <table>
              <thead>
                <tr className={styles.table_grid} 
                
                style={{
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                  }}>
                  <th>SKU</th>
                  <th>Nombre del producto</th>
                  <th>Precio</th>
                  <th>Impuestos</th>
                </tr>
              </thead>
              <tbody>
                {products?.items?.filter((product: Product) => product.variants.length <= 0).map((product: Product) => (
                  <>
                 <tr
                    key={product.id}
                    className={styles.table_grid}
                    style={{
                      gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    }}>
                    <td>{product.sku}</td>
                    <td>{product.name}</td>
                    <td>{DivisaFormater({ value: product.price || 0, country: account?.country })}</td>
                    <td>{DivisaFormater({ value: product.tax || 0, country: account?.country })}</td>
                  </tr>
                  </>
                ))}
                   {products?.items?.filter((product: Product) => product.variants.length > 1).map((product: Product) => (
                  <>
                  {product.variants.map((variant) => (
                     <tr
                     key={product.id}
                     className={styles.table_grid}
                     style={{
                       gridTemplateColumns: '1fr 1fr 1fr 1fr',
                     }}>
                     <td>{variant.sku}</td>
                     <td>{product.name}</td>
                     <td>{DivisaFormater({ value: variant.price || 0, country: account?.country })}</td>
                     <td>{DivisaFormater({ value: product.tax || 0, country: account?.country })}</td>
                   </tr>
                  ))}
                  </>
                ))}
              </tbody>
            </table>
        
    </div>
    </div>

  )
}
