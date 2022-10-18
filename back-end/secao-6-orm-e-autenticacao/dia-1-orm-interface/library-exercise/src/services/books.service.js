const { Books } = require("../models");

const getAll = async () => {
  const books = await Books.findAll();
  return books;
};

module.exports = {
  getAll,
};
