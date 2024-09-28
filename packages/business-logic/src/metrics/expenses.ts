import { Collection, getModel } from "@helebba/constant-definitions";
import { Document, DocumentSchemaMongo, DocumentType, StatusType } from "@helebba/entities";


interface Query {
    status: StatusType;
    name?: { $regex: string; $options: string };
    account: string;
    docType?: DocumentType | string;
}

export const Expenses = async (account: string): Promise<number> => {
    const model = getModel<Document>(Collection.DOCUMENTS, DocumentSchemaMongo);
    const query: Query = { docType: "expenses", status: StatusType.ACTIVE, account };

    const result = await model.aggregate([
        { $match: query },
        { $group: { _id: null, totalIncome: { $sum: "$total" } } }
    ]);

    return result.length > 0 ? result[0].totalIncome : 0;
}