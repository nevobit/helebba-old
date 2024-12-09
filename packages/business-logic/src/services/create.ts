import { Collection, getModel } from "@helebba/constant-definitions";
import { CreateServiceDto, ServiceSchemaMongo } from "@helebba/entities";

export const createService = async (account: string, contact: CreateServiceDto) => {
    const model = getModel(Collection.SERVICES, ServiceSchemaMongo)
    const createdService = new model({ ...contact, account });
    await createdService.save()
    return createdService;
}
