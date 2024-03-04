const Books = require("../models/Book.model");

module.exports.booksController = {
  getBooks: async (req, res) => {
    try {
      const books = await Books.find().populate("categoryId");

      return res.json(books);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },

  addBook: async (req, res) => {
    const { content, author, name, categoryId, price, description, image, data, numbersOfPages, ageRestriction } = req.body;

    try {
      const books = await Books.create({
        content,
        author,
        name,
        categoryId,
        price,
        description,
        image,
        data,
        numbersOfPages,
        ageRestriction
      });

      return res.json(books);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },
  deleteBook: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedBook = await Books.findByIdAndDelete(id);
      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      return res.json({ message: "Book deleted successfully" });
    } catch (e) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};