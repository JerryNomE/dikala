var unfinished = function(){
	alert("本功能尚未完成，敬请期待");
	return false;
}

var show_popD = function (id_name) {
	$('#'+id_name).removeClass('disappear');
}
var show_popF = function (id_name) {
	$('#'+id_name).fadeIn(200);	
}

$(document).ready(function() {
	var hasDisappear = [];
	for (var i = $('.pop_up').length - 1; i >= 0; i--) {
		// 有disappear的弹窗：里面有inline-block或者是要秒出现的
		if($('.pop_up:eq('+i+')').hasClass('disappear')){
			hasDisappear[i] = true;
		}
		else{
			hasDisappear[i] = false;
		}
	}
	$('.pop_bg').click(function() {
		var popIndex = $('.pop_bg').index(this);
		if (hasDisappear[popIndex]) {
			$('.pop_up:eq('+popIndex+')').addClass('disappear');
		}
		else{
			$('.pop_up:eq('+popIndex+')').fadeOut(200);
		}
	});
	
	//服务条款弹窗相关
	$('#clause').click(function() {
		show_popF('pop_clause');
		return false;
	});
	$('#pop_read_btn').click(function() {
		$('#pop_clause').fadeOut(200);
		$('#checkboxInput').prop("checked",'true').change();
	});	
});