const Basket = require("../models/Basket.model");
const Book = require("../models/Book.model");

module.exports.basketController = {
  getBasket: async (req, res) => {
    try {
      const basket = await Basket.findOne({user: req.user.id}).populate("books");

      return res.json(basket);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },

  addBookInBasket: async (req, res) => {
    const { bookId } = req.params;

    try {
      const book = await Book.findById(bookId);
      const basket = await Basket.findOneAndUpdate(
        { user: req.user.id },
        {
          $addToSet: { books: bookId },
          $inc: { total: book.price },
        }
      );
      console.log(basket, req.user.id);
      return res.json(basket);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },
  deleteBook: async (req, res) => {
    const { id } = req.params;
    try {
      const book = await Basket.findByIdAndDelete(id);
      return res.json(book);
    } catch (e) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};
