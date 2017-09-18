$(document).ready(function() {
	/*-----进度条-----*/
	var wake_plan = 5/*这里放早起目的进度的数值*/;
	var wake_present = 4/*这里放早起当前进度的数值*/*100;
	var wake_rate = wake_present/wake_plan;

	var run_plan = 3/*这里放跑步目的进度的数值*/;
	var run_present = 1/*这里放跑步当前进度的数值*/*100;
	var run_rate = run_present/run_plan;

	var wake = document.getElementById('wake');
	var run = document.getElementById('run');

	wake.style.width = wake_rate + "%";
	run.style.width = run_rate + "%";

	$('.pop_btns').css('margin-top',($('.pop_up').height()-$('.pop_btns').height())/2);

	/*名字长度*/
	var max_font_size = $('.name:eq(0)').css('font-size');
	var name_width = $('.name:eq(0)').css('width');
	var name_text_len = $('.name:eq(0)').text().length*1.2;

	var name_font_size = 
		(parseInt(name_width)/name_text_len) < parseInt(max_font_size)?
		parseInt(name_width)/name_text_len:
		max_font_size;

	$('.name:eq(0)').css("font-size",name_font_size);
});

/*-----切换状态-----*/
var toggle_stat = function (){
	var btn = document.getElementById('toggle');
	var stat1 = document.getElementById('schedule').style.display;
	var stat2 = document.getElementById('supervisor').style.display;

	if(stat1 == 'none'){
		document.getElementById('schedule').style.display = 'block';
		document.getElementById('supervisor').style.display = 'none';
		btn.innerText = "查看我的监督 >";
	}
	else{
		document.getElementById('schedule').style.display = 'none';
		document.getElementById('supervisor').style.display = 'block';
		btn.innerText = "查看我的滴卡 >";
	}
}

//弹窗部分
$(document).ready(function() {
	$('#mode').click(function() {
		$('#pop_choose_mode').fadeIn(200);
	});
});