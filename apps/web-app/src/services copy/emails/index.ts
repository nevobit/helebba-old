import { helebbaApi } from "@/api";
import { Email } from "@helebba/entities";

export const getEmailsApi = async (account: string) => {
  const { data } = await helebbaApi.get(`/emails`,  {
    headers: {
      account: account,
    },
  });
  return data;
};

export const saveEmailApi = async (email: Partial<Email>) => {
  const { data } = await helebbaApi.post(`/emails`, email);
  console.log("ata email", data)
  return data;
};

export const sendEmailApi = async ( info: {account: string, sender: string, emails: string[], subject: string, content: string }) => {
  const { data } = await helebbaApi.post(`/emails/send`, info,  {
    headers: {
      account: info.account,
    },
  });
  return data;
};
