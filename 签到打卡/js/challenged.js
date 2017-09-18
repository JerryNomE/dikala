$(document).ready(function() {
	$('.pop_bg').unbind();

	//pk规则
	var rule_height = $('#pop_PKrule_img').height();
	var tot_height = $(document).height();
	$('#pop_PKrule_img').css('margin-top', (tot_height-rule_height)/2);


	$('#pop_PKrule').click(function() {
		$('#pop_PKrule').fadeOut(200);
		$('#pop_challenge').fadeIn(200);
	});	


	$('#btn_flow').click(function() {
		$('#pop_challenge').fadeOut(200);
		$('#pop_PKrule').fadeIn(200);
	});
	$('#accept').click(function() {
		$('#pop_challenge').fadeOut(200);
		$('#pop_succeed').fadeIn(200);
	});	

	$(document).ready(function() {
		$('.name').text(name);
		$('#money').text(money);

		var html = '';
		start == 0?start='下周一':start='下个月';
		html += start+'起，';
		if(type==0){
			$('#type').text('早起，每天+1s');
			html += '工作日'+time+'前在<img src="../img/GPS_white.png">打卡';
		}
		else if(type==1){
			$('#type').text('泡馆，苟。。。');
			html += '每周泡馆打卡'+rate+'次';
		}
		else if(type==2){
			$('#type').text('跑步，当个香港记者');
			html += '每周跑步打卡'+rate+'次';
		}
		$('#condition').html(html);
	});
});
