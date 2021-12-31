const express = require("express");
const router = express.Router();
const Item = require("../models/item");
const config = require("../config/database");

router.post("/add", (req, res, next) => {
  // res.send("Add Items");

  let newItem = new Item({
    product_name: req.body.product_name,
    product_code: req.body.product_code,
    price: req.body.price,
    image: req.body.image,
    created_by: req.body.created_by,
  });

  Item.addItem(newItem, (err, item) => {
    if (err) {
      res.json({ success: false, msg: "Failed to add a new item." });
    } else {
      res.json({ success: true, msg: "Item Added Successfully." });
    }
  });
});

router.get("/getItems", (req, res, next) => {
  // res.send("GET Items");

  Item.getItems(req.query.user, (err, items) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
     
      res.json({ success: true, count: items.length, data: items });
    }
  });
});

router.get("/read/:id", (req, res, next) => {
  Item.getItemById(req.params.id, (err, item) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, data :item });
    }
  });
});

router.patch("/update", (req, res, next) => {
  // res.send("Update Items");

  let itemID = req.query.id;

  Item.updateItem(itemID, req.body, (err, updateItem) => {
    if (err) {
      res.status(400).json({
        success: false,
        msg: err,
        // msg: "Something went wrong! Item not updated",
      });
    } else {
      res.json({ success: true, updateItem });
    }
  });
});

router.delete("/delete/:id", (req, res, next) => {
  Item.deleteItem(req.params.id, (err, data) => {
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
        res.json({ success: true, data, msg: "Item Deleted" });
      }
    }
  });
});
module.exports = router;
