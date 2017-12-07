var express=require('express');
var router=express.Router();
var connection = require('../modules/dbConnection');
var fs=require('fs');
var pdf=require('pdfkit');


router.get('/',function(req,res,next){

	var user_id = req.params.user_id;
	res.render('prescribe');
	
});	


router.post('/submit',(req,res,next)=>{

	const details = [

		{des:req.body.description}
		
	];	

	let doc = new pdf();

	details.forEach((data)=>{

		doc.pipe(fs.createWriteStream('pdf-files/node.pdf'));

		doc.text(data.des,100,100);

		doc.end(); 
		console.log('pdf created');

	});
	res.redirect('/prescribe')
	
});

module.exports =router;	

