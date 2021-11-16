const nodemailer = require('nodemailer');

const sendPasswordResetEmail = async () => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  })

  const email = await transporter.sendMail({
    from: '"Project Bubblewrap" <project-bubblewrap@example.com>',
    to: 'chrishontoir@gmail.com',
    subject: 'Password reset',
    html: "<b>Password reset</b>"
  })
}

sendPasswordResetEmail();