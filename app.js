const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send({
    message: 'This is about my api.',
    version: "1.0.0"});
  });

app.get('/about-me', (req, res) => {
  res.send({
    firtName: 'SOUTSADA',
    lastName: 'SISOURATH'})});

app.get('/bootcamp', (req, res) => {
  res.send("i am a full stack developper")});

module.exports = app;


