const express = require("express");
const router = express.Router();
const Receive = require("../models/receive");
const config = require("../config/database");

router.post("/add", (req, res, next) => {
  // res.send("Add Receives");

  let newReceive = new Receive({
    receive_item: req.body.receive_item,
    created_by: req.body.created_by,
  });

  Receive.addReceive(newReceive, (err, receive) => {
    if (err) {
      res.json({ success: false, msg: "Failed to add a new received item." });
    } else {
      res.json({ success: true, msg: "Received item Added Successfully." });
    }
  });
});

router.get("/getReceives", (req, res, next) => {
  // res.send("GET Receives");

  Receive.getReceives(req.query.user, (err, receives) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      console.log('receive');
      res.json({ success: true, count: receives.length, data: receives });
    }
  });
});

router.get("/read/:id", (req, res, next) => {
  Receive.getReceiveById(req.params.id, (err, receive) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, receive });
    }
  });
});

router.patch("/update", (req, res, next) => {
  // res.send("Update Receives");

  let receiveID = req.query.id;

  Receive.updateReceive(receiveID, req.body, (err, updateReceive) => {
    if (err) {
      res.status(400).json({
        success: false,
        msg: err,
        // msg: "Something went wrong! Item not updated",
      });
    } else {
      res.json({ success: true, updateReceive });
    }
  });
});

router.delete("/delete/:id", (req, res, next) => {
  Receive.deleteReceive(req.params.id, (err, data) => {
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
