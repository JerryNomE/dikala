var init = function (){
	// console.log($('#inner_header_btns').offset().top);
	$('.line').width($('.left:eq(0)').width());
}

$(document).ready(function() {
	//page0 分类 1推荐 type0早 1跑 2馆
	var page = 0;
	var type = 0;
	var paging = function(){
		$('.container').addClass('disappear');
		$('#page'+page+type).removeClass('disappear');
	};
	$('.first').children('div').click(function() {
		page = $(this).index();
		// page = page%2;
		$('.first_lines').children('.line').removeClass('set');
		$('#inner_header_btns').children('.first_lines').children('.line:eq('+page+')').addClass('set');
		$('#fixed_header_btns').children('.first_lines').children('.line:eq('+page+')').addClass('set');
		paging();
	});
	$('.second').children('div').click(function() {
		type = $(this).index();
		// type = type%3;
		$('.second').children('div').removeClass('set');
		$('#inner_header_btns').children('.second').children('div:eq('+type+')').addClass('set');
		$('#fixed_header_btns').children('.second').children('div:eq('+type+')').addClass('set');
		paging();
	});

	//头顶选项一直显示
	$(window).scroll(function() {
		if ($('#inner_header_btns').offset().top < $(window).scrollTop()) {
			$('#fixed_header_btns').removeClass('disappear');
		}
		else{
			$('#fixed_header_btns').addClass('disappear');
		}
	});
});

var activities_init = function(activities,type) {
	/*
	 * activities是所有活动的数组
	 *
	 * type表示是否新手模式，默认false
	 */
	var lefttop_img = arguments[1] ? 'left_top_triangle_newbee.png' : 'left_top_triangle.png';
	for(i = 0,len = activities.length;i < len;i++){
		var activity = activities[i];
		// var new_activity = $('.activity');
		var new_activity = $('<div class="activity"></div>');

		var page       = activity[0];//第几页
		var img        = activity[1];//图片链接
		var title      = activity[2];//活动标题
		var start_date = activity[3];//起始时间
		var end_date   = activity[4];//结束时间
		var target     = activity[5];//目标
		var commitment = activity[6];//承诺金
		var joined     = activity[7];//报名人数

		//添加装饰用图片
		new_activity.append(
		'<img src="../img/activities/'+lefttop_img+'" class="decoration_lt">',
		'<img src="../img/activities/right_bottom_triangle.png" class="decoration_rb">');

		//添加左侧图片
		new_activity.append('<img src="../img/activities/'+img+'" class="illustration">');

		//设置右侧信息
		var info = $('<div class="info"></div>');
		var details = $('<div class="details"></div>');
		var line = '<div class="info_line"></div>';
			//标题
		info.append('<div class="tit">'+title+'</div>');

		for(j = 0;j < 4;j++){
			details.append(line);
		}
			//周期
		details.children('div:eq(0)').text('周期：'+start_date+' - '+end_date);
			//目标
		details.children('div:eq(1)').text('目标：'+target);
			//承诺金
		details.children('div:eq(2)').text('承诺金：'+commitment+'元');
			//报名人数
		details.children('div:eq(3)').text('已报名人数：'+joined);

		info.append(details);
		new_activity.append(info);
		$('#page'+page).append(new_activity);
	}
}