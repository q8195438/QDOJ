const User = require('../models/User')

module.exports = {
  
	toproblemlist: async(ctx,next)　=> {

   
	  await ctx.render("problemlist")
	},

  }
	
