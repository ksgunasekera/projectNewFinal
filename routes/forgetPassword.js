const express=require('express');
const router=express.Router();

router.get('/',(request,respond)=>{
	respond.render('forgetPassword');

});

module.exports=router;