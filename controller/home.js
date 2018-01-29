const HomeService = require('../service/home')
const User = require('../models/User')
module.exports = {
  index: async(ctx, next) => {
	 
	
	  
    await ctx.render("index", { title:"NODEJS"})
  },

  tosignup: async(ctx,next)　=> {
	  const id = ctx.params.id;
	  console.log(id);
	  
	  await ctx.render("signup",{title:"NODEJS"})
  },
  
  signup: async(ctx, next) => {            
    let params = ctx.request.body
	
	let tUser = new User({
		id:params.id,
		pwd:params.pwd
	});
  
     await tUser.save(); 

       await ctx.redirect("/",{title:params.id});	 
    }
  
}

