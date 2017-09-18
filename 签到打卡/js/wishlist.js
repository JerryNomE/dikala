var init = function (){
	/*
	 * box内容居中
	 */
	var  num_of_box = $(".box").length;
	for (var i = 0; i < num_of_box; i++) {
		var innerheight = $(".aim:eq("+i+")").height() + $(".wish:eq("+i+")").height();
		var height = $(".box:eq("+i+")").children('.info').height();
		if (innerheight < height) {	
			$(".box:eq("+i+")").children('.info').css('padding-top',(height - innerheight)/2);
		}
	}

	/*
	 * 下划线至少1px
	 */
	if (parseInt($('.title').css('border-width'))<1) {
		$('.title').css('border-width','1px');
		$('.input_box').css('border-width','1px');
		$('.target_btn').css('border-width','1px');
	}

	/*
	 * 愿望只有2行
	 */
	// var target_btn = $('.target_btn');
	// var target_btn_height = parseInt(target_btn.height()) + parseInt(target_btn.css('padding-top')) * 2 + parseInt(target_btn.css('border-width')) * 2 + parseInt(target_btn.css('margin-top'));
	// $('.target_btns').css('height',target_btn_height * 2 + 1);
}

$(document).ready(function() {
	$('#new').click(function() {
		$('#page1').fadeOut(0);
		$('#page2').fadeIn(200);
	});
	//这里写提交心愿的逻辑
	$('#submit').click(function() {
		if ($('#award').val()=='') {
			alert("请输入心愿");
			return;
		}
		if (!($('#amount').val()>=0) || $('#amount').val()=='') {
			alert("请输入目标金额");
			return;
		}
		$('#page2').fadeOut(0);
		$('#page1').fadeIn(200);
	});
	//上面写提交心愿的逻辑，里面内容替换，现在只是判断输入合法和回到原来页面而已
	
	$('.target_btn').click(function() {
		$('#award').val($(this).text());
	});
});