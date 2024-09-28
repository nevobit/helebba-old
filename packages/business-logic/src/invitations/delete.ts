import { Collection, getModel } from "@helebba/constant-definitions"
import { Invitation, StatusType, InvitationSchemaMongo } from "@helebba/entities"

export const deleteInvitation = async(id: string) => {
    const model = getModel<Invitation>(Collection.INVITATIONS, InvitationSchemaMongo);
    const result = await model.updateOne({ _id: id }, { $set: { status: StatusType.DELETED } });
    if(!result.acknowledged) throw new Error('Could not delete invitation');
    const invitation = await model.findById(id);
    return invitation;
}
