import { Collection, getModel } from "@helebba/constant-definitions";
import { Rate, RateSchemaMongo } from "@helebba/entities";

export const getRateById = async(id: string): Promise<Rate | null> => {
    const model = getModel<Rate>(Collection.RATES, RateSchemaMongo);
    const rate = await model.findById(id);
    return rate;
}