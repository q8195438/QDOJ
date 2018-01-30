const User = require('../models/User')

module.exports = {
	
	 //登录
   tosignin: async(ctx,next)　=> {                           
      if(ctx.session.user){
		  await ctx.redirect('/');
		  ctx.body = {
			  status:'已登录',
			  session:ctx.session.user
	      }
	  }
	    else{
	    await ctx.render("signin")
		}
	},
  
    signin: async(ctx, next) => {                          //添加了session登录验证     
    let params = ctx.request.body;
	 
	let statu = await User.findOne({username:params.username});
	
	 
	 
		if(statu){
			
		   if(statu.password == params.password){
			   console.log("登录成功");
			  let {username,password} = statu;
			  
			   ctx.session.user = {
				    username,
					password
			   };
			   
			   ctx.body ='登录成功，请访问 GET/查看session信息'
			   await ctx.redirect("/");
		   }
		   else{
			   ctx.body = '密码不正确';
			   console.log("不能登录成功");
			   await ctx.render("signin")
		   }
			
		}
	   else{
		   ctx.body = '用户未注册';
		   console.log("未注册")
		   
	   }
	 
	}
	  
	  
}