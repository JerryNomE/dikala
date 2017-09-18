$(document).ready(function() {
	/*姓名字体大小*/
	$('#name').css('font-size',function(){
		var max_fontSize = parseInt($('#name').css('font-size'));
		var name_width   = $('#name').width();
		var str          = $('#name').text();
		var L = 0.5;
		for(var i in str){
		    L+=(str.charCodeAt(i)>255)?1:0.5;
		}
		var fontSize = name_width / L;
		return fontSize<max_fontSize?fontSize:max_fontSize;
	});

	/*进度条居中*/
	middlen($('.aim'));
	// middlen($('.triangle'));

	/* 选择模式 */
	$('#show_mode').bind('click', function() {
		showPopup($('#modes'));
	});

	$('.mode').css('margin-top', function() {
		var l = $(this).height();
		var h = $(window).height();
		return (h - 2 * l) / 3;
	});

	// 打卡具体状况
	var details_num = $(".details").length;
	var detailsShow = [];
	var detailsHeight = [];
	for (var i = 0; i < details_num; i++) {
		detailsShow.push(false);
		detailsHeight.push($('.details:eq('+i+')').height());
		$('.details:eq('+i+')').height(0);
	}
	//把内容收起来
	setTimeout(function (argument) {
		$('.details').css('display','block');
	}, 500);
	//点击效果
	$('.status').bind('click', function() {
		var index = $(this).index('.status');
		if (detailsShow[index]) {// 已经按出来了
			$('.details:eq('+index+')').height(0);
			$('.triangle:eq('+index+')').css({
				'transform'         : 'rotate(0deg)',
				'-moz-transform'    : 'rotate(0deg)',
				'-webkit-transform' : 'rotate(0deg)',
				'-o-transform'      : 'rotate(0deg)'
			});
			detailsShow[index] = false;
		}
		else{
			$('.details:eq('+index+')').height(detailsHeight[index]);
			$('.triangle:eq('+index+')').css({
				'transform'         : 'rotate(90deg)',
				'-moz-transform'    : 'rotate(90deg)',
				'-webkit-transform' : 'rotate(90deg)',
				'-o-transform'      : 'rotate(90deg)'
			});
			detailsShow[index] = true;
		}
	});
});