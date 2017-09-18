$(document).ready(function() {
	$('#pop_succeed,#pop_share').unbind('click',console.log(1));
	$('#join').bind('click', function() {
		$('#pop_succeed').fadeIn(500);
	});
	$('#share_btn').bind('click', function() {
		$('#pop_succeed').fadeOut(500);
		$('#pop_share').fadeIn(500);
	});
});