import React, { useState, useMemo } from 'react';
import Input from '@/components/Shared/Input';
import { useProducts } from '@/hooks';
import { Product } from '@helebba/entities';
import styles from '../Create/CreateInvoice.module.css';

interface ProductSearchProps {
  onSelect: (product: Product) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { products } = useProducts();
  
  const filteredProducts = useMemo(() => 
    products?.items.filter((product: Product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [products?.items, searchTerm]
  );

  return (
    <div className={styles.productSearch}>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar producto..."
      />
      {searchTerm && (
        <div className={styles.products_list}>
          {filteredProducts.map((product: Product) => (
            <div
              key={product.id}
              onClick={() => onSelect(product)}
              className={styles.items_list}
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;