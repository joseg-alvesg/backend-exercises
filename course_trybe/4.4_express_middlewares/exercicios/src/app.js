// app.js
const express = require('express');
const nameValidation = require('./middlewares/nameValidation')
const priceValidation = require('./middlewares/priceValidation');
const descriptionValidation = require('./middlewares/descriptionValidation')

const app = express();

app.use(express.json());

app.post('/activities',
  descriptionValidation,
  priceValidation,
  nameValidation,
  (req, res) => {
  res.status(201).json({ message: "sucesso" })
})

module.exports = app;