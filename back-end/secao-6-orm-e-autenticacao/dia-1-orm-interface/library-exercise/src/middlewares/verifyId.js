const { Book } = require("../models/");

const getExistentIds = async () => {
  const result = await Book.findAll({
    attributes: ["id"],
  });

  const ids = [];

  result.forEach((book) => {
    ids.push(book.dataValues.id);
  });

  return ids;
};

const verifyIds = async (req, res, next) => {
  const existentIds = await getExistentIds();
  const id = Number(req.params.id);

  if (existentIds.includes(id)) {
    return next();
  }
  res.status(404).json({ message: "Book not found" });
};

module.exports = {
  verifyIds,
};
