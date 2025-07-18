const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  console.log('Received contact form:', req.body); // Debug incoming data

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: 'support@lightsnack.net', 
      pass: 'sChhvHZxHMsj'
    }
  });

  try {
    await transporter.sendMail({
      from: 'support@lightsnack.net', // Use your Zoho email here
      replyTo: email, // Set reply-to to user's email
      to: 'support@lightsnack.net',
      subject: `Contact Form: ${firstName} ${lastName}`,
      text: `From: ${email}\n\n${message}`
    });
    res.status(200).send('Message sent');
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).send('Error sending message');
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
