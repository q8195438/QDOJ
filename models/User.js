const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id:String,
	pwd:String
});

const User = mongoose.model('User',UserSchema);

module.exports = User;