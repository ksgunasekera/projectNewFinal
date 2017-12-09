const db=require('../modules/dbconnection');
const express=require('express');
const router=express.Router();
const loginRoute=require('../routes/login');
const bcrypt=require('bcrypt');
const saltRound=10;

const login=(user)=>{
	
	var userDB=db.getUserLoginInfo(user);
	
	
}

const verifyUser=(user,password)=>{
	
	if(bcrypt.compareSync(password,user.password)){
		if (user.email==null) {
			console.log("Not Confirmed");
			
			confirmUser();
		}else{
			console.log("valid User");
			}
	}else{
			console.log('Invalid User');
	}	
		
	
}


const confirmUser=()=>{
	require('../routes/registration')(router);
}

const invalidUser=()=>{
	router.use('/',loginRoute.router);

	//require('../routes/login')(router);
}
module.exports.confirmUser=confirmUser;
module.exports.invalidUser=invalidUser;
module.exports.verifyUser=verifyUser;
module.exports.login=login;