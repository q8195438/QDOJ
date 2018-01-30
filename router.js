const router = require('koa-router')()
const Home = require('./controller/home');
const HomeSignup = require("./controller/Signup");
const HomeSignin = require('./controller/Signin');

module.exports = (app) => {
  router.get( '/', Home.index)
  
  //注册
  router.get('/tosignup', HomeSignup.tosignup);  
  router.post('/signup', HomeSignup.signup);	
  
  //登录
 
  router.get('/tosignin', HomeSignin.tosignin); 
  router.post('/signin', HomeSignin.signin);
  
  
  app.use(router.routes())
     .use(router.allowedMethods())
}