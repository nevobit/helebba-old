import { Collection, getModel } from '@helebba/constant-definitions';
import { Document, DocumentSchemaMongo } from '@helebba/entities';
import PDFDocument from 'pdfkit';
import { getAccountById } from '../accounts';

export const getDocumentPDF = async (
  account: string,
  id: string,
  docType?: string,
): Promise<Buffer> => {
  const model = getModel<Document>(Collection.DOCUMENTS, DocumentSchemaMongo);

  const document = await model.findOne({ _id: id });
  if (!document) {
    throw new Error('Document not found');
  }
  console.log(docType)
  const accountInfo = await getAccountById(account);

  return new Promise((resolve) => {
    const pdf = new PDFDocument({
      margins: { top: 50, bottom: 50, left: 50, right: 50 },
    });
    const buffers: Buffer[] = [];

    pdf.on('data', buffers.push.bind(buffers));
    pdf.on('end', () => {
      const pdfData = Buffer.concat(buffers);
      resolve(pdfData);
    });

    // Configurar colores corporativos
    const primaryColor = '#0077b6';
    const secondaryColor = '#023e8a';

    // Encabezado

    pdf
      .fillColor(primaryColor)
      .fontSize(24)
      .text('Factura', pdf.page.width / 2 - 50, 90, { align: 'center' });

    // Información de la empresa
    if (accountInfo) {
      pdf
        .fillColor(secondaryColor)
        .fontSize(12)
        .text(accountInfo.name, 50, 130); // Nombre de la empresa
      pdf
        .fillColor(secondaryColor)
        .fontSize(10)
        .text(`${accountInfo.country}`, 50, 145); // País de la empresa
      pdf
        .fillColor(secondaryColor)
        .fontSize(10)
        .text(`Tipo: ${accountInfo.type}`, 50, 160); // Tipo de empresa
      pdf
        .fillColor(secondaryColor)
        .fontSize(10)
        .text(`Estructura: ${accountInfo.structure}`, 50, 175); // Estructura de la empresa
    }

    // Detalles del documento
    pdf
      .fillColor(primaryColor)
      .fontSize(14)
      .text('Detalles del documento', 50, 220);
    pdf
      .fillColor('#000')
      .fontSize(10)
      .text(`ID del documento: ${document.id}`, 50, 240);
    pdf.fillColor('#000').fontSize(10).text(`Fecha: ${document.date}`, 50, 255);
    pdf
      .fillColor('#000')
      .fontSize(10)
      .text(`Contacto: ${document.contactName}`, 50, 270);
    pdf
      .fillColor('#000')
      .fontSize(10)
      .text(`Descripción: ${document.desc}`, 50, 285);

    // Línea divisoria
    pdf
      .moveTo(50, 305)
      .lineTo(pdf.page.width - 50, 305)
      .strokeColor(primaryColor)
      .stroke();

    // Detalles adicionales
    pdf
      .fillColor(primaryColor)
      .fontSize(14)
      .text('Detalles adicionales', 50, 320);
    pdf
      .fillColor('#000')
      .fontSize(10)
      .text(`Cuenta: ${document.account}`, 50, 340);
    pdf
      .fillColor('#000')
      .fontSize(10)
      .text(`Total: ${document.total}`, 50, 355);

    // Firmas y notas
    pdf.fillColor(primaryColor).fontSize(14).text('Firmas y notas', 50, 380);
    pdf.fillColor('#000').fontSize(10).text('Firma:', 50, 400);
    pdf.fillColor('#000').fontSize(10).text('Notas:', 50, 415);

    // Términos y condiciones (ejemplo)
    pdf
      .fillColor(primaryColor)
      .fontSize(14)
      .text('Términos y condiciones', 50, 440);
    pdf
      .fillColor('#000')
      .fontSize(10)
      .text('1. Pago antes de 30 días.', 50, 460);
    pdf
      .fillColor('#000')
      .fontSize(10)
      .text('2. No se aceptan devoluciones.', 50, 475);
    pdf
      .fillColor('#000')
      .fontSize(10)
      .text('3. Todos los precios incluyen impuestos.', 50, 490);

    pdf.end();
  });
};
