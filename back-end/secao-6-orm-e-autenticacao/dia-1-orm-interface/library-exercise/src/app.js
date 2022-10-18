const express = require('express');

const Book = require("./controllers/books.controller");

const app = express();

app.use(express.json());

app.get('/book', Book.getAll);

module.exports = app;
