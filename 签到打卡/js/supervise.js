// 返回菜单
var backto_menu = function () {
	$(".parameter").fadeOut(0);
	$("#btns3").fadeIn(200);
}

var set = [false,false,false];
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

// 计算月有多少天
var getCountDays = function (mon) {
    var curDate = new Date();
    /* 获取当前月份 */
    var curMonth = curDate.getMonth();
    if(mon < curMonth)curDate.setYear(curDate.getYear()+1);
   	/*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
   	curDate.setMonth(mon);
   	/* 将日期设置为0, 有了具体日期，就会返回天数 */
   	curDate.setDate(0);
   	/* 返回当月的天数 */
   	return curDate.getDate();
}

var changeSelected = function (){
	// 默认开始日期  
    var curDate = new Date();
    curDate.setDate(curDate.getDate());
    $("#start_month option").eq(curDate.getMonth()).attr("selected",true);
    $("#start_dat option").eq(curDate.getDate()).attr("selected",true);
    //默认结束日期
    var endDate = new Date(curDate);
    endDate.setDate(curDate.getDate()+7);
    $("#end_month option").eq(endDate.getMonth()).attr("selected",true);
    $("#end_dat option").eq(endDate.getDate()).attr("selected",true);
}

$(document).ready(function() {
	/*按下确认条款时的效果*/
	$("#checkboxInput").change(function(){
		if ($("#checkboxInput").prop('checked')) {	
			$("#blocking").fadeOut(200);
			$("#cover").fadeOut(0);
		}
		else{
			$("#blocking").fadeIn(200);	
			$("#cover").fadeIn(0);
		}
	});


	$("#type_btn").click(function(){
		$("#btns3").fadeOut(0);
		$("#type_parameter").fadeIn(200);
	});
	$("#time_btn").click(function(){
		$("#btns3").fadeOut(0);
		$("#time_parameter").fadeIn(200);
	});
	$("#cash_btn").click(function(){
		$("#btns3").fadeOut(0);
		$("#cash_parameter").fadeIn(200);
	});
	$(".back").click(function(){
		backto_menu();
	});

	// 打卡类型按钮
	$("#type_confirm").click(function(){
		set[0] = true;
		$(".stat:eq(0)").text("已设置");
		$(".stat:eq(0)").addClass("set");
		$(".stat:eq(0)").removeClass("unset");

		var type_text = $("#type_input").val();

		$(".type_text:eq(0)").css("font-size",
			(parseInt($(".type_text").css('width'))/type_text.length>parseInt($(".type_text").css('font-size'))?$(".type_text").css('font-size'):parseInt($(".type_text").css('width') )/type_text.length));

		$(".type_text:eq(0)").text(type_text);
		$(".type_text:eq(0)").addClass("set");
		$(".type_text:eq(0)").removeClass("unset");
		$(".type_text:eq(0)").css("text-align","center");
	});	

	// 点进设置打卡时间后，按左上角确认
	$("#time_confirm").click(function(){
		set[1] = true;
		$(".stat:eq(1)").text("已设置");
		$(".stat:eq(1)").addClass("set");
		$(".stat:eq(1)").removeClass("unset");

		var time_info = $("#start_month").val() + "." +
						$("#start_dat").val() + "-" +
						$("#end_month").val() + "." +
						$("#end_dat").val() + "," + 
						$("#times").val() + "/";
		switch($("#frequence").val()){
			case "day" : time_info += "天";break;
			case "wee" : time_info += "周";break;
			case "mon" : time_info += "月";break;
		}

		if($("#times").val()>0){
			$(".time_text").text(time_info);
			$(".time_text").addClass("time_set");
			$(".time_text").css("text-align","center");
			$(".time_text").css("font-size",".2rem");
			$(".time_text").removeClass("unset");
		}
		else{
			alert("请输入次数");
			$("#btns3").fadeOut(0);
			$("#time_parameter").fadeIn(0);
		}
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



	// 有关日期时间的函数
	var fre = "day";
	// 起始月
	$("#start_month").change(function() {
		var days = getCountDays($("#start_month").val());
		var size = $("#start_dat option").size();
		var dif  = days-size;
		if(dif<0){
			for(var i = 0;i < -dif;i++){
				$("#start_dat option:last").remove();
			}
		}
		else{
			for(var i = 0;i < dif;i++){
				var value = size + 1 + i;
				$("#start_dat").append("<option value=\""  + value + "\">" + value + "</option>"); 
			}				
		}
	});	
	// 起始日
	$("#start_dat").change(function() {
		if(fre=="mon"){
			$("#end_dat option:last").remove();
			var value = $(this).val();
			$("#end_dat").append("<option value=\""  + value + "\">" + value + "</option>"); 
		}
		else if(fre=="wee"){
			var start_month = $("#start_month").val();
			var start_date = $("#start_dat").val();
			var end_month = $("#end_month").val();
			var end_date = $("#end_dat").val();
		}
	});	


	//结束时间
	$("#end_month").click(function() {
		switch(fre){
			case "day":
				var days = getCountDays($("#end_month").val());
				var size = $("#end_dat option").size();
				var dif  = days-size;
				if(dif<0){
					for(var i = 0;i < -dif;i++){
						$("#end_dat option:last").remove();
					}
				}
				else{
					for(var i = 0;i < dif;i++){
						var value = size + 1 + i;
						$("#end_dat").append("<option value=\""  + value + "\">" + value + "</option>"); 
					}				
				}
				break;
			case "wee":
				var days = getCountDays($("#end_month").val());
				var size = $("#end_dat option").size();
				var dif  = days-size;
				if(dif<0){
					for(var i = 0;i < -dif;i++){
						$("#end_dat option:last").remove();
					}
				}
				else{
					for(var i = 0;i < dif;i++){
						var value = size + 1 + i;
						$("#end_dat").append("<option value=\""  + value + "\">" + value + "</option>"); 
					}				
				}				
				break;
			case "mon":
				var days = getCountDays($("#end_month").val());
				var ending = $("#start_dat").val();
				var value = (days > ending) ? ending : days;
				$("#end_dat").html("<option value=\""  + value + "\">" + value + "</option>");
				break;
		}
	});

	// 频率设置
	$("#frequence").change(function() {
		fre = $(this).val();
		if (fre=="wee") {

		}
		else if(fre=="mon"){
			var days = getCountDays($("#end_month").val());
			var ending = $("#start_dat").val();
			var value = (days > ending) ? ending : days;
			$("#end_dat").html("<option value=\""  + value + "\">" + value + "</option>");
		}
	});

	//点击跳弹窗
	$('.the_btn:eq(0)').click(function() {
		if(!allSet())return;
		if ($('#checkboxInput').is(':checked')){
			$('#pop_share').fadeIn(200);
		}
	});
});