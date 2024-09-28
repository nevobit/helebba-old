import { Collection, getModel } from '@helebba/constant-definitions';
import { Lead, LeadSchemaMongo, UpdateLeadDto } from '@helebba/entities';

export const updateLead = async (
  id: string,
  data: UpdateLeadDto,
): Promise<Partial<Lead> | null> => {
  const model = getModel<Lead>(Collection.LEADS, LeadSchemaMongo);

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
