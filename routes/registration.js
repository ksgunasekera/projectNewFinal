const express=require('express');
const router=express.Router();

var nicError=false;
var usernameError=false;
var emailEmptyError=false;
var emailError=false;
var passwordEmptyError=false;
var passwordLenError=false;
var confirmPasswordEmpty=false;

router.get('/',(request,respond)=>{
	respond.render('registerUser',{error:true,nicError:nicError,usernameError:usernameError,emailEmptyError:emailEmptyError,emailError:emailError,passwordEmptyError:passwordEmptyError,passwordLenError:passwordLenError,confirmPasswordEmpty:confirmPasswordEmpty});
	request.session.errors=null;
});

router.post('/register',(request,respond)=>{
	request.check('nic').equals("");

	console.log(request.body.username);
});

module.exports =router;