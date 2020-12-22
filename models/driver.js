const mongoose = require("mongoose");
const config = require("../config/database");

const DriverSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  license_no: {
    type: String,
    required: true,
  },
  contact_no: {
    type: Number,
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
  let query = { created_by: user };
  Driver.find(query, callback);
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
