const booksService = require("../service/books.service");

const getAll = async (_req, res) => {
  console.log('controller');
  const books = await booksService.getAll();
  res.status(200).json({books});
};

module.exports = {
  getAll,
};
