const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (your portfolio)
app.use(express.static(__dirname));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

 app.get('/api/data', (req, res) => {
    res.json({ message: 'Data from server' });
 });

    // Configure your email transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yourgmail@gmail.com',
            pass: 'yourgmailpassword'
        }
    });

    // Email options
    let mailOptions = {
        from: email,
        to: 'yourgmail@gmail.com',
        subject: `Portfolio Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send message.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});