const router = require('koa-router')()
const HomeController = require('./controller/home')
module.exports = (app) => {
  router.get( '/', HomeController.index)
  
  router.get('/tosignup', HomeController.tosignup);  //注册
  router.post('/signup', HomeController.signup);	
  //登录
  
  app.use(router.routes())
     .use(router.allowedMethods())
}