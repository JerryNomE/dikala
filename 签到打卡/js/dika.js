$(document).ready(function() {
	var today      = new Date();
	var today_day  = $('#today').text();
	var today_text = today.getFullYear()+'年'+(today.getMonth()+1)+'月'+today.getDate()+'日';
	switch(today.getDay()){
		case 0: today_day += '星期天';break;
		case 1: today_day += '星期一';break;
		case 2: today_day += '星期二';break;
		case 3: today_day += '星期三';break;
		case 4: today_day += '星期四';break;
		case 5: today_day += '星期五';break;
		case 6: today_day += '星期六';break;
	}
	$('#mainTitle').text(today_text);
	$('#today').text(today_day);
});


	
//4种状态：unjoined未加入 unchecked打卡 checking审核中 checked已完成 需要结合后台用js修改
//默认情况
var changeWake = function(i,time){
	var time           = arguments[1] ? arguments[1] : '打卡成功';
	var wake_stat_text = ['点击加入','未打卡','审核中',time];

	changeS(0,dika_stat[i],wake_stat_text[i]);
}
var changeLib = function(i,time){
	var time           = arguments[1] ? arguments[1] : '打卡成功';
	var wake_stat_text = ['点击加入','未打卡',time,'打卡成功'];

	changeS(1,dika_stat[i]+' right_btn',wake_stat_text[i]);
}
var changeRun = function(i){
	changeS(2,dika_stat[i],wake_stat_text[i]);
}
var changeWord = function(i){
	changeS(3,dika_stat[i]+' right_btn',wake_stat_text[i]);
}
var changeSupD = function(i){
	var wake_stat_text = ['暂无监督','点击查看','',''];

	changeS(4,dika_stat[i],wake_stat_text[i]);
}
var changeSupG = function(i){
	var wake_stat_text = ['暂无监督','点击查看','',''];

	changeS(5,dika_stat[i]+' right_btn',wake_stat_text[i]);
}
var changeS = function (i,stat,text) {
	$('.dika_btn:eq('+i+')').attr('class','dika_btn '+ stat);
	$('.stat:eq('+i+')').text(text);
}

