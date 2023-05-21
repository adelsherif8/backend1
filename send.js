var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mail@gmail.com",
    pass: "aaaaaa",
  },
});

var mailOptions = {
  from: "mail@gmail.com",
  to: "mail@gmail.com",
  subject: "letter ",
  text: "dear",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
