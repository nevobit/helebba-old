
import { Collection, getModel } from "@helebba/constant-definitions";
import { Rate, RateSchemaMongo, Result, StatusType } from "@helebba/entities";

interface Query {
    status: StatusType;
    name?: { $regex: string; $options: string };
    account: string;
}

interface Params {
    account: string;
    page?: number;
    limit?: number;
    search?: string;
}
  
export const getAllRates = async ( {page = 1, limit = 14, search= '', account}: Params): Promise<Result<Rate>> => {
 const model = getModel<Rate>(Collection.RATES, RateSchemaMongo);

 const query: Query = { status: StatusType.ACTIVE, account }

 if(search){
   query.name = { $regex: search, $options: 'i' };
 }
 
 const pageSize = limit;
 const skip = (page - 1) * pageSize;

 const total = await model.countDocuments({account, status: StatusType.ACTIVE});

 const items = await model
   .find(query)
   .skip(skip)
   .limit(pageSize)
   .sort({createdAt: -1 })

 const pages = Math.ceil(total / pageSize);

 const hasPreviousPage = page > 1;
 const previousPage = hasPreviousPage ? page - 1 : page;
 const hasNextPage = page < pages;
 const nextPage = hasNextPage ? page + 1 : page;

 return {
   count: total,
   items,
   pageInfo: {
     page,
     pages,
     hasPreviousPage,
     hasNextPage,
     nextPage,
     previousPage,
   },
 };

};