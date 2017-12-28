const express = require('express');
const db = require('./db/mongodb');
const formidable = require('formidable');
const registerModule = require('./regist/regist');
const loginModule = require('./login/login');
const presenceModule = require('./presence/presence');
db.connect('qiandao');
let app = express();
app.use('/doLogin',loginModule.login);
app.use('/doRegister',registerModule.register);
app.use('/presence',presenceModule.presence)
app.listen(8080,'localhost',() => {
  "use strict";
  console.log('listen succeed')
});
