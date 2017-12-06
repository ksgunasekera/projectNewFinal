var express=require('express');
var router=express.Router();
var connection = require('../modules/dbConnection');


router.get('/:user_id',function(req,res,next){

	var user_id = req.params.user_id;
	console.log('Select nic is : '+user_id);
	var sql1="select * from patient where user_id = '"+user_id+"'";
	var sql2="delete from patient where user_id = '"+user_id+"'";
	connection.query(sql1,function(err,rows){
		    if (err){
		    	throw err;
		    }else{
		      res.render('getpatient',{data:rows});
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