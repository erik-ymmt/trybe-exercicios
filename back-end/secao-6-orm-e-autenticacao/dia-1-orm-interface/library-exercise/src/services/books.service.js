const { Book } = require("../models/");

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const create = async (book) => {
  const newBook = await Book.create(book);
  return newBook;
}

module.exports = {
  getAll,
  getById,
  create,
};
