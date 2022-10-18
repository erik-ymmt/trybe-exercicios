const booksService = require("../services/books.service");

const getAll = async (_req, res) => {
  console.log('controller');
  const books = await booksService.getAll();
  res.status(200).json({books});
};

const getById = async (req, res) => {
  const id = Number(req.params.id);
  const book = await booksService.getById(id);
  res.status(200).json(book);
}

module.exports = {
  getAll,
  getById,
};
