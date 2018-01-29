/*
 * 扩展工具包
 * 提供一些方便的小功能
 */

//为Date对象增加方法，返回形如2014-09-28的日期
Date.prototype.toNiceDate=function()
{
	return this.getFullYear()+'-'+(this.getMonth()+1)+'-'+this.getDate();
}
Date.prototype.toNiceTime=function()
{
	return this.toNiceDate()+' '+this.getHours()+':'+this.getMinutes()+':'+this.getSeconds();
}
String.prototype.toNiceTime=function()
{
	return this;
}
String.prototype.toRegexStr=function()
{
	return this.replace(/([\*\.\?\+\$\^\[\]\(\)\{\}\|\\\/])/g,"\\$1");
}
String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {  
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {  
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi": "g")), replaceWith);  
    } else {  
        return this.replace(reallyDo, replaceWith);  
    }  
}  
Number.prototype.ms2time=function()
{
	var ret='',x;
	var time=Math.floor(this/1000);
	x=Math.floor(time/60/60/24);
	if(x)
	{
		ret=x+' days ';
		time-=x*60*60*24;
	}
	ret+=Math.floor(time/3600)+':';
	time%=3600;
	ret+=Math.floor(time/60)+':'+time%60;
	return ret;
}
exports.query2rex=function(q)
{
	s=q.split(/\s/);
	for(var i=0;i<s.length;i++)
	{
		s[i]=s[i].toRegexStr();
	}
	return RegExp("("+s.join("|")+")+","i");
}
exports.setcookie=function(res,key,value,path)
{
	path=path||'/';
	res.cookie(key,value,{ maxAge: 1000*60*60*24*3650,httpOnly:true, path:path});
}
/*
 * 为express的app对象添加快捷路由方法
 * Usage:
 * toolkit.router(app,'./routes');
 * app.R('user').R('','index');
 * 等价于
 * app.use('/user',require('./routes/user'));
 * app.use('/',require('./routes/index'));
 */
exports.router=function(app,rPath)
{
	app.R=function(path,router)
	{
		if(!router)router=path;
		path='/'+path;
		router='/'+router;
		return this.use(path,require(rPath+router));
	};
	app.SR=function(path)
	{
		return this.use('/'+path,function(req,res){
			res.render(path);
		});
	}
}