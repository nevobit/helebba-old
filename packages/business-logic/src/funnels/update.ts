import { Collection, getModel } from '@helebba/constant-definitions';
import { Rate, RateSchemaMongo, UpdateRateDto } from '@helebba/entities';

export const updateFunnel = async (
  id: string,
  data: UpdateRateDto,
): Promise<Partial<Rate> | null> => {
  const model = getModel<Rate>(Collection.RATES, RateSchemaMongo);

  const datatToUpdate = {
    ...data,
    updatedAt: new Date().toISOString(),
  };

  const result = await model.updateOne({ _id: id }, { $set: datatToUpdate });

  if (!result.acknowledged && result.matchedCount < 1)
    throw new Error('Could not update rate');

  const rate = await model.findById(id);

  return rate;
};
