import { Collection, getModel } from "@helebba/constant-definitions"
import { Employee, EmployeeSchemaMongo, StatusType } from "@helebba/entities"

export const deleteEmployee = async(id: string) => {
    const model = getModel<Employee>(Collection.EMPLOYEES, EmployeeSchemaMongo);
    const result = await model.updateOne({ _id: id }, { $set: { status: StatusType.DELETED } });
    console.log({ result })
    if(!result.acknowledged) throw new Error('Could not delete employee');
    const employee = await model.findById(id);
    return employee;
}
