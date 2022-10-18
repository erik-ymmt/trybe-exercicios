const booksService = require("../services/books.service");

const getAll = async (_req, res) => {
  const books = await booksService.getAll();
  res.status(200).json({ books });
};

const getById = async (req, res) => {
  const id = Number(req.params.id);
  const book = await booksService.getById(id);
  res.status(200).json(book);
};

const createBook = async (req, res) => {
  const book = req.body;
  const newBook = await booksService.create(book);
  res.status(201).json(newBook);
}

module.exports = {
  getAll,
  getById,
  createBook,
};
