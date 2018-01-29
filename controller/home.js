const HomeService = require('../service/home')
const User = require('../models/User')
module.exports = {
  index: async(ctx, next) => {
	 
	
	  
    await ctx.render("index", { title:"NODEJS"})
  },

  tosignup: async(ctx,next)　=> {
	  const id = ctx.params.id;
	 // console.log(id);
	    //console.log("11111111111111111111111111111111111111111111");
	  await ctx.render("signup",{title:"NODEJS"})
  },
  
  signup: async(ctx, next) => {            
    let params = ctx.request.body
	
	 // console.log(params.email+"11111121111111111111111111111");
	let tUser = new User({
		username:params.username,
		password:params.password,
		session:params.sessionID,
		email:params.email,
		
	});
//  console.log(params.email+"1111111111111111131111111111111111");
     await tUser.save(); 

       await ctx.redirect("/",{title:params.username});	 
    }
  
}

