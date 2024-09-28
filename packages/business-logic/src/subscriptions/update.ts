import { Collection, getModel } from '@helebba/constant-definitions';
import { Subscription, SubscriptionSchemaMongo } from '@helebba/entities';

export const updateSubscription = async (
  id: string,
  data: Partial<Subscription>,
): Promise<Partial<Subscription> | null> => {
  const model = getModel<Subscription>(Collection.SUBSCRIPTIONS, SubscriptionSchemaMongo);

  const datatToUpdate = {
    ...data,
    updatedAt: new Date().toISOString(),
  };

  const result = await model.updateOne({ _id: id }, { $set: datatToUpdate });

  if (!result.acknowledged && result.matchedCount < 1)
    throw new Error('Could not update subscription');

  const rate = await model.findById(id);

  return rate;
};
