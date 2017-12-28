const express = require('express');
const db = require('../db/mongodb');
const formidable = require('formidable');
let router = express.Router();
router.post('/',(req,res) => {
  "use strict";
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    db.find('student',fields,function (student) {

      if(student[0]){
        res.json({result: 'succeed',
          userName: student[0]['userName'],
        studentId: student[0]['studentId']
        });
        res.end();
      }
      else{
        res.json({result: 'false'});
        res.end();
      }
    });
    console.log(fields);
  })
});
exports.login = router;
