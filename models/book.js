const mongoose = require("mongoose");
const config = require("../config/database");

const BookSchema = mongoose.Schema({
    address: {
        type: String,
        required: true,
      },
      phone_no: {
        type: String
      },
      city: {
        type: String,
        required:true
      },
      state: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
      },
      product_name: {
        type: String,
        required: true,
      },
      product_code: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      }, 
       units: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },






      created_by: {
        type: String,
        required: true,
      },
  });

const Book = (module.exports = mongoose.model("Book", BookSchema));

module.exports.getBookById = (id, callback) => {
  Sale.findById(id, callback);
};

module.exports.getBookByEmail = (email, callback) => {
  const query = { email: email };
  Sale.findOne(query, callback);
};

// Create Books
module.exports.addBook = (newBook, callback) => {
  newBook.save(callback);
};

// GET Books
module.exports.getBooks = (user, callback) => {
  let query = { created_by: user };
  Book.find(query, callback);
};

// Update Books
module.exports.updateBook = (_id, updates, callback) => {
  Book.findByIdAndUpdate(
    _id,
    updates,
    { new: true, useFindAndModify: false },
    callback
  );
};

// Delete Book
module.exports.deleteBook = (_id, callback) => {
  Book.deleteOne({ _id }, callback);
};
