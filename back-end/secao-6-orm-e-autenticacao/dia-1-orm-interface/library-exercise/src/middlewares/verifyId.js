const { Book } = require("../models/");

const getExistentIds = async () => {
  const [{dataValues}] = await Book.findAll({
    attributes: ["id"],
  });
  const ids = Object.values(dataValues);
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
