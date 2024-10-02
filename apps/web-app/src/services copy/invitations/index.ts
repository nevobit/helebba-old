import { helebbaApi } from '@/api';
import { CreateInvitationDto } from '@helebba/entities';

interface InvitationBody extends CreateInvitationDto {
  accountName: string;
  accountOwnerName: string;
}

export const createInvitation = async ({
  invitation}: { invitation: Partial<InvitationBody> }
) => {
  const { data } = await helebbaApi.post(`/invitations`, invitation, {
    headers: {
      account: invitation.account,
    },
  });
  return data;
};

export const getInvitations = async (email: string) => {
  const { data } = await helebbaApi.get(`/invitations/${email}`);
  return data;
};


export const acceptInvitation = async ({id, account,userId}: { id: string, account: string, userId?: string }) => {
  const { data } = await helebbaApi.patch(`/invitations/${id}/accept/${userId}`, {}, {
    headers: {
      account: account,
    },
  });
  return data;
};
