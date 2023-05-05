const BookService = require('../services/BooksService')

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books)
}

const findById = async (req, res) => {
  const {id} = req.params
  const books = await BookService.findById(Number(id))
  if (!books) return res.status(404).json({message: 'Book not found'})
  res.status(200).json(books)
} 

const create = async (req, res) => {
  const {body} = req;
  const books = await BookService.create(body);
  res.status(201).json(books)
}

module.exports = {
  getAll,
  findById,
  create,
}