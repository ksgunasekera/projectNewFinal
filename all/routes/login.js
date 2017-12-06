var express=require('express');
var router=express.Router();
var connection=require('../modules/dbConnection');


router.get('/',(request,respond,next)=>{
	respond.render('login',{errors:request.session.errors});
	request.session.errors=null;
});
router.post('/login',(request,respond,next)=>{
    
    const userdata = {

		uname:request.body.username,
		pword:request.body.password

	};
 
	if((userdata.uname=='') || (userdata.pword=='')){
		request.session.errors=true;
		console.log('Invalid login');
		respond.redirect('/');
			
	}
	else{
		var sql="select * from users where username = "+connection.escape(userdata.uname)+" and password = "+connection.escape(userdata.pword);
		connection.query(sql,(error,results,fields)=>{
				if (error) {
					request.session.errors=true;
					console.log(error);
					respond.redirect('/');
					
				}
				if(results.length==0) {
					request.session.errors=true;
					console.log('Invalid user');
					respond.redirect('/');

				}else{
					request.session.errors=false;
					console.log('Valid user : Welcome '+results[0].username);
					respond.redirect('/');

				}
		});
	}

});


module.exports =router;
