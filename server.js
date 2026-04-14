const { Resend } = require('resend');


const resend = new Resend(process.env.RESEND_API_KEY);


app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please fill in all fields.' });
  }

  try {
    
    const { data, error } = await resend.emails.send({
      from: 'Your Portfolio <onboarding@resend.dev>', 
      to: ['javotech.dev@gmail.com'],
      replyTo: email, 
      subject: `Portfolio Contact: ${subject}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br>${message}</p>`,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(500).json({ message: 'Failed to send message.' });
    }

    console.log('Email sent successfully:', data);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});
