import { Resend } from 'resend';

const { RESEND_KEY } = process.env;
const resend = new Resend(RESEND_KEY!);

export const sendWelcome = async ({ email, accountName, accountOwnerName }: { email: string, accountName: string, accountOwnerName: string }) => {

    await resend.emails.send({
        from: `El Equipo de Helebba <no-reply@helebba.com>`,
        to: email,
        subject: `Ya tienes activa tu cuenta Helebba`,
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
            <h2 style="font-family: sans-serif; text-align: center; font-weight: 700; font-size: 20px;" >Helebba</h2>
            <h1 style="font-family: sans-serif; text-align: center; font-weight: 500; font-size: 60px;" >Hazlo simple.</h1>
        </div>
        <div class="content">
            <h3 style="font-family: sans-serif; font-size: 14px; font-weight: 400; color: rgba(0,0,0,1);" >Hola, {name}</h3>
            <p style="font-family: sans-serif; font-size: 14px">¡Nos encanta tenerte en Helebba! Tu cuenta ya está activa, a partir de ahora verás que ahorras muchísimo tiempo en procesos manuales.</p>
            <a href="https://app.helebba.com" style="display: block; background-color: #2164D9; color: #fff; text-decoration: none; padding: 10px 20px; width: max-content; border-radius: 5px; font-weight: 600; margin:20px auto;">Inicia sesión</a>
             <p style="font-family: sans-serif; font-size: 14px">Siempre te ayudaremos a usar el programa a través de consejos, guías y tutoriales para que puedas:</p>

             <ul>
                 <li style="margin-bottom: 10px; font-size: 14px" >Crear contactos y enviar facturas.</li>
                 <li style="margin-bottom: 10px; font-size: 14px" >Conectar y sincronizar tus bancos.</li>
                 <li style="margin-bottom: 10px; font-size: 14px" >Presentar tus modelos de impuestos desde Helebba.</li>
                 <li style="margin-bottom: 10px; font-size: 14px" >Conectar Helebba con tu asesoría para llevar una contabilidad colaborativa.</li>
                 <li style="margin-bottom: 10px; font-size: 14px" >Controlar dónde van tus gastos.</li>
                 <li style="margin-bottom: 10px; font-size: 14px" >Aprender a detectar oportunidades de venta con el CRM.</li>
                 <li style="margin-bottom: 10px; font-size: 14px" >Calcular la rentabilidad de tus proyectos.</li>
             </ul>

                <p style="font-family: sans-serif; font-size: 14px; margin-top: 50px">
          Con Helebba puedes hacer muchas cosas, pero para empezar, no tienes por qué saberlo todo. ¿Quieres aprender ya los básicos? Te dejamos este vídeo de introducción con todos los pasos que necesitas saber:</p>
            <p style="text-align: center; font-family: sans-serif; font-size: 16px; margin-top: 30px">
          Si tienes dudas, recuerda que estamos siempre disponibles a través del chat.</p>
              <h2 style="font-family: sans-serif; text-align: center; font-weight: 500; font-size: 35px;" >¡Ahora a probar Holded!</h2>



        </div>
        <div class="footer">
            <p>Helebba nunca enviará un correo electrónico solicitando que revele o verifique su contraseña, tarjeta de crédito o número de cuenta bancaria.</p>
            <p>Helebba, Inc,. &copy; 2024, Helebba. Todos los derechos reservados.</p>
        </div>
    </div>
</body>
</html>

`