import { Collection, getModel } from "@helebba/constant-definitions";
import { Funnel, FunnelSchemaMongo } from "@helebba/entities";

export const getFunnelById = async(id: string): Promise<Funnel | null> => {
    const model = getModel<Funnel>(Collection.FUNNELS, FunnelSchemaMongo);
    const funnel = await model.findById(id);
    return funnel;
}