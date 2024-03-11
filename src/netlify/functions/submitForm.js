// netlify/functions/submitForm.js
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.REACT_APP_NODE_MAILER_GMAIL_USER, // Replace with your Gmail email
        pass: process.env.REACT_APP_NODE_MAILER_GMAIL_PASS, // Replace with your Gmail password
      },
    });

    // Setup email data
    const mailOptions = {
      from: process.env.REACT_APP_NODE_MAILER_USER, // Replace with your Gmail email
      to: 'stedmanonlinedesigns@gmail.com', // Replace with your recipient email
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully!' }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error submitting form' }),
    };
  }
};
