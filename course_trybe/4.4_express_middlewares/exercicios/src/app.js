// app.js
const express = require('express');

const app = express();

app.use(express.json());

app.post('/activities', (req, res) => {
  res.status(201).json({ message: "sucesso" })
})

module.exports = app;