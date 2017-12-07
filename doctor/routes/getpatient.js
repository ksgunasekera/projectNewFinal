var express=require('express');
var router=express.Router();
var connection = require('../modules/dbConnection');


router.get('/',function(req,res,next){

	var sql1="select * from patient limit 1"; 
	connection.query(sql1,function(err,rows){
		    if (err){
		    	throw err;
		    }else{
		      res.render('getpatient',{data:rows});
		      var sql2="delete from patient where user_id = '"+rows[0].user_id+"'";
              connection.query(sql2,function(err,rows){
                      if (err){
		    	          throw err;
		              }else{
		              	  console.log('Succsess get the patient');
                      }
              });	      

            }	
    });	
});	

module.exports =router;