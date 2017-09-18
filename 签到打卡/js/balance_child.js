$(document).ready(function() {
	var page = 1;
	var theme = $('.tit:eq(0)').text();
	$('.super_btn:eq(0)').click(function() {
		if(!($('#num').val()>0)){
			alert('请正确输入金额');
		}
		else{
			if (page==1) {
				page = 2;
				$('#page1').fadeToggle(0);
				$('#page2').fadeToggle(200);
				$('#cash_text').text('已提交');
				$('.btn_inner:eq(0)').text('再次'+theme);
			}
			else{
				window.location.reload();
			}
		}
	});
});	