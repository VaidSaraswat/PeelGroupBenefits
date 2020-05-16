require('dotenv').config();
var DOMAIN = 'mg.peelgroupbenefits.ca';
var mailgun = require('mailgun-js')({apiKey: process.env.api_key, domain: DOMAIN});

const sendMail = (email, message, date, time)=> {
  const mailOptions = {
    from: email,
    to: "vikassaraswat@rogers.com",
    subject: 'Appointment Confirmation',
    text: `Meeting Details: \n Date: ${date} \n Time: ${time} \n Location: 5705 Cancross Court Suite 200, Mississauga Ontario - L5R 3E9 \n Additional Notes: ${message}`
  };

  mailgun.messages().send(mailOptions, (error, body) => {
    if(error)
    {
      console.log(error);
    }
  });
}

module.exports = sendMail;
