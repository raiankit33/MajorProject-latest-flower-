const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const config = require("../config/database");

router.post("/add", (req, res, next) => {
  // res.send("Add Sales");

  let newOrder = new Order({
    company_name: req.body.company_name,
    name: req.body.name,
    email_address: req.body.email_address,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    country: req.body.country,
    date: req.body.date,
    order_id: req.body.order_id,
    product_code: req.body.product_code,
    product_name: req.body.product_name,
    units: req.body.units,
    status:req.body.status,
    bill_amount: req.body.bill_amount,
    advance: req.body.advance,
    balance: req.body.balance,
    mode_of:req.body.mode_of,
    created_by: req.body.created_by,
  });

  Order.addOrder(newOrder, (err, order) => {
    if (err) {
      res.json({ success: false, msg: "Failed to add a new item." });
    } else {
      res.json({ success: true, msg: "Item Added Successfully." });
    }
  });
});

router.get("/getOrders", (req, res, next) => {
  // res.send("GET Orders");

  Order.getOrders(req.query.user, (err, orders) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
     
      res.json({ success: true, count: orders.length, data: orders });
    }
  });
});

router.get("/read/:id", (req, res, next) => {
  Order.getOrderById(req.params.id, (err, order) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, sale });
    }
  });
});

router.patch("/update", (req, res, next) => {
  // res.send("Update Orders");

  let itemID = req.query.id;

  Order.updateOrder(itemID, req.body, (err, updateOrder) => {
    if (err) {
      res.status(400).json({
        success: false,
        msg: err,
        // msg: "Something went wrong! Item not updated",
      });
    } else {
      res.json({ success: true, updateOrder });
    }
  });
});

router.delete("/delete/:id", (req, res, next) => {
  Order.deleteOrder(req.params.id, (err, data) => {
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
        res.json({ success: true, data, msg: "Order Deleted" });
      }
    }
  });
});
module.exports = router;
