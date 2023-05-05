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

const update = async (req, res) => {
  const {id} = req.params
  const {body} = req;
  const books = await BookService.update(Number(id), body);
  if (!books) return res.status(404).json({message: 'Book not found'})
  res.status(201).json({message: 'Book updated'})
}

const remove = async (req, res) => {
  const {id} = req.params
  const removed = await BookService.remove(Number(id))
  if (!remove) return res.status(404).json({message: 'Book not found'})
  res.status(200).json({message:'Book removed'})
}

module.exports = {
  getAll,
  findById,
  create,
  update,
  remove,
}