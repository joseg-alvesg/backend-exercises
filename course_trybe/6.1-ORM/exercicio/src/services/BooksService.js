const {Book} = require('../models') 

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  })
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

const update = async (id, {title, author, pageQuantity, publisher}) => {
  const [book] = await Book.update({title, author, pageQuantity, publisher}, {where: {id}})
  return book;
}

const remove = async (id) => {
  const book = await Book.destroy({where: {id}})
  return book
}

const getByAuthors = async (author) => {
  const book = await Book.findAll({
    where: {author},
    order: [['title', 'ASC']],
  })
  return book
}

module.exports = {
  getAll,
  findById,
  create,
  update,
  remove,
  getByAuthors,
}