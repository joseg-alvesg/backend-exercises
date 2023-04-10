// src/app.js
const express = require('express');

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Hello World!' }));

app.get('/search', (req, res) => {
  console.log(req.query.name);
  console.log(req.query.age);
  res.status(200).send('done');
});

app.post('/people/:id', (req, res) => {
  console.log(req.params.id);
  res.status(200).send('people ok');
});

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);
  res.status(201).json({ team: newTeam });
});

module.exports = app; 