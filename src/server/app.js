const express = require('express');
const app = express();
const db = require('./db/mongodb');
const formidable = require('formidable');
const registerModule = require('./regist/regist');
const loginModule = require('./login/login');
const presenceModule = require('./presence/presence');
const session = require('express-session');
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 3*12*3600000 }}))
db.connect('qiandao');
app.use('/doLogin',loginModule.login);
app.use('/doRegister',registerModule.register);
app.use('/presence',presenceModule.presence);
app.get('/checksession',(req,res) => {
  "use strict";
  if(req.session.userName){
    res.json({result: true});
    res.end();
  }else{
    res.json({result: false});
    res.end();
  }
})
app.listen(8080,'localhost',() => {
  "use strict";
  console.log('listen succeed')
});
