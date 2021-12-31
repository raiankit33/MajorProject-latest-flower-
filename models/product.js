const mongoose = require("mongoose");
const config = require("../config/database");

const ProductSchema = mongoose.Schema({
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
  created_by: {
    type: String,
    required: true,
  },
 
});

const Product = (module.exports = mongoose.model("Product", ProductSchema));

module.exports.getProductById = (id, callback) => {
  Product.findById(id, callback);
};

module.exports.getProductByEmail = (email, callback) => {
  const query = { email: email };
  Product.findOne(query, callback);
};

// Create Products
module.exports.addProduct = (newProduct, callback) => {
  newProduct.save(callback);
  
};

// GET Products
module.exports.getProducts = (user, callback) => {
  let query = { created_by: user };
  Product.find(query, callback);
};

// Update Product
module.exports.updateProduct = (_id, updates, callback) => {
  Product.findByIdAndUpdate(
    _id,
    updates,
    { new: true, useFindAndModify: false },
    callback
  );
};

// Delete Product
module.exports.deleteProduct = (_id, callback) => {
  Product.deleteOne({ _id }, callback);
};
