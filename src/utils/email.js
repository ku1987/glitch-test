const nodemailer = require("nodemailer");

const { email } = require("../const");

const transporter = nodemailer.createTransport({
  host: email.host,
  port: email.port,
  auth: {
    user: email.username,
    pass: email.password,
  },
});

const emailSender = async (mailOptions) => {
  try {
    const result = await transporter.sendMail(mailOptions);
    console.debug(`Sent email to ${mailOptions.to}`, result);
    return result;
  } catch (error) {
    console.error("Failed to send email.", error);
    throw error;
  }
};

module.exports = {
  emailSender,
};
