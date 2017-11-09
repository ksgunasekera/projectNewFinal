const express=require('express');
const router=express.Router();

var nicError=false;
var usernameError=false;
var emailError=false;
var passwordError=false;
var confirmPasswordError=false;

router.get('/',(request,respond)=>{
	respond.render('registerUser',{nicError:nicError,usernameError:usernameError,emailError:emailError,passwordError:passwordError,confirmPasswordError:confirmPasswordError});
	request.session.errors=null;
	nicError=false;
	usernameError=false;
	emailError=false;
	passwordError=false;
	confirmPasswordError=false;
});

router.get('/submit',(request,respond)=>{
	respond.render('registerUser',{errors:request.session.errors});
});

router.post('/submit',(request,respond)=>{
	console.log("POST");
	request.check('nic',"1").isLength({min:10,max:12});//
	request.check('username',"2").isLength({min:6});
	request.check('email',"3").isEmail();
	request.check('paswword',"4").isLength({min:8}).equals(request.body.confirmPassword);
	
	var errors=request.validationErrors();
	console.log(errors.length);
	if(errors){
		request.session.errors=errors;
		for (i in errors){
			if("1"==errors[i].msg){
				nicError=true;
			}else if("2"==errors[i].msg){
				usernameError=true;
			}else if("3"==errors[i].msg){
				emailError==true;
			}else if("4"==errors[i].msg){
				passwordError=true;
			}
		}
	
	}
	request.session.errors=errors;
	respond.redirect('/registration');
});

module.exports =router;