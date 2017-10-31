const db=require('./dbConnection');

const validate=(data)=>{
	db.pool.getConnection((error,connection)=>{
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
			var sql="select * from users where username = "+connection.escape(data.username)+" and password = "+connection.escape(data.password);
			connection.query(sql,(error,results,fields)=>{
				if (error) {
					console.log(error);
				}
				if(results.length==0){
					console.log('Invalid user');
				}else{
					console.log('Valid user : Welcome '+results[0].username);

				}
			});
		});
	connection.release();
	});

}
const check=(data)=>{
	if(data.username==''){
		console.log('Enter username');

	}
	if(data.password==''){
		console.log('Enter password');
	}
	if(data.username!=''&&data.password!=''){
		validate(data);
	}
}

module.exports.check=check;

