$(document).ready(function() {
	$('.pop_bg').unbind();

	$('#refuse').click(function() {
		$('#pop_challenge').fadeOut(200);
		$('#pop_refuse').fadeIn(200);
	});
	$('#accept').click(function() {
		$('#pop_challenge').fadeOut(200);
		$('#pop_succeed').fadeIn(200);
	});	

	$(document).ready(function() {
		$('.name').text(name);
		$('#content').text(type);
		$('#end_time').text(time);
	});
});
