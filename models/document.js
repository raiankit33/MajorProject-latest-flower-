const mongoose = require("mongoose");
// const config = require("../config/database");


const DocumentSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  life_span: {
    type: String
  },
  type: {
    type: String,
    required:true
  },
  filepath: {
    type: String,
    required: true,
  }
});

const DocumentModel = module.exports = mongoose.model("Document", DocumentSchema);

module.exports.addDocument = (doc, callback) => {
  doc.save(callback);
}



//Functions
// module.exports.getDriverById = (id, callback) => {
//   Driver.findById(id, callback);
// };

// module.exports.getDriverByEmail = (email, callback) => {
//   const query = { email: email };
//   Driver.findOne(query, callback);
// };

// // Create Drivers
// module.exports.addDriver = (newDriver, callback) => {
//   newDriver.save(callback);
// };

// // GET Drivers
// module.exports.getDrivers = (user, callback) => {
//   let query = { created_by: user };
//   Driver.find(query, callback);
// };

// // Update Driver
// module.exports.updateDriver = (_id, updates, callback) => {
//   Driver.findByIdAndUpdate(
//     _id,
//     updates,
//     { new: true, useFindAndModify: false },
//     callback
//   );
// };

// // Delete Driver
// module.exports.deleteDriver = (_id, callback) => {
//   Driver.deleteOne({ _id }, callback);
// };
