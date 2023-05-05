const {Book} = require('../models') 

const getAll = async () => {
  const books = await Book.findAll()
  return books
}

const findById = async (id) => {
  const books = await Book.findByPk(id)
  return books
}

const create = async (object) => {
  const book = await Book.create(object)  
  return book;
}

module.exports = {
  getAll,
  findById,
  create,
}