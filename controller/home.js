const HomeService = require('../service/home')
const User = require('../models/User')
const userDb = require("../dbhelper/userDb");
module.exports = {
  index: async(ctx, next) => {
	
    await ctx.render("index")
  },

  tosignup: async(ctx,next)　=> {
	  const id = ctx.params.id;

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
   },
   
   //登录
   tosignin: async(ctx,next)　=> {

	  await ctx.render("signin")
	  
	},
  
    signin: async(ctx, next) => {            
    let params = ctx.request.body;
	 
	let statu = await User.findOne({username:params.username});
	
		if(statu){
			console.log(statu);
		   console.log(statu.password);
		   console.log(params.password);
		   
		   if(statu.password == params.password){
			   console.log("登录成功");
			   
			   await ctx.redirect("/");
		   }
		   else{
			   console.log("不能登录成功");
			   await ctx.render("signin")
		   }
			
		}
	   else{
		   
		   console.log("未注册")
		   
	   }
	 
	}
   
   
   
}
	
  

