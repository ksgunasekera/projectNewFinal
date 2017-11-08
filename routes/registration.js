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
	request.check('nic','1').equals("");//
	request.check('username','2').equals("");
	request.check('email','3').equals("").isEmail();
	request.check('paswword','4').isLength({min:8});
	request.check('confirmPassword','5').equals(request.body.paswword);

	var errors=request.validationErrors();
	if(errors){
		for(err in errors){
			if(err.msg=='1'){
				nicError=true;
			}else if(err.msg=='2'){
				usernameError=true;
			}else if (err.msg=='3') {
				emailError=true;
			}else if (err.msg=='4') {
				passwordError=true;
			}else if (err.msg=='5') {
				confirmPasswordError=true;
			}
		}
	}
	respond.redirect('/registration');
});

module.exports =router;