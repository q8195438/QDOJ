const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({                                           //所有数据库的Schemma属性+1
	//lowername:{type:String,index: { unique: true, dropDups: true }},
	username1:String,
	password1:String,
	sessionID1:String,
	email1:{type:String,default:''},
	userPower1:{type:Number,default:0},//用户能力
	userGroup1:{type:Number,default:0},//用户组
	accesskey1:{type:String,default:''},
	motto1:{type:String,default:''},//个签
	submissions1:{type:Number,default:0},//通过个数
	accepted1:{type:Number,default:0},//ac个数
	submitted1:{type:Schema.Types.Mixed,default:{}},//提交次数
	lastLogin1:{type:Date,default:Date.now},//最后一次登录
	regDate1:{type:Date,default:Date.now},//注册日期
	rating1:{type:Number,default:1500},//战斗力
	hispasswd1:{type:Array,default:[]},//历史密码
	emailflg1:{type:Boolean,default:false},//邮箱标记
});

const User = mongoose.model('User',UserSchema);

module.exports = User;