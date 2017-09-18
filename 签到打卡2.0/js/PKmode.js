// 设置.select下子元素的透明度
var setOpacity = function (node,guide,edge) {
	var childTop,distance;
	node.children().css({
		'opacity': function () {
			childTop = $(this).offset().top;
			distance = Math.abs(guide - childTop);
			return 1 - distance/edge;
		}
	});
	node.children().attr('class', function (argument) {
		childTop = $(this).offset().top;
		distance = Math.abs(guide - childTop);
		return distance<$(this).get(0).getBoundingClientRect().height/2 ? "option checked" : "option"
	});
}

// 随机匹配PK特效
var matching = function (i) {
	// 图片闪啊闪
	if (i%2==0) {
		$('#pop_img').css('opacity', function () {
			return i%4==0 ? 1 : 0.5;
		});
	}
	// 正在匹配...
	var point_num = 3;
	var text = '正在匹配';
	for(var j = i % (point_num+1);j > 0;j--){
		text += '.';
	}
	$('#pop_matching_stat').text(text);

	timeOut = setTimeout("matching("+(++i)+")", 400);
}

// 拖拽时的事件
var dragEvent = function (cursor,height,top,node,guide,edge) {
	// 当前光标位置
	var Y     = event.clientY || event.targetTouches[0].pageY;
	// 拖动距离
	var move  = Y - cursor.y;

	// top改到多少
	var change = top+move>0 ? 0 : top+move<-height ? -height : top+move;
	node.css('top',change);

	//选项透明度
	setOpacity(node,guide,edge);
}

// 点击PK时用户选择的内容
var getChosen = function () {
	var chosen     = {};
	chosen.type    = $('#type').find('.checked').attr('value');
	chosen.time    = $('#time').find('.select[type="'+$('#type').find('.checked').attr('value')+'"]').find('.checked').text();
	chosen.deposit = $('#deposit').find('.checked').attr('value');
	return chosen;
};




// 切换打卡内容
// 	是第一次就把参数设成true，不是第一次就不要传参
var setChoice = function () {
	// 是否第一次，是的话就不设渐变时间
	var fadeTime = arguments[0] ? 0 : 500; 
	// 找到当前设置的打卡类型
	var type = $('#type').find('.checked').attr('value');

	$('#time').find('.select').fadeOut(fadeTime);
	$('#time').find('.select[type="'+type+'"]').fadeIn(fadeTime);
}

$(document).ready(function() {
	$('.select').each(function() {
		// 记录节点
		var node     = $(this);
		
		// 最大移动距离
		var height   = 0.0;
		var childNum = node.children().length;
		node.children().each(function(index) {
			if (index!=childNum-1){
				height += parseFloat($(this).get(0).getBoundingClientRect().height);
			}
		});
		// 参考线
		var guide = node.children('div:first-child').offset().top;
		// 边界
		var edge  = guide - node.parent().offset().top;
		// 初始化各种效果
		setOpacity(node,guide,edge);

		// 绑定拖拽事件
		$(this).bind('mousedown touchstart', function() {
			// 阻止冒泡
			event.stopPropagation();
			// 阻止默认事件（手机拖拽滚动、文本选择之类）
			event.preventDefault();

			// 初始化参数
			// 		获得当前鼠标位置
			var cursor = {
				'x' : event.clientX || event.targetTouches[0].pageX,
				'y' : event.clientY || event.targetTouches[0].pageY
			}
			
			// 		当前top
			var top = parseFloat(node.css('top'));
			// 		当前打卡类型
			var checked = $('#type').find('.checked').attr('value');

			// 执行拖拽事件，电脑端当光标离开了对象后就不继续执行mousemove
			$(window).bind('mousemove touchmove', function() {
				dragEvent(cursor,height,top,node,guide,edge);
			});
			// 不再拖拽，取消绑定mousemove和mouseup
			$(window).bind('mouseup touchend', function() {
				$(this).unbind('mousemove touchmove');
				$(this).unbind('mouseup touchend');

				// 新设置的打卡类型
				var check = $('#type').find('.checked').attr('value');
				if(node.index('.select')==0){// 拖动的是打卡类型
					if(check!=checked){// 前后2次选择不同
						setChoice();
					}
				}
			});
		});
	});
	setChoice(true);

	// 弹窗
	// 		活动规则
	middlen($('#pop_PKrule_img'));
	$('#Q').bind('click', function() {
		$('#pop_PKrule').fadeIn(500);
	});
	// 		随机匹配PK
	$('#random').bind('click', function() {
		doRandomPK();
		matching(0);
		$('#pop_matching').fadeIn(500);
	});
	// 		PK好友
	$('#friend').bind('click', function() {
		doFriendPK();
		$('#pop_share').fadeIn(500);
	});

	$('#pop_matching,#pop_share').unbind('click');
});