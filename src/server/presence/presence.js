const express = require('express');
const db = require('../db/mongodb');
const formidable = require('formidable');
const router = express.Router();
router.post('/',(req,res) => {
  "use strict";
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    db.find('presence',{
      userName: fields['userName'],
      studentId: fields['studentId']
    },function (student) {
      if(student[0]){
        db.update('presence',
          {
          userName: fields['userName'],
          studentId: fields['studentId']
        },
          {$push : {"date" : fields['date']}},
          function () {
            console.log('在此签到成功');
            res.json({result: 'succeed'});
            res.end();
          })
      }else{
        db.insert('presence',
          {
          userName: fields['userName'],
          studentId: fields['studentId'],
          date:[fields['date']]
        },
          function () {
            console.log('第一次签到成功');
            res.json({result: 'succeed'});
            res.end();
          })
      }
    })
    console.log(fields)
  })
});
router.get('/record',(req,res) => {
  "use strict";
  if(req.query.studentId)
  db.find('presence',
    {studentId: req.query.studentId},
    function (student) {
      if(student[0]){
        console.log(student[0].date);
        res.json({result: student[0].date});
        res.end();
      }else{
        res.json({result: []});
        res.end();
      }
    })
});
router.get('/preslist',(req,res) => {
  "use strict";
  if(req.query.studentId && req.query.page && req.query.results) {
    db.find('presence',
      {studentId: req.query.studentId},
      {
        skip: parseInt((req.query.page - 1) * req.query.results),
        limit: parseInt(req.query.results)
      },
      function (students) {
        // students.map(student => {
        //
        // })
        console.log(students);
        res.json({result: students});
        res.end()
      })
  }
    else{
      res.json({result: []});
      res.end();
    }

})
exports.presence = router;
