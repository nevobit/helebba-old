import { Collection, getModel } from "@helebba/constant-definitions";
import { Product, ProductSchemaMongo, StatusType } from "@helebba/entities";

interface AggregateResult {
    units: number;
    totalCost: number;
    stockValue: number;
    averageCost: number;
    averagePrice: number;
}


export const getProductsSummary = async (account: string): Promise<AggregateResult> => {
    const model = getModel<Product>(Collection.PRODUCTS, ProductSchemaMongo);
    
    
    const products = await model.find({ account })
    console.log(products[2])
    const result = await model.aggregate([
        { 
            $match: { account, status: StatusType.ACTIVE } 
        },
        {
            $group: {
                _id: null,
                units: { 
                    $sum: { 
                        $cond: [
                            { $gt: [{ $size: "$variants" }, 0] }, 
                            { $sum: "$variants.stock" }, 
                            "$stock" 
                        ] 
                    }
                },
                totalCost: { 
                    $sum: { 
                        $cond: [
                            { $gt: [{ $size: "$variants" }, 0] },
                            { $sum: { $map: { input: "$variants", as: "variant", in: { $multiply: ["$$variant.cost", "$$variant.stock"] } } } },
                            { $multiply: ["$cost", "$stock"] }
                        ]
                    } 
                }, 
                stockValue: { 
                    $sum: { 
                        $cond: [
                            { $gt: [{ $size: "$variants" }, 0] },
                            { $sum: { $map: { input: "$variants", as: "variant", in: { $multiply: ["$$variant.price", "$$variant.stock"] } } } },
                            { $multiply: ["$price", "$stock"] }
                        ]
                    } 
                } 
            }
        },
        {
            $project: {
                _id: 0,
                units: 1,
                totalCost: 1,
                stockValue: 1,
                averageCost: { $cond: [{ $eq: ["$units", 0] }, 0, { $divide: ["$totalCost", "$units"] }] },
                averagePrice: { $cond: [{ $eq: ["$units", 0] }, 0, { $divide: ["$stockValue", "$units"] }] }
            }
        }
    ]);

    return result[0];
};