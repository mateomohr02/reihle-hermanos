const { Router } = require('express');
const nodemailer = require('nodemailer');
const axios = require('axios');

const router = Router();

router.post('/contact', async (req, res) => {

    try {

        const { contact, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Cambia esto al servicio de correo que utilices
            auth: {
              user: 'mohr.mateo@gmail.com', // Cambia esto a tu dirección de correo
              pass: 'gnojwxdomxxtcyzi', // Cambia esto a tu contraseña de correo
            },
          });

          const mailOptions = {
            from: 'smart.business.arg@gmail.com', // Remitente
            to: 'mohr.mateo@gmail.com', // Destinatario
            subject: 'Mensaje de contacto', // Asunto del correo
            text: `Contacto: ${contact}\nMensaje: ${message}`, // Cuerpo del correo
          };

          await transporter.sendMail(mailOptions);

          res.status(200).json({ message: 'Correo electrónico enviado con éxito.' });
  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al enviar el correo electrónico.' });
  
    }
})

module.exports = router;