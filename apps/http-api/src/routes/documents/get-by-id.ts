import { verifyToken, getDocumentById } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const getDocumentByIdRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/documents/:docType/:documentId",
    verifyToken,
    async (request, reply) => {
        try {
            const { params, headers } = request;
            const account = headers['account'] as string;
            const { docType, documentId } = params as { docType: string, documentId: string };
            const document = await getDocumentById({documentId, docType, account});

            // Verificar si el documento no fue encontrado
            if (!document) {
                return reply.code(404).send({ error: "Documento no encontrado" });
            }

            // Documento encontrado, enviar respuesta con el documento
            return reply.header("x-data-source", "HIT").send(document);
        } catch (error) {
            // Capturar y manejar cualquier error que ocurra durante la ejecución
            console.error("Error al obtener el documento:", error);
            return reply.code(500).send({ error: "Error interno del servidor" });
        }
    }
);
