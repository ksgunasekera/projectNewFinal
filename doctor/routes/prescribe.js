var express=require('express');
var router=express.Router();
var connection = require('../modules/dbConnection');


router.get('/:user_id',function(req,res,next){

	var user_id = req.params.user_id;
	console.log('Prescribe of '+user_id);
	res.render('prescribe');
	
});	

module.exports =router;