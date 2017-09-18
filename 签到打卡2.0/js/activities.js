var selectPage = function (current) {
	$('.major').children('li').removeClass('set');
	$('.minor').children('li').removeClass('set');
	$('.box').css('display', 'none');

	$('.'+current.major).addClass('set');
	$('.'+current.minor+'s').addClass('set');
	if (current.major == 'commands') {
		$('.'+current.minor+'.commanded').css('display', 'block');
	}
	else{
		$('.'+current.minor).css('display', 'block');
	}

	return current;
};

$(document).ready(function() {
	// 计算类型选择的宽度
	encenter($('.minor'));
	$('.minor:eq(1)').width($('.minor:eq(0)').width());

	// 改变页面显示哪些活动
	selectPage(defaults);
	let current = defaults;
	$('.major').children('li').bind('click', function() {
		current.major = $(this).attr('class').split(' ')[0];
		selectPage(current);
	});
	$('.minor').children('li').bind('click', function() {
		current.minor = $(this).attr('class').split(' ')[0].replace(/s$/,'');
		selectPage(current);
	});

	// 菜单栏滚动事件
	$(window).scroll(function() {
		if ($('#inner_header_menu').offset().top <= $(window).scrollTop()) {
			$('#fixed_header_menu').css('display', 'block');
		}
		else{
			$('#fixed_header_menu').css('display', 'none');
		}
	});
});