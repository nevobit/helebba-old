import { helebbaApi } from '@/api';
import { Employee } from '@helebba/entities';

export const updateEmployee = async (employee: Partial<Employee>) => {
  const { data } = await helebbaApi.patch(`/contacts/${employee.id}`, employee);
  return data;
};

export const createEmployee = async ({
  account,
  employee}: { account: string, employee: Partial<Employee> }
) => {
  const { data } = await helebbaApi.post(`/employees`, employee, {
    headers: {
      account,
    },
  });
  return data;
};

export const getEmployees = async (id: string) => {
  const { data } = await helebbaApi.get(`/employees`, {
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


export const deleteEmployee = async (id: string) => {
  const { data } = await helebbaApi.get(`/employees/${id}/delete`);
  return data;
}