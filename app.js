  const Koa = require('koa')
  const path = require('path')
  const bodyParser = require('koa-bodyparser')
  const ejs = require('koa-views')
  const app = new Koa()
  const session = require("koa-session-minimal");

  // 引入 koa-static
  const staticFiles = require('koa-static')

  //mongoose 连接 mongo
  const mongoose = require('mongoose');
  
  const router = require('./router')
	
   mongoose.connect('mongodb://localhost');
  // 指定 public目录为静态资源目录，用来存放 js css images 等
  app.use(staticFiles(path.resolve(__dirname, "./public")))
     .use(bodyParser())
	 .use(ejs(path.join(__dirname,'./views'),{extension:'ejs'}))
	 .use(session({ 
		 key:"qdacm",
		 cookie:{
			 domain:'localhost',
			 path:'/',
			 maxAge:60*60*7*24,
			 httpOnly:true,
			 overwrite:false
		 }
	 }))

  router(app)
  app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
  })