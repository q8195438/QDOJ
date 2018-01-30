const User = require("../models/User");

module.exports = {
	findUser : (username) => {
        return new Promise((resolve, reject) => {
           User.findOne({ username }, (err, doc) => {
                if(err){
                     reject(err);
                 }
                  resolve(doc);
		        })
	)}},
	
	findAllUsers : () => {
	return new Promise((resolve, reject) => {
		User.find({}, (err, doc) => {
					if(err){
						reject(err);
					}
				      resolve(doc);
						   });
					     })
	                   },
	
	
	delUser :(id) => {
		return new Promise(( resolve, reject) => {
			User.findOneAndRemove({ _id: id }, err => {
				if(err){
					reject(err);
				}
				console.log('删除用户成功');
				resolve();
			});
				})
              }
	
}
