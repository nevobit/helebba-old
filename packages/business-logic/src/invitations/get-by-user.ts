
import { Collection, getModel } from "@helebba/constant-definitions";
import { Invitation, InvitationSchemaMongo, StatusType } from "@helebba/entities";

interface Query {
    status: StatusType;
    email: string;
    name?: { $regex: string; $options: string };
}

export const getInvitationsByUserId = async ( {email}: { email: string }) => {
 const model = getModel<Invitation>(Collection.INVITATIONS, InvitationSchemaMongo);

 const query: Query = { status: StatusType.ACTIVE, email: email }

 const items = await model
   .find(query)
   .sort({createdAt: -1 })

 return items;
};