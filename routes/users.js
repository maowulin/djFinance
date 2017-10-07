var express = require('express');
var router = express.Router();
var userDao = require('../module/userDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

//增加用户
router.get('/addUser', function(req, res, next){
	userDao.add(req, res, next);
});

//管理员用户登录验证
router.get('/login', function(req, res, next){
	userDao.login(req, res, next);
});

//上传文件
router.post('/upload', function(req, res, next){
	userDao.uploadImg(req, res, next);
});

module.exports = router;
