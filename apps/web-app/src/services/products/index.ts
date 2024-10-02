import { helebbaApi } from '@/api';
import { Product } from '@helebba/entities';


export const createProduct = async ({
  account,
  product}: { account: string, product: Partial<Product> }
) => {
  const { data } = await helebbaApi.post(`/products`, product, {
    headers: {
      account,
    },
  });
  return data;
};

export const updateProduct = async (product: Partial<Product>) => {
  const { data } = await helebbaApi.patch(`/products/${product.id}`, product);
  return data;
};


export const deleteProduct = async (id: string) => {
  const { data } = await helebbaApi.get(`/products/${id}/delete`);
  return data;
}

export const getProducts = async (id: string) => {
  const { data } = await helebbaApi.get(`/products`, {
    headers: {
      account: id,
    },
  });
  return data;
};


export const getProductsSummary = async (id: string) => {
  const { data } = await helebbaApi.get(`/products/summary`, {
    headers: {
      account: id,
    },
  });
  return data;
};


export const getProduct = async (id: string) => {
  const { data } = await helebbaApi.get(`/products/${id}`);
  return data;
};
