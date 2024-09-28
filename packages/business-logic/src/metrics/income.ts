import { Collection, getModel } from "@helebba/constant-definitions";
import { Document, DocumentSchemaMongo, StatusType } from "@helebba/entities";

type DocumentType = "invoice" | "sale-order";

interface Query {
    status: StatusType;
    account: string;
    docType: { $in: DocumentType[] };
}

export const Income = async (account: string): Promise<number> => {
    const model = getModel<Document>(Collection.DOCUMENTS, DocumentSchemaMongo);
    const query: Query = { 
        docType: { $in: ["invoice", "sale-order"] },
        status: StatusType.ACTIVE, 
        account 
    };

    const result = await model.aggregate([
        { $match: query },
        { $group: { _id: null, totalIncome: { $sum: "$total" } } }
    ]);

    return result.length > 0 ? result[0].totalIncome : 0;
}