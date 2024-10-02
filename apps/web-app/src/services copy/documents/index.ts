import { helebbaApi } from '@/api';
import { Document } from '@helebba/entities';

export const updateDocument = async (info: Partial<Document>) => {
  const { data } = await helebbaApi.patch(
    `/documents/${info.docType}/${info.id}`,
    info,
  );
  return data;
};

export const createDocument = async ({
  account,
  document,
}: {
  account: string;
  document: Partial<Document>;
}) => {
  const { data } = await helebbaApi.post(
    `/documents/${document.docType}`,
    document,
    {
      headers: {
        account,
      },
    },
  );
  return data;
};

export const getDocuments = async (id: string, docType: string) => {
  const { data } = await helebbaApi.get(`/documents/${docType}`, {
    headers: {
      account: id,
    },
  });
  return data;
};

export const getDocument = async (
  documentId: string,
  docType: string,
  account: string,
) => {
  const { data } = await helebbaApi.get(`/documents/${docType}/${documentId}`, {
    headers: {
      account,
    },
  });
  return data;
};

export const deleteDocument = async (id: string, docType: string) => {
  const { data } = await helebbaApi.get(`/documents/${docType}/${id}/delete`);
  return data;
};


export const sendDocument = async ({ account, id, docType, info}: { account: string, id: string, docType: string, info: { subject: string, message: string, emails: string[] } }) => {
  const { data } = await helebbaApi.post(`/documents/${docType}/${id}/send`,  info, {
    headers: {
      account
    }
  });
  return data;
};
