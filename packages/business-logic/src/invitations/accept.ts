import { Collection, getModel } from "@helebba/constant-definitions"
import { Invitation, StatusType, InvitationSchemaMongo, AccountSchemaMongo, Account } from "@helebba/entities"

export const acceptInvitation = async (id: string, accountId: string, userId: string) => {
    const model = getModel<Invitation>(Collection.INVITATIONS, InvitationSchemaMongo);
    const modelAccounts = getModel<Account>(Collection.ACCOUNTS, AccountSchemaMongo);

    const account = await modelAccounts.findById(accountId);

    console.log({ id })
    console.log({ accountId })
    console.log({ userId })

    console.log(account)
    account!.users = [...account!.users, userId];
    await account!.save();

    const result = await model.updateOne({ _id: id }, { $set: { status: StatusType.DELETED } });
    if (!result.acknowledged) throw new Error('Could not delete invitation');
    const invitation = await model.findById(id);
    return invitation;
}
