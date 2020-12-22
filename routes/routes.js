const express = require("express");
const router = express.Router();
const DocumentModel = require("../models/document");
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname + path.extname(file.originalname));
  }
  // filename: function (req, file, cb) {
  //   let filename = file.originalname.split('.');
  //   cb(null, filename[0] + path.extname(file.originalname));
  // }
})
 
// var upload = multer({ storage: storage });

// const config = require("../config/database");
router.get("/get_docs", async (req,res) => {
  const documents = await DocumentModel.find();
  res.status(200).json(documents);
});

router.post("/add_doc", (req,res,next) => {
    // res.json({"mdg":"hello"});
    let upload = multer({ storage: storage }).single('mydoc');
    // upload.single('user-document')
    upload(req, res, function(err) {
      if (req.fileValidationError) {
        return res.send(req.fileValidationError);
      }
        if (!req.file) return res.send('Please upload a file')
        if(err){
          res.status(500).json({ success: false, msg: err });
        } else {
          // const file = req.file;
          console.log(req.file , '123');
          let documentData = new DocumentModel({
              filename: req.file.originalname,
              tags: req.body.tags,
              life_span: req.body.life_span,
              type: req.body.type,
              filepath: `http://localhost:5000/uploads/${req.file.originalname}`
          });
          
          DocumentModel.addDocument(documentData, (err, doc) => {
            if(err) {
              res.status(500).json({ success: false, msg: err });
            } else {
              console.log("documentData");
              res.status(201).json({success: true, documentData: documentData});
            }
          })
        } 
    });



    // res.send("Document Added").status(200);
})


router.delete("/delete_doc/:id", (req,res) => {
  const id = req.params.id;
  DocumentModel.findByIdAndDelete(id, function (err) { 
    if (err){ 
        console.log(err) ;
    } 
    else{ 
        console.log("Deleted"); 
    } 
});
  res.json("Deleted Successfully").status(200);
});

module.exports = router;