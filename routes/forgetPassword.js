const express=require('express');
const router=express.Router();

router.get('/',(request,respond)=>{
	respond.render('forgetPassword');
	request.session.errors=null;

});
router.post('/forgetPassword/submit',(request,respond)=>{
	console.log(request.body.email);
});

module.exports =router;