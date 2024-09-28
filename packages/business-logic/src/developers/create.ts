import { Collection, getModel } from "@helebba/constant-definitions";
import { DeveloperSchemaMongo } from "@helebba/entities";
import { createCipheriv } from 'crypto';

const algorithm = 'aes-256-cbc';
const iv = Buffer.from("9823456789012345"); // Vector de inicialización aleatorio (debe ser único y no secreto)
const encryptionKeyInfo = 'rKj4QCR87i2N8FWunWmJR2iZmdivdzrG'; // Deberías almacenar esto de forma segura

interface SecretInfo {
    userId: string;
    accountId: string;
    description: string;
}

const encryptionKey = Buffer.from(encryptionKeyInfo, 'utf8');


export const createDeveloperKey = async(info: SecretInfo) => {
    const model = getModel(Collection.DEVELOPERS, DeveloperSchemaMongo);

    const mInfo = { userId: info.userId, accountId: info.accountId, apiKey: process.env.API_KEY, description: info.description }
    const serializedInfo = JSON.stringify(mInfo);
    
    const cipher = createCipheriv(algorithm, encryptionKey, iv);

    let encrypted = cipher.update(serializedInfo, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    const newDeveloper = new model({
        account: info.accountId,
        hash: encrypted,
        description: info.description
    });

    await newDeveloper.save();

    return true;
}