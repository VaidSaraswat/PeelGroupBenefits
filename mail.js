var API_KEY = '';
var DOMAIN = '';
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

const sendMail = (email, message, date, time)=> {
  const mailOptions = {
    from: email,
    to: "",
    subject: 'Appointment Confirmation',
    text: `Meeting Details: \n Date: ${date} \n Time: ${time} \n Location:  \n Additional Notes: ${message}`
  };

  mailgun.messages().send(mailOptions, (error, body) => {
    if(error)
    {
      console.log(error);
    }
    else
    {
      console.log(body);
    }
  });
}

module.exports = sendMail;
