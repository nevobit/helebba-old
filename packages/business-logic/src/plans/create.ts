import { Collection, getModel } from '@helebba/constant-definitions';
import {
  Plan,
  PlanSchemaMongo,
} from '@helebba/entities';

export const createPlan = async (plan: Partial<Plan>) => {
  const model = getModel<Plan>(Collection.PLANS, PlanSchemaMongo);

  const createdPlan = new model({ ...plan });

  await createdPlan.save();
   
  return createdPlan;
};
