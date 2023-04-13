// app.js
const express = require('express');
const nameValidation = require('./middlewares/nameValidation')

const app = express();

app.use(express.json());

app.post('/activities', nameValidation, (req, res) => {
  res.status(201).json({ message: "sucesso" })
})

module.exports = app;