const Book = require("../models/Book");
let getAllBooks = async (req, res) => {
  let books = [];
  try {
    books = await Book.find({});
    //Trying to find all Books if got it added to the books array.
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    res.status(200).json({
      message: "No Book is Available",
    });
  } else {
    //If got book send a json of the response
    res.status(200).json({
      books,
    });
  }
};
let addBooks = async (req, res) => {
  let book = [];
  try {
    const { name, author, description, price, imagelink } = req.body;
    //Take all this paramers from body
    book = new Book({ name, author, description, price, imagelink });
    //create new book with the correct schemas.
    await book.save();
    //Saving it into the database.
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    res.status(200).json({
      message: "Not filled enough data",
    });
  } else {
    res.status(200).json({
      book,
    });
  }
};
let updateBook = async (req, res) => {
  const id = req.params.id;
  const { name, author, description, price, imagelink } = req.body;
  let book = [];
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      imagelink,
    });
    await book.save();
  } catch (err) {
    console.log(log);
  }
  res.status(200).json({ book });
};
let deleteBook = async (req, res) => {
  const id = req.params.id;
  let book = [];
  try {
    book = await Book.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ book });
};
exports.updateBook = updateBook;
exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.deleteBook = deleteBook;
