const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	//lowername:{type:String,index: { unique: true, dropDups: true }},
	username:String,
	password:String,
	sessionID:String,
	email:{type:String,default:''},
	userPower:{type:Number,default:0},
	userGroup:{type:Number,default:0},
	accesskey:{type:String,default:''},
	motto:{type:String,default:''},
	submissions:{type:Number,default:0},
	accepted:{type:Number,default:0},
	submitted:{type:Schema.Types.Mixed,default:{}},
	lastLogin:{type:Date,default:Date.now},
	regDate:{type:Date,default:Date.now},
	rating:{type:Number,default:1500},
	hispasswd:{type:Array,default:[]},
	emailflg:{type:Boolean,default:false},
});

const User = mongoose.model('User',UserSchema);

module.exports = User;