const express=require('express');
const router=express.Router();
const userlogin=require('../controllers/verifyPatient');


var loginError=false;
router.get('/',(request,respond,next)=>{
	respond.render('login',{errors:loginError});
	request.session.errors=null;
	loginError=false;
});
router.post('/login',(request,respond,next)=>{
	
	if(request.body.username.length==0 || request.body.password.length==0){
		loginError=true;
	}
	
	
	
	if(loginError==true){
		respond.redirect('/');
	}
	else{
		
		var user={
			username:request.body.username,
			password:request.body.password
			}
		
		
		userlogin.login(user);

	}

		
});

module.exports =router;