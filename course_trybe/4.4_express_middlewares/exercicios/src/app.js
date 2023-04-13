// app.js
const express = require('express');
const nameValidation = require('./middlewares/nameValidation')
const priceValidation = require('./middlewares/priceValidation');
const descriptionValidation = require('./middlewares/descriptionValidation')
const descriptionValuesValidation = require('./middlewares/descriptionValuesValidation')
const generateToken = require('./utils/generateToken')
const user = require("./middlewares/user")
const autentication = require('./middlewares/autentication')

const token = generateToken();

const app = express();

app.use(express.json());

app.post('/activities',
  autentication,
  nameValidation,
  priceValidation,
  descriptionValidation,
  descriptionValuesValidation,
  (req, res) => {
  res.status(201).json({ message: "sucesso" })
})

app.post('/signup', user, (req, res) => {
  res.status(200).json({ token: token })
})

module.exports = app;
