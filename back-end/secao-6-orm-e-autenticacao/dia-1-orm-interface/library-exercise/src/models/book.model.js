const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.string,
    author: DataTypes.string,
    pageQuantity: DataTypes.integer,
    createdAt: DataTypes.date,
    updatedAt: DataTypes.date,
  });

  return Book;
};

module.exports = bookModel;
