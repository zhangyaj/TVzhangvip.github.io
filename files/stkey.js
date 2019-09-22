console.log('★★★欢迎使用石头云免费解析★★★');
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
		console.log('★★★您当前是使用移动设备访问石头云免费解析★★★将会出现广告★★★');
sj_w();
		document.writeln("<script type='text/javascript' charset='UTF-8' async src='\/\/dg.cweclub.cn\/coding\/4121'><\/script>");
    }
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; 
if(isAndroid){
//console.log('★★★当前使用安卓设备访问★★★');
//stats.innerHTML='<marquee>有只小青蛙它很酷,能够让你看电影更简单！</marquee>'
document.getElementById("stats").innerHTML='<marquee>这只青蛙很酷,它能让你让看电影更简单！你想看的都在这里，陪伴欢乐好时光，永久免费哦！</marquee><div id="gbi">X</div>'

}
$("#gbi").on("click",function(){
document.getElementById("stats").style.display = "none";
console.log('★★★关闭自家推广★★★');
});
$("#stats").on("click",function(){
//document.getElementById("stats").style.display = "none";
console.log('★★★点击自家广告★★★');
is_weixn();
});
function is_weixn(){
	//console.log('★★★当前使用普通浏览器访问★★★');
var ua = navigator.userAgent.toLowerCase();
if(ua.match(/MicroMessenger/i)=='micromessenger') {
	console.log('★★★当前使用微信访问★★★');
	location.href='http://t.cn/AiEwh6l6';
	}else if (ua.match(/QQ/i) == "qq")
	{
	console.log('★★★当前使用QQ访问★★★');
	location.href='http://t.cn/AiEwh6l6';
    }else{
	console.log('★★★当前使用普通浏览器访问★★★');
	location.href='http://app.3wap.cc/frogvideoapp_0906005218.apk';
}
}  
function sj_w(){
	//随机底部广告
var string = "dg.cweclub.cn/coding/4112";   //原始数据
var array = string.split(",");           //转化为数组
var value = array[Math.round(Math.random()*(array.length-1))];  //随机抽取一个值
//alert(value);
var jjd='<script type=\'text/javascript\' src=\'//'+value+'\'><\/script>';
console.log(jjd);
document.writeln(jjd);
}