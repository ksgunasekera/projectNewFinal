const express=require('express');
const router=express.Router();

var nicError=false;
var usernameError=true;

router.get('/',(request,respond)=>{
	respond.render('registerUser',{error:true,nicError:nicError,usernameError:true});
	request.session.errors=null;
});

router.post('/register',(request,respond)=>{
	console.log(request.body.username);
});

module.exports =router;