const express = require('express');
const db = require('../db/mongodb');
const formidable = require('formidable');
const router = express.Router();
router.post('/',(req,res) => {
  "use strict";
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    db.insert('student',fields,() => {
      console.log(fields);
      console.log('注册成功');
      res.json({result: 'succeed'});
      res.end();
    })
  })
});
exports.register = router;
