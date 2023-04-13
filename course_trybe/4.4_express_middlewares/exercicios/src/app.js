// app.js
const express = require('express');
const nameValidation = require('./middlewares/nameValidation')
const priceValidation = require('./middlewares/priceValidation');

const app = express();

app.use(express.json());

app.post('/activities', 
  priceValidation,
  nameValidation,
  (req, res) => {
  res.status(201).json({ message: "sucesso" })
})

module.exports = app;