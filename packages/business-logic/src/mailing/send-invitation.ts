import { Resend } from 'resend';

const { RESEND_KEY } = process.env;
const resend = new Resend(RESEND_KEY!);

export const sendInvitation = async ({ email, accountName, accountOwnerName }: { email: string, accountName: string, accountOwnerName: string }) => {

    await resend.emails.send({
        from: `Helebba <no-reply@helebba.com>`,
        to: email,
        subject: `${accountOwnerName} te invita a unirte a ${accountName} en Helebba`,
        html: htmlMessage.replace("{name}", accountOwnerName).replace("{account}", accountName),
      });

}


const htmlMessage = ` 
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Correo electrónico</title>
    <style>
        /* Estilos generales */
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #F5F5F7;
        }
        .container {
            max-width: 520px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            padding-bottom: 20px;
        }
        .content {
            padding: 5px 20px;
        }
        .footer {
            text-align: center;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2  style="font-family: sans-serif; text-align: center; font-weight: 700; font-size: 30px;" >Helebba</h2>
        </div>
        <div class="content">
            <h3 style="font-family: sans-serif; font-size: 14px; font-weight: 400; color: rgba(0,0,0,1);" >Hola,</h3>
            <p style="font-family: sans-serif; font-size: 14px">{name} te ha invitado a formar parte de su equipo {account} en Helebba.</p>
            <a href="https://app.helebba.com/accounts" style="display: inline-block; background-color: #2164D9; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-weight: 600;">Únete al equipo</a>
            <p >Un saludo,</p>
            <p style="font-family: sans-serif; font-weight: 600; margin-top: -10px; font-size: 14px;">El equipo de Helebba.</p>
        </div>
        <div class="footer">
            <p>Helebba nunca enviará un correo electrónico solicitando que revele o verifique su contraseña, tarjeta de crédito o número de cuenta bancaria.</p>
            <p>Helebba, Inc,. &copy; 2024, Helebba. Todos los derechos reservados.</p>
        </div>
    </div>
</body>
</html>

`