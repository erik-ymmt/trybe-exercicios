const { Book } = require("../models/");

const getExistentIds = async () => {
  const ids = Book.findAll({
    attributes: ["id"],
  });
  return ids;
};

const verifyIds = async (req, res, next) => {
  const existentIds = await getExistentIds();
  const id = Number(req.params.id);

  console.log(existentIds);
  if (existentIds.includes(id)) {
    return next();
  }
  res.status(404).json({ "message": "Book not found" })
};

module.exports = {
  verifyIds,
};
