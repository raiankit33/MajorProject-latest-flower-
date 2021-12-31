const express = require("express");
const router = express.Router();
const Book = require("../models/book");
const config = require("../config/database");

router.post("/add", (req, res, next) => {
  // res.send("Add Sales");

  let newBook = new Book({
    product_name: req.body.product_name,
    product_code: req.body.product_code,
    price: req.body.price,
    image: req.body.image,
    name : req.body.name,
    email :req.body.email,
    units :req.body.units,
    country :req.body.country,
    address: req.body.address,
    phone_no: req.body.phone_no,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  
    created_by: req.body.created_by,
  });

  Book.addBook(newBook, (err, book) => {
    if (err) {
      res.json({ success: false, msg: "Failed to add a new item." });
    } else {
      res.json({ success: true, msg: "Item Added Successfully." });
    }
  });
});

router.get("/getBooks", (req, res, next) => {
  // res.send("GET Orders");

  Book.getBooks(req.query.user, (err, books) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
     
      res.json({ success: true, count: books.length, data: books });
    }
  });
});

router.get("/read/:id", (req, res, next) => {
  Book.getOrderById(req.params.id, (err, order) => {
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

  Book.updateBook(itemID, req.body, (err, updateBook) => {
    if (err) {
      res.status(400).json({
        success: false,
        msg: err,
        // msg: "Something went wrong! Item not updated",
      });
    } else {
      res.json({ success: true, updateBook });
    }
  });
});

router.delete("/delete/:id", (req, res, next) => {
  Book.deleteBook(req.params.id, (err, data) => {
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
        res.json({ success: true, data, msg: "Book Deleted" });
      }
    }
  });
});
module.exports = router;
