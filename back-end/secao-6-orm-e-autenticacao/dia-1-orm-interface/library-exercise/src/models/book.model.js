const bookModel = (sequelize, DataTypes) => {
  const book = sequelize.define("book", {
    title: DataTypes.string,
    author: DataTypes.string,
    pageQuantity: DataTypes.integer,
    createdAt: DataTypes.date,
    updatedAt: DataTypes.date,
  });

  return book;
};

module.exports = bookModel;
