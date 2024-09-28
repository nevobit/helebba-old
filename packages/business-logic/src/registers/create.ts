import { Collection, getModel } from "@helebba/constant-definitions";
import { Register, RegisterSchemaMongo } from "@helebba/entities";

export const createRegister = async (account: string, register: Partial<Register>) => {
    const model = getModel(Collection.REGISTERS, RegisterSchemaMongo)
    const createdRegister = new model({account, ...register});
    await createdRegister.save()
    return createdRegister;
}
