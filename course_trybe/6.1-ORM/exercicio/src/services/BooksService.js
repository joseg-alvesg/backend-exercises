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

const update = async (id, {title, author, pageQuantity}) => {
  const [book] = await Book.update({title, author, pageQuantity}, {where: {id}})
  return book;
}

const remove = async (id) => {
  const book = await Book.destroy(id)
  console.log(book);
  return book
}



module.exports = {
  getAll,
  findById,
  create,
  update,
  remove,
}