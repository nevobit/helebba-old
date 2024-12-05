import { helebbaApi } from '@/api';
import { Contact, UpdateContactDto } from '@helebba/entities';

export const updateContact = async (contact: Partial<Contact>) => {
  const { data } = await helebbaApi.patch(`/contacts/${contact.id}`, contact);
  return data;
};

export const createContact = async ({
  account,
  contact }: { account: string, contact: UpdateContactDto }
) => {
  const { data } = await helebbaApi.post(`/contacts`, contact, {
    headers: {
      account,
    },
  });
  return data;
};

export const getContacts = async ({ id, page }: { id: string, page: number }) => {
  const { data } = await helebbaApi.get(`/contacts?page=${page}&limit=10`, {
    headers: {
      account: id,
    },
  });
  return data;
};

export const getContact = async (id: string) => {
  const { data } = await helebbaApi.get(`/contacts/${id}`);
  return data;
};


export const deleteContact = async (id: string) => {
  const { data } = await helebbaApi.get(`/contacts/${id}/delete`);
  return data;
}