const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(express.json())
const moviesPath = path.resolve(__dirname, 'movies.json')
console.log(moviesPath);

const readJson = () => {
  try {
    const data = fs.readFileSync(moviesPath)
    if (!data) throw new Error('Arquivo não encontrado')
    return JSON.parse(data)

  } catch (err) {
    console.log({message: err.message});
  }
}

app.get('/movies', async (req, res) => {
  try {
    const movies = readJson();
    if (!movies) res.status(404).json('Não achei')
    res.status(200).send(movies)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
})

app.get('/movies/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({ message: 'ID inválido' });
    return;
  }
  try {
    const movies = await readJson();
    const movie = movies.find((mv) => mv.id === id)
    if (!movie) res.status(404).json('Não achei')
    res.status(200).send(movie)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.post('/movies', async (req, res) => {
  const {movie, price} = req.body
  if(!movie || !price) res.status(422).json({message: "Não tem movie ou price"})
  try {
    const movies = await readJson();
    const lastId = movies[movies.length -1].id
    movies.push({id: lastId + 1, movie, price})
    fs.writeFileSync(moviesPath, JSON.stringify(movies))
    res.status(201).json({message: 'OK'})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.put("/movies/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({ message: 'ID inválido' });
    return;
  }
  try {
    const {movie, price} = req.body
    const movies = await readJson()
    const index = movies.findIndex((mv) => mv.id === id)
    movies[index] = {id, movie, price}
    fs.writeFileSync(moviesPath, JSON.stringify(movies, null, 2))
    res.status(201).json({message: 'OK'})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.delete("/movies/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({ message: 'ID inválido' });
    return;
  }
  try {
    const movies = await readJson()
    
    const filteredMovies = movies.filter((mv) => mv.id !== id)
    const updatedMovies = JSON.stringify(filteredMovies)
    fs.writeFileSync(moviesPath, updatedMovies)
    res.status(204).json(updatedMovies)

    // const index = movies.findIndex((mv) => mv.id === id)
    // delete movies[index];
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

module.exports = app