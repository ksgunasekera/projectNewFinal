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
});


router.post('/submit',(request,respond)=>{
	console.log("POST");
	request.checkBody('nic',"H").isLength({min:10});//
	request.check('username',"FGH").isLength({min:6,max:12});
	request.check('email',"ADFR").isEmail();
	request.check('paswword',"TYR").isLength({min:8}).equals(request.body.confirmPassword);
	
	var errors=request.validationErrors();
	if(errors){
		for (i in errors){
			console.log(errors[i].msg);
		
		}
	}
	respond.redirect('/registration');
});

module.exports =router;