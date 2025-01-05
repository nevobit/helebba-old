import { Collection, getModel } from "@helebba/constant-definitions";
import { Register, RegisterSchemaMongo, Store, StoreSchemaMongo } from "@helebba/entities";

export const getStoreById = async(id: string): Promise<Partial<Store> | null> => {
    const model = getModel<Store>(Collection.STORES, StoreSchemaMongo);
    const modelRegister = getModel<Register>(Collection.REGISTERS, RegisterSchemaMongo);

    const store = await model.findById(id);

    const registers = await modelRegister.find({ storeId: id }) as Register[]

    const infoStore: Partial<Store> = {
        name: store?.name,
        address: store?.address,
        location: store?.location,
        currency: store?.currency,
        warehouse: store?.warehouse,
        phone: store?.phone,
        account: store?.account,
        registers: registers,
        createdAt: store?.createdAt,
        updatedAt: store?.updatedAt
    }
    
    return infoStore;
}