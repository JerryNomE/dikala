// div竖直居中
var middlen = function (el) {
	el.css('margin-top',function(){
		var height = $(this).parent().height();
		var weight = $(this).height();
		return (height - weight) / 2;
	});
}

// div水平居中
var encenter = function (el) {
	el.width(function () {
		let width = 0;
		$(this).children().each(function() {
			width += parseFloat($(this).innerWidth()) + .5;
		});
		return width;
	})
}

// 弹窗
var fadeOutTime = 500;
var showPopup = function (popup) {
	popup.fadeIn(fadeOutTime);
}
$(document).ready(function() {
	$('.pop_up').bind('click', function() {
		$(this).fadeOut(fadeOutTime);
	});
	// 阻止弹窗内链接冒泡
	$('.pop_up').find('a').bind('click', function() {
		event.stopPropagation();
	});
});

var unfinishedInfo = function () {
	alert('功能将在不久后推出，敬请期待')
};