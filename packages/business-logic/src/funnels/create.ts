import { Collection, getModel } from "@helebba/constant-definitions";
import { Funnel, FunnelSchemaMongo } from "@helebba/entities";

export const createFunnel = async (account: string, funnel: Partial<Funnel>) => {
    const model = getModel(Collection.FUNNELS, FunnelSchemaMongo)
    const createdFunnel = new model({account, ...funnel});
    await createdFunnel.save()
    return createdFunnel;
}
