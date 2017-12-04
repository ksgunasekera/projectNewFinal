var express=require('express');
var router=express.Router();
var connection=require('../modules/dbConnection');

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

router.post('/submit',(request,respond,next)=>{

	 const userdata = {

		unic:request.body.nic,
		uname:request.body.username,
		uemail:request.body.email,
		upword:request.body.password,
		upconfirm:request.body.confirmpassword

	};

	if((userdata.unic=='') || (userdata.uname=='') || (userdata.uemail=='') || (userdata.upword=='') || (userdata.upconfirm=='')){
		request.session.errors=true;
		nicError=true;
		usernameError=true;
		emailError==true;
		passwordError=true;
		confirmPasswordError=true;
		console.log('Invalid registration');
		respond.redirect('/registration');
    
    }else{
        if((userdata.unic.length ==10) && (userdata.uname.length >=6) && (userdata.upword.length >= 8) && (userdata.upword == userdata.upconfirm)){
			    var sql="select * from patient where user_id = "+connection.escape(userdata.unic)+" and email = "+connection.escape(userdata.uemail);
				connection.query(sql,(error,results,fields)=>{
						if (error) {
							request.session.errors=true;
							console.log(error);
							respond.redirect('/registration');
								
						}
						if(results.length==0) {
							request.session.errors=true;
							console.log('Invalid user');
							respond.redirect('/registration');

						}else{
                            var sql2="select * from users where user_id = "+connection.escape(userdata.unic);
                            connection.query(sql2,(error,results,fields)=>{
								if (error) {
								    request.session.errors=true;
								    console.log(error);
								    respond.redirect('/registration');
								}
								if(results.length==0) {
									var sql3="insert into users (user_id,username,password) values('"+userdata.unic+"','"+userdata.uname+"','"+userdata.upword+"')";
								    connection.query(sql3,(error,results,fields)=>{
										if (error) {
										    request.session.errors=true;
										    console.log(error);
										    respond.redirect('/registration');
										}
										else{ 
										    request.session.errors=false;
										    console.log('Valid user : Succesfully register ');
										    respond.redirect('/');
										}   

						            });
									

								}else{ 
								    request.session.errors=true;
								    console.log('Invalid user : Already exist ');
								    respond.redirect('/registration');
								}     
                            });

						}    
				});

		}else{	

			    if((userdata.unic.length != 10) && (userdata.uname.length < 6) && (userdata.upword.length < 8) && (userdata.upword != userdata.upconfirm)){
					request.session.errors=true;
					nicError=true;
					usernameError=true;
					passwordError=true;
					confirmPasswordError=true;
					console.log('Invalid nic,username,password and password mismatch');
					respond.redirect('/registration');

                }else{
                    
					if((userdata.unic.length != 10) && (userdata.uname.length < 6) && (userdata.upword.length < 8)){
						request.session.errors=true;
						nicError=true;
						usernameError=true;
						passwordError=true;
						console.log('Invalid nic,username and password');
						respond.redirect('/registration');

					}else if((userdata.unic.length != 10) && (userdata.uname.length < 6) && (userdata.upword != userdata.upconfirm)){
						request.session.errors=true;
						nicError=true;
						usernameError=true;
						confirmPasswordError=true;
						console.log('Invalid nic,username and password missmatch');
						respond.redirect('/registration');	

                    }else if((userdata.uname.length < 6) && (userdata.upword.length < 8) && (userdata.upword != userdata.upconfirm)){
                        request.session.errors=true;
						usernameError=true;
						passwordError=true;
						confirmPasswordError=true;
						console.log('Invalid username,password and password missmatch');
						respond.redirect('/registration');
                    
                    }else{
                    	if((userdata.unic.length != 10) && (userdata.uname.length < 6)){
							request.session.errors=true;
							nicError=true;
							usernameError=true;
							console.log('Invalid nic and username');
							respond.redirect('/registration');
		                }else if((userdata.uname.length < 6) && (userdata.upword.length < 8)){
		                	request.session.errors=true;
							usernameError=true;
							passwordError=true;
							console.log('Invalid username and password');
							respond.redirect('/registration');
		                }else if((userdata.uname.length < 6) && (userdata.upword != userdata.upconfirm)){
							request.session.errors=true;
							usernameError=true;
							confirmPasswordError=true;
							console.log('Invalid username and password missmatch');
							respond.redirect('/registration');
						}else if((userdata.upword.length < 8) && (userdata.upword != userdata.upconfirm)){
							request.session.errors=true;
							passwordError=true;
							confirmPasswordError=true;
							console.log('Invalid password and password missmatch');
							respond.redirect('/registration');	
                        }else{
	                        	if(userdata.unic.length != 10){
									request.session.errors=true;
									nicError=true;
									console.log('Invalid nic');
									respond.redirect('/registration');
							    
							    }else if(userdata.uname.length < 6){
							    	request.session.errors=true;
							    	usernameError=true;
							    	console.log('Invalid username');
									respond.redirect('/registration');

							    }else if(userdata.upword.length < 8){
							        request.session.errors=true;
							        passwordError=true;
							        console.log('Invalid password');
									respond.redirect('/registration');

							    }else if(userdata.upword != userdata.upconfirm){
							        request.session.errors=true;
							        confirmPasswordError=true;
							        console.log('Password mismatch');
									respond.redirect('/registration');
						    
								}

                        }
                    }
                }       
                
		}		

	}			
				
						
});

module.exports =router;