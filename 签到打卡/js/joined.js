$(document).ready(function() {
	//名字大小
	var max_font_size = $('.name:eq(0)').css('font-size');
	var name_width = $('.name:eq(0)').css('width');
	var name_text_len = $('.name:eq(0)').text().length*1.2;

	var name_font_size = 
		(parseInt(name_width)/name_text_len) < parseInt(max_font_size)?
		parseInt(name_width)/name_text_len:
		max_font_size;

	$('.name:eq(0)').css("font-size",name_font_size);

	//打卡状况
	//早起
	if (wak_join) {
		plan_info('wak',wak);
	}
	else{
		$('#wak_plan').hide(0);
	}
	//跑步
	if (run_join) {
		plan_info('run',run);
	}
	else{
		$('#run_plan').hide(0);
	}
	//泡馆
	if (lib_join) {
		plan_info('lib',lib);
	}
	else{
		$('#lib_plan').hide(0);
	}
});

var plan_info = function(id,info){
	$('#'+id+'_bar').width((info[1]/info[0]*100)+'%');
	$('#'+id+'_end').text(info[2]+'-'+info[3]+'-'+info[4]);
	$('#'+id+'_money').text('￥'+info[5]);
	$('#'+id+'_time').text(info[6]);//for wak
	$('#'+id+'_aim').text(info[6]+'km');//for run
};