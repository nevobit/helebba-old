import { Collection, getModel } from "@helebba/constant-definitions";
import { Lead, LeadSchemaMongo } from "@helebba/entities";

export const createLead = async (account: string, lead: Partial<Lead>) => {
    const model = getModel(Collection.LEADS, LeadSchemaMongo)
    const createdLead = new model({account, ...lead});
    await createdLead.save()
    return createdLead;
}
