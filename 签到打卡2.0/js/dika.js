$(document).ready(function() {
	let today      = new Date();
	let today_day;
	let today_text = today.getFullYear()+'年'+
					 (today.getMonth()+1)+'月'+
					 today.getDate()+'日';
	switch(today.getDay()){
		case 0: today_day = '星期天';break;
		case 1: today_day = '星期一';break;
		case 2: today_day = '星期二';break;
		case 3: today_day = '星期三';break;
		case 4: today_day = '星期四';break;
		case 5: today_day = '星期五';break;
		case 6: today_day = '星期六';break;
	}
	$('#date').text(today_text);
	$('#day').text(today_day);


	// 点击上传选上传什么截图
	var uploadImgType = 'run';

	$('#chooseType').bind('click',function() {
		if (uploadImgType == 'run') {
			uploadImgType = 'words';
			$('#vernier').css('left', function(){
				return $('#vernier').parent().width() - $('#vernier').parent().height()}
				);

			$('#runImg').fadeOut('500');
			$('#wordsImg').fadeIn('500');
		}
		else{
			uploadImgType = 'run';
			$('#vernier').css('left', '0');

			$('#runImg').fadeIn('500');
			$('#wordsImg').fadeOut('500');		
		};
	});
});
