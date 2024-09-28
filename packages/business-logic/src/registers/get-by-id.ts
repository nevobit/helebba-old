import { Collection, getModel } from "@helebba/constant-definitions";
import { Register, RegisterSchemaMongo } from "@helebba/entities";

export const getRegisterById = async(id: string): Promise<Register | null> => {
    const model = getModel<Register>(Collection.REGISTERS, RegisterSchemaMongo);
    const register = await model.findById(id);
    return register;
}