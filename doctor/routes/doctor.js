var express=require('express');
var router=express.Router();
var connection = require('../modules/dbConnection');

router.get('/',function(req,res,next){
	var sql="select * from patient";
	connection.query(sql,function(err,rows){
				if (err) throw err;
				res.render('doctor',{patient:rows});
	});	
				
});	


module.exports =router;