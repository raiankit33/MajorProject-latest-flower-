const express = require("express");
const router = express.Router();
const Sale = require("../models/sale");
const config = require("../config/database");

router.post("/add", (req, res, next) => {
  // res.send("Add Sales");

  let newSale = new Sale({
    address: req.body.address,
    phone_no: req.body.phone_no,
    city: req.body.state,
    zip_code: req.body.zip_code,
    city: req.body.city,
    created_by: req.body.created_by,
  });

  Sale.addSale(newSale, (err, sale) => {
    if (err) {
      res.json({ success: false, msg: "Failed to add a new item." });
    } else {
      res.json({ success: true, msg: "Item Added Successfully." });
    }
  });
});

router.get("/getSales", (req, res, next) => {
  // res.send("GET Sales");

  Sale.getSales(req.query.user, (err, sales) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      console.log('sale');
      res.json({ success: true, count: sales.length, data: sales });
    }
  });
});

router.get("/read/:id", (req, res, next) => {
  Sale.getSaleById(req.params.id, (err, sale) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, sale });
    }
  });
});

router.patch("/update", (req, res, next) => {
  // res.send("Update Sales");

  let itemID = req.query.id;

  Sale.updateSale(itemID, req.body, (err, updateSale) => {
    if (err) {
      res.status(400).json({
        success: false,
        msg: err,
        // msg: "Something went wrong! Item not updated",
      });
    } else {
      res.json({ success: true, updateSale });
    }
  });
});

router.delete("/delete/:id", (req, res, next) => {
  Sale.deleteSale(req.params.id, (err, data) => {
    if (err) {
      res.status(400).json({
        success: false,
        msg: "Something went wrong! Item not deleted",
      });
    } else {
      if (data.deletedCount == 0) {
        res.status(404).json({
          success: false,
          msg: "No such item found!",
        });
      } else {
        res.json({ success: true, data, msg: "Sale Deleted" });
      }
    }
  });
});
module.exports = router;
