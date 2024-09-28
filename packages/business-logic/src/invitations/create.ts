import { Collection, getModel } from "@helebba/constant-definitions";
import { CreateInvitationDto, InvitationSchemaMongo } from "@helebba/entities";
import { sendInvitation } from "../mailing";

interface InvitationBody extends CreateInvitationDto {
    accountName: string;
    accountOwnerName: string;
}

export const createInvitation = async (data: Partial<InvitationBody>) => {
    const model = getModel(Collection.INVITATIONS, InvitationSchemaMongo);

    const newInvitation = new model({
        email: data.email,
        account: data.account,
        accountName: data.accountName,
        isConsultancy: data.isConsultancy,
        isInvited: data.isInvited,
        role: data.role
    });

    await newInvitation.save();

    await sendInvitation({ email: data.email!, accountName: data.accountName!, accountOwnerName: data.accountOwnerName! })

    return true;
}