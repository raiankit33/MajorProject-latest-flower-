const mongoose = require("mongoose");
const config = require("../config/database");

const ItemSchema = mongoose.Schema({
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
  created_by: {
    type: String,
    required: true,
  },
  });

const Item = (module.exports = mongoose.model("Item", ItemSchema));

module.exports.getItemById = (id, callback) => {
  Item.findById(id, callback);
};

module.exports.getItemByEmail = (email, callback) => {
  const query = { email: email };
  Item.findOne(query, callback);
};

// Create Items
module.exports.addItem = (newItem, callback) => {
  newItem.save(callback);
};

// GET Items
module.exports.getItems = (user, callback) => {
  // let query = { created_by: user };
  Item.find( callback);
};

// Update Items
module.exports.updateItem = (_id, updates, callback) => {
  Item.findByIdAndUpdate(
    _id,
    updates,
    { new: true, useFindAndModify: false },
    callback
  );
};

// Delete Item
module.exports.deleteItem = (_id, callback) => {
  Item.deleteOne({ _id }, callback);
};
