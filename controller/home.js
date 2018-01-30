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
    let {email,sessionID,username,password} = ctx.request.body    //从客户端获取到的参数 ,session 为null？
	
    console.log(`${email} ${sessionID} ${username} ${password}`);
	if(email == null  || username == null || password == null){
		console.log("无输入");
	}
	else {  
		let  statu = await userDb.findUser(username);
	  
			if(statu){
			   console.log("用户已存在")
			   }
			 else{
				
				let tUser = new User({
				username1:username,
				password1:password,
				session1:sessionID,
				email1:email,
				});
				
				await tUser.save()

				await ctx.redirect("/",{title:username}) 
			}

		 }	
   }
   
}
	
  

