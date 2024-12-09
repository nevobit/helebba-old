import { helebbaApi } from '@/api';
import { UpdateEmployeeDto } from '@helebba/entities';

export const updateEmployee = async (contact: UpdateEmployeeDto) => {
  const { data } = await helebbaApi.patch(`/employees/${contact.id}`, contact);
  return data;
};

export const createEmployee = async ({
  account,
  employee }: { account: string, employee: UpdateEmployeeDto }
) => {
  const { data } = await helebbaApi.post(`/employees`, employee, {
    headers: {
      account,
    },
  });
  return data;
};

export const getEmployees = async ({ id, page }: { id: string, page: number }) => {
  const { data } = await helebbaApi.get(`/employees?page=${page}&limit=10`, {
    headers: {
      account: id,
    },
  });
  return data;
};

export const getEmployee = async (id: string) => {
  const { data } = await helebbaApi.get(`/employees/${id}`);
  return data;
};

export const getEmployeeMe = async () => {
  const { data } = await helebbaApi.get(`/employees/me`);
  return data;
};

export const deleteEmployee = async (id: string) => {
  const { data } = await helebbaApi.get(`/employees/${id}/delete`);
  return data;
}