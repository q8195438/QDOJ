const router = require('koa-router')()
const HomeController = require('./controller/home')
module.exports = (app) => {
  router.get( '/', HomeController.index)
  
  //注册
  router.get('/tosignup', HomeController.tosignup);  
  router.post('/signup', HomeController.signup);	
  
  //登录
 
  router.get('/tosignin', HomeController.tosignin); 
  router.post('/signin', HomeController.signin);
  
  
  app.use(router.routes())
     .use(router.allowedMethods())
}