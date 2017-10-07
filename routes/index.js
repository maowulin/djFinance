var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index');
});

//二级页面
//注册公司
router.get('/rigester', function(req, res, next){
	res.render('html/rigester');
});

//代理记账
router.get('/agency', function(req, res, next){
	res.render('html/agency_opera');
});

//公司变更
router.get('/change', function(req, res, next){
	res.render('html/en_change');
});

//VI设计
router.get('/vi', function(req, res, next){
	res.render('html/VI_design');
});

//商标注册
router.get('/trademark', function(req, res, next){
	res.render('html/trademark');
});

//专利申请
router.get('/patent', function(req, res, next){
	res.render('html/patent');
});

//防伪印章
router.get('/antifake', function(req, res, next){
	res.render('html/antifake');
});

//联系我们
router.get('/contact', function(req, res, next){
	res.render('html/contact_us');
});

//管理页面
router.get('/admin', function(req, res, next){
	res.render('admin/login');
});

//后台页面
router.get('/manage', function(req, res, next){
	if(req.session.user){
		res.render('admin/admin');
	}else{
		res.redirect('/admin');
	}
});

module.exports = router;
