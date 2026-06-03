// import * as AWS from "aws-sdk";
// import nodemailer from "nodemailer";
import { Resend } from 'resend';

interface Props {
    sender: string;
    emails: string[];
    subject: string;
    content: string;
}




// AWS.config.update({
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_KEY,
//     region: "us-east-2",
// });

// AWS.config.getCredentials((error) => {
//     if(error){
//         console.log(error.stack);
//     }
// });

// const ses = new AWS.SES({ apiVersion: "2010-12-01" });

const adminMail = '{sender} <noreply@lytos.com>';

// const transporter = nodemailer.createTransport({
//     SES: ses
// })

export const sendEmailSES = async ({ sender, emails, subject, content }: Props) => {
    const { RESEND_KEY } = process.env;
    const resend = new Resend(RESEND_KEY!);

    try {
        for (let i = 0; i < emails.length; i++) {
            const messageData = {
                from: adminMail.replace("{sender}", sender),
                to: emails[i]!,
                subject,
                html: content
            }
            await resend.emails.send(messageData)
        }

        return "Send";
    } catch (err) {
        console.log(err)
    }
}