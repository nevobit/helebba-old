import { Collection, getModel } from "@helebba/constant-definitions";
import { Employee, EmployeeSchemaMongo } from "@helebba/entities";

export const createEmployee = async (account: string, employee: Partial<Employee>) => {
    const model = getModel(Collection.EMPLOYEES, EmployeeSchemaMongo)
    const createdEmployee = new model({account, ...employee});
    await createdEmployee.save()
    return createdEmployee;
}
