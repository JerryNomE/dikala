// 点击回到主菜单
var backto_menu = function (){
	$(".parameter").fadeOut(0);
	$("#3btn").fadeIn(200);
}

var timeOut;
var set = [false,false,false];

//搜索中...效果
var matching = function (i) {
	var point_num = 3;
	var text = '正在匹配';
	for(var j = i % (point_num+1);j > 0;j--){
		text += '.';
	}
	$('#pop_matching_stat').text(text);
	i++;
	timeOut = setTimeout("matching("+i+")", 400);
}

// 是否都设置了
var allSet = function () {
	for (var i = 0; i < 3; i++) {
		if (!set[i]) {
			alert('请选择'+$('.tips_tit:eq('+i+')').text());
			return false;
		}
	}
	return true;
}

$(document).ready(function(){
	var type_set = false;
	var time_set = false;
	var cash_set = false;
	var index    = 0;
	/*按下确认条款时的效果*/
	$("#checkboxInput").change(function(){
		if ($("#checkboxInput").prop('checked')) {
			$("#cover").fadeOut(0);
		}
		else{
			$("#cover").fadeIn(0);
		}
	});


	$("#type_btn").click(function(){
		$("#3btn").fadeOut(0);
		$("#type_parameter").fadeIn(200);
	});
	$("#time_btn").click(function(){
		if (type_set) {
			$("#3btn").fadeOut(0);
			$("#time_parameter").fadeIn(200);
		};
	});
	$("#cash_btn").click(function(){
		$("#3btn").fadeOut(0);
		$("#cash_parameter").fadeIn(200);
	});
	$(".back").click(function(){
		backto_menu();
	});

	// 打卡类型按钮
	$(".abled_btn").click(function(){
		set[0] = true;
		index = ($(this).index());

		// 更改当前类型
		$(".type_text").text($(this).text());
		$(".type_text").removeClass("unset");
		$(".type_text").addClass("set");
		$(".type_text").addClass("justify");
		type_set = true;

		// 可以设置时间
		$("#time_btn").removeClass("disabled");

		// 根据类型选择出现的选择
		$("#wak_line").css("display","none");
		$("#run_line").css("display","none");
		$("#lib_line").css("display","none");
		switch(index){
			case 0: $("#wak_line").css("display","block");break;
			case 1: $("#run_line").css("display","block");break;
			case 2: $("#lib_line").css("display","block");break;
		}

		// 已设置类型
		$(".stat:eq(0)").addClass("set");
		$(".stat:eq(0)").removeClass("unset");
		$(".stat:eq(0)").text("已设置");

		// 重设菜单时间选项
		time_set = false;
		$(".time_text:eq(0)").text("点击图标设置");
		$(".time_text:eq(1)").text("未设置");
		$(".time_text").addClass("unset");
		$(".time_text").removeClass("time_set");


		backto_menu();
	});

	// 点进设置打卡时间后，按左上角确认
	$("#time_confirm").click(function(){
		set[1] = true;

		$(".stat:eq(1)").text("已设置");
		$(".stat:eq(1)").addClass("set");
		$(".stat:eq(1)").removeClass("unset");

		var text = "";
		var br = "<br>";
		text += $("#start").find('option:selected').text() + "起，";
		text += br;
		switch(index){
			case 0://早起
				text += "每周" + $("#wake_time").find('option:selected').text() + "至目的地打卡";
				text += $("#wak_times").val() + "次";
				break;
			case 1://跑步
				text += "每周跑步" + $("#run_time").find('option:selected').text();
				break;
			case 2://泡馆
				text += "每周泡图书馆" + $("#lib_time").find('option:selected').text();
				break;
		}

		$(".time_text").html(text);
		$(".time_text").addClass("time_set");
		$(".time_text").css("text-align","center");
		$(".time_text").removeClass("unset");
	});

	// 点进设置承诺金后，按左上角确认
	$("#cash_confirm").click(function(){
		set[2] = true;

		$(".stat:eq(2)").text("已设置");
		$(".stat:eq(2)").addClass("set");
		$(".stat:eq(2)").removeClass("unset");

		$(".cash_text").text($("#cash").val()+"元");
		$(".cash_text").addClass("set");
		$(".cash_text").css("text-align","center");
		$(".cash_text").removeClass("unset");
	});


	//点击随机匹配
	$('#PK_random').click(function() {
		if(!allSet())return;
		$('#pop_matching').fadeIn(200);
		matching(0);
	});
	$('#pop_matching').children('.pop_bg').click(function(event) {
		clearTimeout(timeOut);
	});

	//好友监督
	$('#PK_friend').click(function() {
		if(!allSet())return;
		if ($('#checkboxInput').is(':checked')){
			$('#pop_share').fadeIn(200);
		}
	});

	//pk规则
	var rule_height = $('#pop_PKrule_img').height();
	var tot_height = $(window).height();
	$('#pop_PKrule_img').css('margin-top', (tot_height-rule_height)/2);
	$('#pop_PKrule_img').click(function() {
		$('#pop_PKrule').fadeOut(200);
	});	
	$('#q').click(function() {
		$('#pop_PKrule').fadeIn(200);
	});
})