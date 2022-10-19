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
};

const updateBook = async (req, res) => {
  const bookInfo = req.body;
  const id = Number(req.params.id);
  const rowsAffected = await booksService.update(bookInfo, id);
  res.status(200).json({ rowsAffected });
};

const deleteBook = async (req, res) => {
  const id = Number(req.params.id);
  const book = await booksService.remove(id);
  res.status(201).json({ message: "book removed successfully" });
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
