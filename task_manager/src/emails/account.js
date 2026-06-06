const { Resend } = require("resend");
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendWelcomeEmail = (email, name) => {
  resend.emails.send({
    from: "",
    to: email,
    subject: "Thanks for joining in!",
    html: `<p>Welcome to the app, ${name}. Let me know how you get along with the app.</p>`,
  });
};

const sendCancelationEmail = (email, name) => {
  resend.emails.send({
    from: "",
    to: email,
    subject: "Sorry to see you go!",
    html: `<p>Goodbye, ${name}. I hope to see you back sometime soon.</p>`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
