const { Resend } = require("resend");
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

resend.emails.send({
  from: "oussama.achahboune.2002@gmail.com",
  to: "oussama.achahboune.2002@gmail.com",
  subject: "This is my first creation!",
  html: "<p>I hope this one actually get to you.</p>",
});
