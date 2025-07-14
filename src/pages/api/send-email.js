// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
 if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 465,             
    secure: true,           
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfólio" <${process.env.EMAIL_USER}>`,
      to: 'testenodemail@gmail.com',
      replyTo: email, 
      subject: `Nova mensagem do site: ${subject}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
}