const mysql=require('mysql');
const verifyUser=require('../controllers/verifyPatient');
var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'hospitalclinic'
});
//patient json file
const enterPatient=(patient)=>{

}

//staff json file
const addStaff=(staff)=>{

}
var getUserLoginInfo=(user)=>{
	pool.getConnection((error,connection)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Connected");
		}
		connection.ping((err)=>{
			if(err){
				console.log(err);
			}
			console.log('Connection responded to ping');
			var sql="select * from users where username = "+connection.escape(user.username);
			connection.query(sql,(error,results,fields)=>{
				if (error) {
					console.log(error);
				}
				if(results.length==0){
					verifyUser.invalidUser();
				}else{
					console.log(results[0].user_id);
					
					var userDB={
						user_Id:results[0].user_id,
						username:results[0].username,
						password:results[0].password,
						email:results[0].email,
						satus:0,
						registrationId:results[0].registrationId
					};
					console.log(userDB);
					verifyUser.verifyUser(userDB,user.password);
				}
			});

		});
	connection.release();
	});

}

module.exports.getUserLoginInfo=getUserLoginInfo;
module.exports.pool=pool;