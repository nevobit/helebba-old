import { Invitation } from './schemas';
  
export interface CreateInvitationDto extends Omit<Invitation,  '_id' | 'id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateInvitationDto extends Partial<CreateInvitationDto> {}