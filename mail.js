var API_KEY = 'key-5dae48591f5883bbbde3119b78e00ce5';
var DOMAIN = 'mg.peelgroupbenefits.ca';
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

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
    /*else
    {
      console.log(body);
    }*/
  });
}

module.exports = sendMail;
