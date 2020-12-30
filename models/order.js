const mongoose = require("mongoose");
const config = require("../config/database");

const OrderSchema = mongoose.Schema({
  company_name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email_address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
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
  zip: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  order_id: {
    type: String,
    required: true,
  },
  product_code: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  units: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  bill_amount: {
    type: String,
    required: true,
  },
  advance: {
    type: String,
    required: true,
  },
  balance: {
    type: String,
    required: true,
  },
  mode_of: {
    type: String,
    required: true,
  },
  created_by: {
    type: String,
    required: true,
  },
  });

const Order = (module.exports = mongoose.model("Order", OrderSchema));

module.exports.getOrderById = (id, callback) => {
  Sale.findById(id, callback);
};

module.exports.getOrderByEmail = (email, callback) => {
  const query = { email: email };
  Sale.findOne(query, callback);
};

// Create Orders
module.exports.addOrder = (newOrder, callback) => {
  newOrder.save(callback);
};

// GET Orders
module.exports.getOrders = (user, callback) => {
  let query = { created_by: user };
  Order.find(query, callback);
};

// Update Orders
module.exports.updateOrder = (_id, updates, callback) => {
  Order.findByIdAndUpdate(
    _id,
    updates,
    { new: true, useFindAndModify: false },
    callback
  );
};

// Delete Order
module.exports.deleteOrder = (_id, callback) => {
  Order.deleteOne({ _id }, callback);
};
