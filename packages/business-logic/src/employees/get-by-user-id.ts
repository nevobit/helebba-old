import { Collection, getModel } from "@helebba/constant-definitions";
import { Employee, EmployeeSchemaMongo } from "@helebba/entities";

export const getEmployeeByUserId = async (id: string): Promise<Employee | null> => {
    const model = getModel<Employee>(Collection.EMPLOYEES, EmployeeSchemaMongo);
    const employee = await model.findOne({ helebbaUserId: id });
    return employee;
}