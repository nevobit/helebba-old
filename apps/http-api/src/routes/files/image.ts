import { RouteMethod } from '@helebba/constant-definitions';
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';
import { UploadImage } from '@helebba/business-logic';
import multer from 'fastify-multer';

const upload = multer({ dest: 'uploads' });

interface File {
    file: {
        path: string;
    }
}

export const uploadImageRoute: RouteOptions = {
    method: RouteMethod.POST,
    url: '/upload/image',
    preHandler: upload.single('image'),
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const { file } = request as unknown as File;
            const image = await UploadImage(file.path);
            reply.status(201).send(image);
        } catch (err) {
            reply.status(500).send(err);
        }
    }
}