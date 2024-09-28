import { Collection, getModel } from "@helebba/constant-definitions";
import { Subscription, SubscriptionSchemaMongo, SubscriptionType, User, UserSchemaMongo } from "@helebba/entities";
import { getAllPlans } from "../plans";
import { createSubscription } from "./create";

export const getSubscriptionById = async (id: string): Promise<Partial<Subscription> | null> => {
    const model = getModel<Subscription>(Collection.SUBSCRIPTIONS, SubscriptionSchemaMongo);
    const subscription = await model.findOne({ user: id });

    if (!subscription) {
        const model = getModel<User>(Collection.USERS, UserSchemaMongo);
        const user = await model.findById(id)

        const plans = await getAllPlans({ search: "Gratuito" });

        await createSubscription({ user: user?.id, plan: plans.items[0]!.id, startDate: new Date(), type: SubscriptionType.FREE, subscriptionStatus: "Active", endDate: user?.trialEndDate });
    }
    return subscription;
}