const HomeService = require('../service/home')
const User = require('../models/User')
const userDb = require("../dbhelper/userDb");
module.exports = {
  index: async(ctx, next) => {
	
    await ctx.render("index", { title:"NODEJS"})
  },

  tosignup: async(ctx,next)　=> {
	  const id = ctx.params.id;

	  await ctx.render("signup",{title:"NODEJS"})
  },
  
  signup: async(ctx, next) => {            
    let params = ctx.request.body    //从客户端获取到的参数 ,session 为null？
	
     let statu = await User.find({username:params.username})
	 
	 if(statu.length != 0){
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
	
  

