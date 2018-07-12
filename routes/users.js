var express = require('express');
var router = express.Router();


//引用新新建立的表 users
const MG = require('../models/users');
let dbTable;
MG.OnConnected(function () {
    dbTable = MG.db.user;  //获取到表
});





/* GET users listing.   --users.ejs*/  
router.get('/', function(req, res, next) {
   //res.send('respond with a resource');
   //res.render('users');
   //向表dbTable中插入数据---dbTable.insert（）
   return dbTable.insert({nickname:'abc'}).exec().then(function () {
    res.send('存储成功');
})

});

module.exports = router;



