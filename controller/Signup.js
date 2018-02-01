 const User = require("../models/User");
 
 module.exports = {
	 //注册
   tosignup: async(ctx,next)　=> {
	  const id = ctx.params.id;   //！！！ 如果登录的用户则不能注册,主页渲染要添加
	  
	  //渲染的话 加一个if判断句把。。。

	  await ctx.render("signup")
    },
  
  signup: async(ctx, next) => {            
    let params = ctx.request.body    //从客户端获取到的参数 ,session 为null？
	
     let statu = await User.findOne({username:params.username})
	 
	 if(statu){
		 console.log(statu);
	 }
	 
	 else{
		 let tUser = new User({
			 username:params.username,
			 password:params.password,
			 session:params.sessionID,
			 email:params.email,
		 }) 
		 
		 await tUser.save();
		 await ctx.redirect('/')
	 }
   }
 }