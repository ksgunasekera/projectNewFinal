const express=require('express');
const router=express.Router();

router.get('/',(request,respond)=>{
	respond.render('login',{success:true});
});
router.post('/login',(request,respond)=>{
	const data=request.body;
	console.log(data.username);
	console.log(data.password);
	if((data.username==""&&data.password=="")||data.username===""||data.password===""){
		
		respond.redirect('/');
		respond.render('login',{sucess:false});
	}
});

module.exports =router;