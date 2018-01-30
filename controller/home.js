const HomeService = require('../service/home')
const userDb = require("../dbhelper/userDb");

module.exports = {
  index: async(ctx, next) => {
	
    await ctx.render("index");
  }
   
}
	
  

