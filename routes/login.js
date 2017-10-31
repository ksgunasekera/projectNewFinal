const express=require('express');
const router=express.Router();

router.get('/',(request,respond)=>{
	respond.render('login',{error:false});
});
router.post('/login',(request,respond)=>{
	const data=request.body;
	console.log(data.username);
	console.log(data.password);
	if((data.username==""&&data.password=="")||data.username===""||data.password===""){
		respond.render('login',{error:true,message:"Invalid login"});
		respond.redirect('/')
	}
});

module.exports =router;