$(document).ready(function() {
	let page = 1;
	// 判断是存取还是支付
	if ($('#input').length) {// 存取
		$('#confirm-sum').css('display', 'none');
		$('#cancel').css('display', 'none');

		$('#cancel').bind('click', function() {
			$('#description').text('请输入');

			$('#confirm-sum').fadeOut('500');
			$('#input').fadeIn('500');
			$('#cancel').fadeOut('500');

			page = 1;
		});;
	}
	else{
		page = 2;
		$('#cancel').attr('href', 'javascript:history.back(-1)');
		$('#cancel').children('p').text('返回上一页');
	}

	// 信息切换
	$('#comfirm').bind('click', function() {
			if(page == 1){
				if ($('#num').val()>0) {
					$('#description').text('请确认');

					$('#input').fadeOut('500');
					$('#confirm-sum').fadeIn('500');
					$('#cancel').fadeIn('500');

					page = 2;
				}
				else{
					$('#warn').fadeIn('0');
				}
			}
			else if(page == 2){
				$('#description').text('已提交');

				$('#confirm-sum').fadeOut('500');
				$('#succeed').fadeIn('500');
				$('#cancel').fadeOut('500');

				let $_self = $('#comfirm');
				$_self.children('p').text('回到首页');
				setTimeout(function () {
					$_self.attr('href', 'me.html');
				},0);

				submit();
				page = 3;
			}
	});	
});
