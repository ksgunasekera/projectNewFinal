const express=require('express');
const router=express.Router();

router.get('/',(request,respond)=>{
	respond.render('registration');
});

router.post('/register',(request,respond)=>{
	console.log(request.body.username);
});

module.exports =router;