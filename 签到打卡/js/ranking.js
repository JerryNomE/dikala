$(document).ready(function() {
	$(".choice_box .inner_box").click(function() {
		var index = $(this).index();
		$(".rank").fadeOut(0);
		$(".rank:eq("+index+")").fadeIn(200);

		$(".choice_box .inner_box").removeClass('set');
		$(this).addClass('set');

		var margin = parseFloat($('.inner_box').css("margin-left"));
		var width  = parseFloat($('.inner_box').css("width"));
		var left   = (index)*(width + margin * 2) + margin; 

		$(".line").css('left',left);
	});

	$(".heart").click(function() {

		console.log($(this).children("img").attr('src'));
		if ($(this).children("img").attr('src') == '../img/heart.png') {
			$(this).children("img").attr('src','../img/heart_red.png');
		}
		else{
			$(this).children("img").attr('src','../img/heart.png');
		}
	});
});