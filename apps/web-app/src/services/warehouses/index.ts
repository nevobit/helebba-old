import { helebbaApi } from '@/api';
import { Warehouse } from '@helebba/entities';

export const updateWarehouse = async (warehouse: Partial<Warehouse>) => {
  const { data } = await helebbaApi.patch(`/warehouses/${warehouse.id}`, warehouse);
  return data;
};

export const createWarehouse = async ({
  account,
  warehouse}: {account: string, warehouse: Partial<Warehouse>}
) => {
  const { data } = await helebbaApi.post(`/warehouses`, warehouse, {
    headers: {
      account,
    },
  });
  return data;
};
export const deleteWarehouse = async (id: string) => {
  const { data } = await helebbaApi.get(`/warehouses/${id}/delete`);
  return data;
}

export const getWarehouses = async (id: string) => {
  const { data } = await helebbaApi.get(`/warehouses`, {
    headers: {
      account: id,
    },
  });
  return data;
};

export const getWarehouse = async (id: string) => {
  const { data } = await helebbaApi.get(`/warehouses/${id}`);
  return data;
};

export const getWarehousesOverview = async (account: string) => {
  const { data } = await helebbaApi.get("/warehouses/all/overview", {
    headers: {
      account
    }
  })

  return data;
}
