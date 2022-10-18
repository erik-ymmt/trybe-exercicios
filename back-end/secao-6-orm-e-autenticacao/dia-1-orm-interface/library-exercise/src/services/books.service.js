const { Book } = require("../models/");

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async () => {
  const book = await Book.findByPk();
  return book;
}

module.exports = {
  getAll,
};
