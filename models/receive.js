const mongoose = require("mongoose");
const config = require("../config/database");

const ReceiveSchema = mongoose.Schema({
  receive_item: {
    type: String,
    required: true,
  },
  created_by: {
    type: String,
    required: true,
  },
  });

const Receive = (module.exports = mongoose.model("Receive", ReceiveSchema));

module.exports.getReceiveById = (id, callback) => {
  Receive.findById(id, callback);
};

module.exports.getReceiveByEmail = (email, callback) => {
  const query = { email: email };
  Receive.findOne(query, callback);
};

// Create Receive
module.exports.addReceive = (newReceive, callback) => {
  newReceive.save(callback);
};

// GET Receive
module.exports.getReceives = (user, callback) => {
  let query = { created_by: user };
  Receive.find(query, callback);
};

// Update Receive
module.exports.updateReceive = (_id, updates, callback) => {
  Item.findByIdAndUpdate(
    _id,
    updates,
    { new: true, useFindAndModify: false },
    callback
  );
};

// Delete Receive
module.exports.deleteReceive = (_id, callback) => {
  Item.deleteOne({ _id }, callback);
};
