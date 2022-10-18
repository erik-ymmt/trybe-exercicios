const express = require("express");

const Book = require("./controllers/books.controller");
const { verifyIds } = require("./middlewares/verifyId");

const app = express();

app.use(express.json());

app.get("/book", Book.getAll);

app.get("/book/:id", verifyIds, Book.getById);

app.post("/book", Book.createBook);

module.exports = app;
