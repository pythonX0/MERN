const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

const app = express();
//security middleware
app.use(helmet());
app.use(morgan('dev'));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
//   standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//   legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);
app.get('/', (req, res) => {
  res.send('Hello World!');
});



//routes    

app.get('/about', (req, res) => {
  res.send({
    message: 'about my api.',
    version: "1.0.0"});
  });

app.get('/about-me', (req, res) => {
  res.send({
    firtName: 'SOUTSADA',
    lastName: 'SISOURATH'})});

app.get('/bootcamp', (req, res) => {
  res.send("i am a full stack developper")});
app.get('/hello', (req, res) => {
  res.send("full stack developper")});
module.exports = app;


