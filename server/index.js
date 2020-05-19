const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router');
const config = require('./models/config');

mongoose.connect(config.dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log('mongodb connected'))
    .catch(err=>console.log(err));


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS'
    );
    next();
  });

app.use('/', router);

let server = app.listen(config.port);

module.exports = app;
