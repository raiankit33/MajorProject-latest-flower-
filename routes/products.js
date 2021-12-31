const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const config = require("../config/database");
const multer = require('multer');
const path = require('path');



// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads');
//   },
//   filename: function (req, file, cb) {
   
//     cb(null, file.originalname);
//   }
// });



// const upload = multer({ storage: storage }).single('file');


// router.post("/post",upload, function(req,res,next){
// var imageFile = req.file.filename;
//  var success = req.file.filename+"upload successfully";

//  var imageDeteils= new uploadModel({
//    imagename: imageFile
//  });

//  imageDeteils.save(function(err,doc){
//    if(err) throw err;
//    res.render('upload-file', {title: "upload file", success:success})
//  })
// })


router.post("/add", (req, res, next) => {
  // res.send("Register Drivers");
 

  let newProduct = new Product({
    address: req.body.address,
    phone_no: req.body.phone_no,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  
    created_by: req.body.created_by,
  });


  Product.addProduct(newProduct, (err,Product) => {
    if (err) 
    {
      res.json({ success: false, msg: "Failed to add a new product." });
    } else {
      
      res.json({ success: true, msg: "Driver Added Successfully." });
      
    }
  });
});

router.get("/getProduct", (req, res, next) => {
  // res.send("GET Drivers");

  Product.getProducts(req.query.user, (err, products) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
     
      res.json({ success: true, count: products.length, data: products });
    }
  });
});

router.get("/read/:id", (req, res, next) => {
  Product.getProductById(req.params.id, (err, product) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, product });
    }
  });
});

router.patch("/update", (req, res, next) => {
  // res.send("Update Drivers");

  let productID = req.query.id;

  Product.updateProduct(productID, req.body, (err, updateProduct) => {
    if (err) {
      res.status(400).json({
        success: false,
        msg: err,
        // msg: "Something went wrong! Driver not updated",
      });
    } else {
      res.json({ success: true, updateProduct });
    }
  });
});

router.delete("/delete/:id", (req, res, next) => {
  Product.deleteDriver(req.params.id, (err, data) => {
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
