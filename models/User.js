const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({                                     
	//lowername:{type:String,index: { unique: true, dropDups: true }},
	username:String,
	password:String,
	sessionID:String,
	email:{type:String,default:''},
	userPower:{type:Number,default:0},//用户能力
	userGroup:{type:Number,default:0},//用户组
	accesskey:{type:String,default:''},
	motto:{type:String,default:''},//个签
	submissions:{type:Number,default:0},//通过个数
	accepted:{type:Number,default:0},//ac个数
	submitted:{type:Schema.Types.Mixed,default:{}},//提交次数
	lastLogin:{type:Date,default:Date.now},//最后一次登录
	regDate:{type:Date,default:Date.now},//注册日期
	rating:{type:Number,default:1500},//战斗力
	hispasswd:{type:Array,default:[]},//历史密码
	emailflg:{type:Boolean,default:false},//邮箱标记
});

const User = mongoose.model('User',UserSchema);

module.exports = User;