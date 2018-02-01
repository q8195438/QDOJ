const router = require('koa-router')()
const Home = require('./controller/home');
const HomeSignup = require("./controller/Signup");
const HomeSignin = require('./controller/Signin');
const HomeProblemlist = require('./controller/Problemlist');

module.exports = (app) => {
	router.get( '/', Home.index)
  
	//注册
	router.get('/tosignup', HomeSignup.tosignup);  
	router.post('/signup', HomeSignup.signup);	
  
	//登录
 
	router.get('/tosignin', HomeSignin.tosignin); 
	router.post('/signin', HomeSignin.signin);
  
	//题库
	router.get('/toproblemlist', HomeProblemlist.toproblemlist); 
	//router.post('/problemlist', HomeProblemlist.problemlist);
  
	app.use(router.routes())
		.use(router.allowedMethods())
}