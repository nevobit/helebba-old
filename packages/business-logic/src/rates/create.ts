import { Collection, getModel } from "@helebba/constant-definitions";
import { Rate, RateSchemaMongo } from "@helebba/entities";

export const createRate = async (account: string, rate: Partial<Rate>) => {
    const model = getModel(Collection.RATES, RateSchemaMongo)
    const createdRate = new model({account, ...rate});
    await createdRate.save()
    return createdRate;
}
