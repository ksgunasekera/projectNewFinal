var express=require('express');
var router=express.Router();
var connection=require('../modules/dbConnection');

var emailError=false;
var passwordError=false;
var confirmPasswordError=false;

router.get('/',(request,respond)=>{
	respond.render('forgetPassword',{emailError:emailError,passwordError:passwordError,confirmPasswordError:confirmPasswordError});
	request.session.errors=null;
	emailError=false;
	passwordError=false;
	confirmPasswordError=false;
});

router.get('/submit',(request,respond)=>{
	respond.render('forgetPassword',{errors:request.session.errors});
	
});

router.post('/submit',(request,respond,next)=>{
	 const userdata = {

		uemail:request.body.email,
        upword:request.body.password,
        upwconfirm:request.body.confirmpassword

	};

	if((userdata.email=='') || (userdata.upword=='') || (userdata.upwconfirm=='')){
		request.session.error=true;
	    emailError=false;
	    passwordError=false;
	    confirmPasswordError=false;
		console.log('Invalid changed password');
		respond.redirect('/forgetPassword');
			
	}
	else{
		if((userdata.upword !='') && (userdata.upword.length >= 8) && (userdata.upword == userdata.upwconfirm)){
                 var sql1="select user_id from patient where email = "+connection.escape(userdata.uemail);
		         connection.query(sql1,(error,results,fields)=>{
						if (error) {
							request.session.error=true;
							console.log(error);
							respond.redirect('/forgetPassword');
							
						}
						if(results.length==0) {
							request.session.error=true;
							console.log('Invalid email');
							respond.redirect('/forgetPassword');

						}else{
							console.log('Valid user_id : '+results[0].user_id);
							var sql2="select password from users where user_id = '"+results[0].user_id+"'";
							console.log(sql2);
							connection.query(sql2,(error,results,fields)=>{
								if (error) {
									request.session.error=true;
									console.log(error);
									respond.redirect('/forgetPassword');
									
							 
								}if(results.length==0) {
									request.session.error=true;
									console.log('Password does not exist');
									respond.redirect('/forgetPassword');

								}else{
									console.log('Valid password : '+results[0].password);
                                    var sql3="update users set password = "+connection.escape(userdata.upword)+" where password = '"+results[0].password+"'";
				                    connection.query(sql3,(error,results,fields)=>{
										if (error) {
											request.session.errors=true;
											console.log(error);
											respond.redirect('/forgetPassword');
																
										}else{
											request.session.errors=false;
											console.log('Successfully Changed');
										    respond.redirect('/');
										}
				                    });	    
		                        }
		                    });
		                }        

                });
				
		}else{
             if((userdata.email!='') && (userdata.upword.length < 8) && (userdata.upword != userdata.upwconfirm)){
                        request.session.errors=true;
					    passwordError=true;
						confirmPasswordError=true;
						console.log('Invalid password and password missmatch');
						respond.redirect('/forgetPassword');
                 					
             }else if((userdata.email!='') && (userdata.upword.length < 8) && (userdata.upword == userdata.upwconfirm)){
                        request.session.errors=true;
					    passwordError=true;
						console.log('Invalid password');
						respond.redirect('/forgetPassword');

			 }else if((userdata.email!='') && (userdata.upword.length >= 8) && (userdata.upword != userdata.upwconfirm)){
                        request.session.errors=true;
					    confirmPasswordError=true;
						console.log('password missmatch');
						respond.redirect('/forgetPassword');			

			 }


		    
	    }		
		
	}	
});

module.exports =router;								           

		

					
					

				
	

