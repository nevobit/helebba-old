import { helebbaApi } from '@/api';
import { Category } from '@helebba/entities';

export const updateCategory = async (category: Partial<Category>) => {
  const { data } = await helebbaApi.patch(`/categories/${category.id}`, category);
  return data;
};

export const createCategory = async ({
  account,
  category}: {account: string, category: Partial<Category>}
) => {
  const { data } = await helebbaApi.post(`/categories`, category, {
    headers: {
      account,
    },
  });
  return data;
};
export const deleteCategory = async (id: string) => {
  const { data } = await helebbaApi.get(`/categories/${id}/delete`);
  return data;
}

export const getCategories = async (id: string) => {
  const { data } = await helebbaApi.get(`/categories`, {
    headers: {
      account: id,
    },
  });
  return data;
};

export const getCategory = async (id: string) => {
  const { data } = await helebbaApi.get(`/categories/${id}`);
  return data;
};
