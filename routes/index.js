var express = require('express');
var router = express.Router();

/* GET home page.   inde.jade */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


//修改，渲染成ejs页面---hello.ejs
router.get('/', function(req, res, next) {
  res.render('hello', { title: 'Express' });
});

module.exports = router;
