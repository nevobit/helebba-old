import { Collection, getModel } from '@helebba/constant-definitions';
import {
  Subscription,
  SubscriptionSchemaMongo,
} from '@helebba/entities';

export const createSubscription = async (subscription: Partial<Subscription>) => {
  const model = getModel<Subscription>(Collection.SUBSCRIPTIONS, SubscriptionSchemaMongo);

  const createdSubscription = new model({ ...subscription });

  await createdSubscription.save();
   
  return createdSubscription;
};
