const { Book } = require("../models/");

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const create = async (book) => {
  const newBook = await Book.create(book);
  return newBook;
};

const update = async (info, id) => {
  const [rowsAffected] = await Book.update(info, { where: { id } });
  return rowsAffected;
};

const remove = async (id) => {
  const book = await Book.destroy({ where: { id } });
  return book;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
