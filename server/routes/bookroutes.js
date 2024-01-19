const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const bookController = require("../controllers/bookController");
router.get("/", bookController.getAllBooks);
router.post("/", bookController.addBooks);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);
module.exports = router;
