import { createDocumentRoute } from './create';
import { getAllDocumentsRoute } from './list';
import { getDocumentByIdRoute } from './get-by-id';
import { deleteDocumentRoutes } from './delete';
import { updateDocumentRoutes } from './update';
import { RouteOptions } from 'fastify';
import { getDocumentPDFRoute } from './get-document-pdf';
import { SendDocumentEmailRoute } from './send-document';
import { payDocumentRoute } from './pay-document';

export const documentsRoutes: RouteOptions[] = [
  createDocumentRoute,
  getAllDocumentsRoute,
  getDocumentByIdRoute,
  deleteDocumentRoutes,
  updateDocumentRoutes,
  getDocumentPDFRoute,
  SendDocumentEmailRoute,
  payDocumentRoute,
];
