export const getEmailHTML = (code: string) => {

    return `<!DOCTYPE html>
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
    <div style="margin-inline: auto; width: 100%" >
<div style="max-width: 520px; margin-inline: auto; background-color: #F5F5F7; padding-block: 20px; padding-inline: 80px;" >
    
<div style="margin: 0 auto; display: flex; align-items: center; justify-content: center;  padding: 0 2rem;">
<h2 style="font-family: sans-serif; font-weight: 700; font-size: 30px;" >Helebba</h2>
</div>
<div style="padding: 0 2rem; background-color: #fff; padding-top: 20px; padding-bottom: 10px; border-radius: 10px;">
<h3 style="font-family: sans-serif; font-size: 22px; color: rgba(0,0,0,1);">Inicia sesión en Helebba</h3>
<p style="font-family: sans-serif; font-size: 14px;">Ingresa el código de acceso en la aplicación para iniciar sesión de forma segura. Este codigo expirará en 15 minutos.</p>
<h2 style="font-family: sans-serif; font-size: 28px;" >{code}</h2>
</div>

<div style="display: flex; justify-content: center; align-items: center; gap: 20px; margin-top: 30px;" >
<a href="https://instagram.com/helebbasoftware">
    <img src="https://ci3.googleusercontent.com/meips/ADKq_NaL93HZXjpA3ltLlTdMz9FJZ58JAQT2paBPm_47YGqYbPkEpf2efqUshRa3479izwL6vx7ryHrPkCWN6hp2mYV47xhiqv38uqhLOTfGopYuEVe0Djjb_8OqET2fMbsAbrOdag02rli7WCIDx5EaINfXg9fJtVNVoJoJZZzqyI0_1qgeJVVC8tZOU3k=s0-d-e1-ft#https://cdn.braze.eu/appboy/communication/assets/image_assets/images/64dc807483f34d6143bd31a8/original.png?1692172404" height="16" class="CToWUd" data-bit="iit">        </a>
<a href="https://instagram.com/helebbasoftware">
    <img src="https://ci3.googleusercontent.com/meips/ADKq_NZyDe0C1aLR2nY-g_Jh0-JvAQaWQmBNoJJ6h2DsMqqCEV1cRrm4xHGvNdL6qKJu5t7ffhYfVizqPsF0yRMgQfX5Zd3F7Hka_LQ4TaDQ3Q6POEsaWPxs-AibM6r_d2xdeKjHcrhZp89gCId5OBhGBa_MlOLi5pthNb4ko4NaRf_7Zrob1gPWZVDsyh0=s0-d-e1-ft#https://cdn.braze.eu/appboy/communication/assets/image_assets/images/64dc80742586395e66824382/original.png?1692172404" height="16" class="CToWUd" data-bit="iit">
</a>
<a href="https://youtube.com/helebbasoftware">
    <img src="https://ci3.googleusercontent.com/meips/ADKq_NbyHd5xK-2LDR2TUSbt9wkwUcEXFgTehg1KZMHPI3uPAbkMWLgv22xbbDY2Dl-okO_LT5WFe_akSF1Z_oonWm4EW42Spzxs6EHMH-S0BXuDaaq70MhMQQI3GhrILekAIixTuevmO_sXOku19RUETYsB78dmR0RhexzN7k0alMD0C-w-tWZv0Pe10vw=s0-d-e1-ft#https://cdn.braze.eu/appboy/communication/assets/image_assets/images/64dc807519fbbf581c536c51/original.png?1692172404" height="16" class="CToWUd" data-bit="iit">        </a>
<a href="https://linkedin.com/helebbasoftware">
    <img src="https://ci3.googleusercontent.com/meips/ADKq_NbM3FHRCXRxtMn_xci8YWZEPJ8Ta5CdB6CC8gKU8Dhg2vYMN85ZYCEK7BKr8JFyO2loxw5dkeObezZlaOehNNa_QiDqDKJMqHsuOZlOcQAkoQsKrSiDAwYqHIDYhp6MLjLSMyBubkYju-k8b4Q67SmOqSjyWr9q4ln0Rs9Csftp-WvcfuoO7USE5d8=s0-d-e1-ft#https://cdn.braze.eu/appboy/communication/assets/image_assets/images/64dc80742b097156a7d3fe0d/original.png?1692172404" height="16" class="CToWUd" data-bit="iit">        </a>
</div>
<div style="padding: 0 2rem;">
<p style="text-align: center; font-family: sans-serif; font-size: 12px; color:rgba(0,0,0, 0.6);">Helebba nunca enviará un correo electrónico solicitando que revele o verifique su contraseña, tarjeta de crédito o número de cuenta bancaria.</p>
</div>
<p style="max-width: 500px; margin: 0 auto; text-align: center; font-family: sans-serif; font-size: 14px; color: rgba(0,0,0, 0.6);">Helebba, Inc,. &copy; 2024, Helebba. Todos los derechos reservados.</p>

<footer style=" margin-top: 10px;">
<p style="font-size: 14px; color:rgba(0,0,0, 0.6); text-align: center;">Por favor no reenvíes ni compartas este correo electrónico, ya que está destinado únicamente para ti.</p>
<div style="display: flex; justify-content: center; margin-top: 10px;" >

<a href="/hole" >
    <img src="https://ci3.googleusercontent.com/meips/ADKq_NafQ0UDw8VNsgsVwUmD3VLs8B6qj-EuebKVg4hVr3zFy1QkFjkaPELVRbnJtTQOQ5zFgpTxQmW9mPfwyRDhDgi0sAJB6WGoBRMAtMqMzqJhnCDYCJNmHd-GwQaPvEI0UraVI2_Xwr_MYdVCLcSr3qb25O8N3uAzO04ws5Q6bk4nahSI_2vksr9-phs=s0-d-e1-ft#https://cdn.braze.eu/appboy/communication/assets/image_assets/images/64dca46370dc2a93abb25701/original.png?1692181603" width="140" style="padding-right:16px" class="CToWUd" data-bit="iit">
</a>
<a href="/hole" >
    <img src="https://ci3.googleusercontent.com/meips/ADKq_NaDOWx3VpLoK9MGAjmpmmByv5ngxnqoVl3AdO7OZcX0tYfhaW334iRHoplzC2eD4kuW4EnPq6tzMbzk-MTtjqOqxexnpF0JJ5rH-OWKsXot1Gds8uzlzIJLvpwCZnv-7eu996rylvsgROp7cu-GozE2qFQo720RghlnGULfCFYFbXSxMEbzXq9UvFc=s0-d-e1-ft#https://cdn.braze.eu/appboy/communication/assets/image_assets/images/64dca46340dade98740fa6af/original.png?1692181603" width="140" class="CToWUd" data-bit="iit">            <div>
</a>
</div>

</footer>
</div>

</div>    </div></body>
</html>`.replace(
        '{code}', // o '{Detalles de la Oportunidad}' según la condición
        code
    );

};
