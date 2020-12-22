const express = require("express");
const router = express.Router();
const Driver = require("../models/driver");
const config = require("../config/database");

router.post("/register", (req, res, next) => {
  // res.send("Register Drivers");

  let newDriver = new Driver({
    name: req.body.name,
    email: req.body.email,
    license_no: req.body.license_no,
    contact_no: req.body.contact_no,
    created_by: req.body.created_by,
  });

  Driver.addDriver(newDriver, (err, driver) => {
    if (err) {
      res.json({ success: false, msg: "Failed to add a new driver." });
    } else {
      res.json({ success: true, msg: "Driver Added Successfully." });
    }
  });
});

router.get("/getDrivers", (req, res, next) => {
  // res.send("GET Drivers");

  Driver.getDrivers(req.query.user, (err, drivers) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      console.log('driver');
      res.json({ success: true, count: drivers.length, data: drivers });
    }
  });
});

router.get("/read/:id", (req, res, next) => {
  Driver.getDriverById(req.params.id, (err, driver) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, driver });
    }
  });
});

router.patch("/update", (req, res, next) => {
  // res.send("Update Drivers");

  let driverID = req.query.id;

  Driver.updateDriver(driverID, req.body, (err, updateDriver) => {
    if (err) {
      res.status(400).json({
        success: false,
        msg: err,
        // msg: "Something went wrong! Driver not updated",
      });
    } else {
      res.json({ success: true, updateDriver });
    }
  });
});

router.delete("/delete/:id", (req, res, next) => {
  Driver.deleteDriver(req.params.id, (err, data) => {
    if (err) {
      res.status(400).json({
        success: false,
        msg: "Something went wrong! Driver not deleted",
      });
    } else {
      if (data.deletedCount == 0) {
        res.status(404).json({
          success: false,
          msg: "No such driver found!",
        });
      } else {
        res.json({ success: true, data, msg: "Driver Deleted" });
      }
    }
  });
});
module.exports = router;
