const express = require('express');
const sendMail = require('./mail.js');
const path = require('path');
const app = express();
const PORT = 5000;

app.use('/Images', express.static('Images'));
app.use('/CSS', express.static('CSS'));


app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/home', (req, res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/dentalcoverage', (req, res)=>{
  res.sendFile(path.join(__dirname,'dentalcoverage.html'));
});

app.get('/employeebenefits', (req, res)=>{
  res.sendFile(path.join(__dirname,'employeebenefits.html'));
});

app.get('/extendedhealthcare', (req, res)=>{
  res.sendFile(path.join(__dirname,'extendedhealthcare.html'));
});

app.get('/groupcriticalillness', (req, res)=>{
  res.sendFile(path.join(__dirname,'groupcriticalillness.html'));
});

app.get('/groupdisability', (req, res)=>{
  res.sendFile(path.join(__dirname,'groupdisability.html'));
});

app.get('/hsa', (req, res)=>{
  res.sendFile(path.join(__dirname,'hsa.html'));
});

app.get('/services', (req, res)=>{
  res.sendFile(path.join(__dirname,'services.html'));
});

app.get('/contact', (req, res)=>{
  res.sendFile(path.join(__dirname,'contact.html'));
});

app.get('/faq', (req, res)=>{
  res.sendFile(path.join(__dirname,'faq.html'));
});

//data parsing
app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

app.post('/email',(req,res)=>{
  //send email here
  const {email, message, date, time} = req.body;

  sendMail(email, message, date, time, (err, data)=>{
    if(err){
      res.status(500).json({message: 'Internal Error'});
    }
    //res.json({message: 'Email sent!!!!'});
  });
  //res.json({message: 'Message received!'});
});

app.listen(PORT, ()=>{
  console.log('Server is starting on PORT '+PORT);
});
