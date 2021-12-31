const mongoose = require("mongoose");
const config = require("../config/database");

const DriverSchema = mongoose.Schema({
  date: {
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
  price: {
    type: String,
    required: true,
  },
  units: {
    type: String,
    required: true,
  },
  initial_quantity: {
    type: String,
    required: true,
  },
  alert_quantity: {
    type: String,
    required: true,
  },
  // sold_quantity: {
  //   type: String,
  //   required: true,
  // },
  image: {
    type: String,
    required: true,
  },
  created_by: {
    type: String,
    required: true,
  },
});

const Driver = (module.exports = mongoose.model("Driver", DriverSchema));

module.exports.getDriverById = (id, callback) => {
  Driver.findById(id, callback);
};

module.exports.getDriverByEmail = (email, callback) => {
  const query = { email: email };
  Driver.findOne(query, callback);
};

// Create Drivers
module.exports.addDriver = (newDriver, callback) => {
  newDriver.save(callback);
};

// GET Drivers
module.exports.getDrivers = (user, callback) => {
  // let query = { created_by: user };
  Driver.find( callback);
};

// Update Driver
module.exports.updateDriver = (_id, updates, callback) => {
  Driver.findByIdAndUpdate(
    _id,
    updates,
    { new: true, useFindAndModify: false },
    callback
  );
};

// Delete Driver
module.exports.deleteDriver = (_id, callback) => {
  Driver.deleteOne({ _id }, callback);
};
