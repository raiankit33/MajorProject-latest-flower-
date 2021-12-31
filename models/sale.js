const mongoose = require("mongoose");
const config = require("../config/database");

const SaleSchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip_code: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  created_by: {
    type: String,
    required: true,
  },
  });

const Sale = (module.exports = mongoose.model("Sale", SaleSchema));

module.exports.getItemById = (id, callback) => {
  Sale.findById(id, callback);
};

module.exports.getItemByEmail = (email, callback) => {
  const query = { email: email };
  Sale.findOne(query, callback);
};

// Create Sales
module.exports.addSale = (newSale, callback) => {
  newSale.save(callback);
};

// GET Sales
module.exports.getSales = (user, callback) => {
  let query = { created_by: user };
  Sale.find(query, callback);
};

// Update Sales
module.exports.updateSale = (_id, updates, callback) => {
  Sale.findByIdAndUpdate(
    _id,
    updates,
    { new: true, useFindAndModify: false },
    callback
  );
};

// Delete Sale
module.exports.deleteSale = (_id, callback) => {
  Sale.deleteOne({ _id }, callback);
};
