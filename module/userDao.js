
//实现msyql交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql  = require('./sql');
var fs    = require('fs');
//上传图片
var multiparty = require('multiparty');
var util    = require('util');

//使用连接池，提升性能
var pool = mysql.createPool($util.extend({}, $conf.mysql));

module.exports = {
	add : function(req, res, next){
		pool.getConnection(function(err, connection){
			//获取前台传递的参数
			var param = req.query || req.params;
			
			param.age = parseInt(param.age);
			
			//建立连接， 向表中插入值
			connection.query($sql.insert, [param.name, param.age, param.sex], function(err, result){
				if(result){
					var msg = {
						code : "200",
						msg  : "登录成功"
					}
					res.json(msg);
					
					//释放连接池
					connection.release();
				}else {
					result = {
						code : 400,
						msg  : '增加失败'
					}
					
					//返回json数据
					jsonWrite(res, result);
					
					//释放连接池
					connection.release();
				}
			});
		});
	},
	
	login : function(req, res, next){
		
		pool.getConnection(function(err, connection){
			//获取前台参数
			var param = req.query || req.params;
			
			//建立连接查询用户名及密码
			connection.query($sql.userQueryAll, [param.name], function(err, result){
				
				if(result.length !== 0){
					//判断用户名及密码的正确性
					var msg = {}
					
					if(result[0].password == param.password){
						msg.code = 200;
						msg.msg  = "登录成功";
						req.session.user = req.query || req.params;
					}else{
						msg.code = 400;
						msg.msg  = "密码错误";
					}
					res.json(msg);
					
					//释放连接池
					connection.release();
				}else {
					msg = {
						code : 400,
						msg  : '用户名不存在'
					}
					
					//返回json数据
					res.json(msg);
					
					//释放连接池
					connection.release();
				}
			});
		});
	},
	
	uploadImg : function(req, res, next){
		//设置上传目标路径
		var form = 	new multiparty.Form({uploadDir : './public/uploadImg'});
		//上传完成后处理
 		form.parse(req, function (err, fields, files){
			var filesTmp  = JSON.stringify(files,null,2);
			if (err){
				console.log('parse error: ' + err);
				res.send("写文件操作失败");
			}else {
				res.send("文件上传成功");
//				console.log('parse files: ' + filesTmp);
				var fileNameArr = Object.keys(files);
				var firstFilename = fileNameArr[0];
				var fileDataArr = files[firstFilename];
//				console.log( typeof fileDataArr);
//				console.log(fileDataArr);
				var fileData = fileDataArr[0];
				var uploadedPath = fileData.path;
				var dstPath = './public/uploadImg' + fileData.originalFilename;
				var imgPath = '/uploadImg/' + fileData.originalFilename;
				
				//将文件路径存入数据库
				pool.getConnection(function(err, connection){
					connection.query($sql.imgInsert, [imgPath], function(err, result){
						if(err){
							console.log("插入失败");
						}
						//释放连接池
						connection.release();
					});
				});
			}
		});
		
		
	}
}
