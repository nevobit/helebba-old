import { Collection, getModel } from '@helebba/constant-definitions';
import {
  Document,
  DocumentSchemaMongo,
  Result,
  StatusType,
  DocumentType,
} from '@helebba/entities';

interface Query {
  status: StatusType;
  name?: { $regex: string; $options: string };
  account: string;
  docType?: DocumentType | string;
}

interface Params {
  account: string;
  page?: number;
  limit?: number;
  search?: string;
  docType?: DocumentType | string;
}

export const getAllDocuments = async ({
  page = 1,
  limit = 14,
  search = '',
  account,
  docType,
}: Params): Promise<Result<Document>> => {
  const model = getModel<Document>(Collection.DOCUMENTS, DocumentSchemaMongo);
  const query: Query = { status: StatusType.ACTIVE, account };

  if (search) {
    query.name = { $regex: search, $options: 'i' };
  }

  if (docType) {
    query.docType = docType;
  }

  const pageSize = limit;
  const skip = (page - 1) * pageSize;
  const total = await model.countDocuments({
    ...query,
    account,
    status: StatusType.ACTIVE,
  });
  const items = await model
    .find({ ...query, docType })
    .skip(skip)
    .limit(pageSize)
    .sort({ createdAt: -1 });

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
