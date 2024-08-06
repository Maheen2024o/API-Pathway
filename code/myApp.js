let express = require('express');
let app = express();
//for Lesson 6
require('dotenv').config();


//Lesson 1
console.log("Hello World");

//Lesson 2
//app.get('/', (req, res) => {
//        res.send("Hello Express");
//    });

//Lesson 3
//const path = require('path');
//app.get('/', (req, res) => {
//    const absolutePath = path.join(__dirname, 'views', 'index.html');
//    res.sendFile(absolutePath);
//});

//Lesson 4
//app.use('/public', express.static(path.join(__dirname, 'public')));

//Lesson 5
//app.get('/json', (req, res) => {
//    res.json({ message: "Hello json" });
//});

//Lesson 6
//app.get('/json', (req, res) => {
//    let message = "Hello json";
//    if (process.env.MESSAGE_STYLE === 'uppercase') {
//        message = message.toUpperCase();
//    }
//    res.json({ message: message });
//});

//Lesson 7
function logger(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
  }
app.use(logger);


//Lesson 8 
function addCurrentTime(req, res, next) {
    req.time = new Date().toString();
    next();
  }

app.get('/json', addCurrentTime, (req, res) => {
    res.json({ time: req.time });
  });

module.exports = app;



































