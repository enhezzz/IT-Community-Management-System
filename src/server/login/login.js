const express = require('express');
const db = require('../db/mongodb');
const formidable = require('formidable');
const session = require('express-session');
let router = express.Router()
router.use(session({ secret: 'keyboard cat', cookie: { maxAge: 3*12*3600000 }}))
router.post('/',(req,res) => {
  "use strict";
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    db.find('student',fields,function (student) {
      if(student[0]){
        req.session.userName = student[0]['userName'];
        req.session.studentId = student[0]['studentId'];
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
router.get('/checkLogin',(req,res) => {
  if(req.session.userName && req.session.studentId){
    res.json({isLogin: true,
    studentId: req.session.studentId,
    userName: req.session.userName});
    res.end();
  }else{
  res.json({result: false});
  res.end();
  }
})
exports.login = router;
