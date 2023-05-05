const express = require('express');
const BookController = require('./controllers/BooksController')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', BookController.getAll);

app.get('/books/:id', BookController.findById)

app.post('/books', BookController.create)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));