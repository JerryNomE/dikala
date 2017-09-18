Vue.component('clause', {
	template: 
	'<div class="pop_up" id="pop-clause">' + 
		'<div class="pop_up_container">' + 
			'<div class="pop_clause_tit">服务条款</div>' + 
			'<div class="pop_clause_main">' +
				'　　您同意遵守《中华人民共和国保密法》、《计算机信息系统国际联网保密管理规定》、《计算机信息网络国际联网安全保护管理办法》、《中华人民共和国计算机信息国际联网管理暂行规定》及其实施办法等相关法律法规的任何及所有的规定，并对您以任何方式使用服务的任何行为及其结果承担全部责任。<br>' + 
				'　　在任何情况下，如果合理地认为您的任何行为，包括但不限于您的任何言论和其他行为违反或可能违反上述法律和法规的任何规定，可在任何时候不经任何事先通知终止向您提供服务。' + 
			'</div>' + 
			'<a id="pop_read_btn">已阅读</a>' + 
		'</div>' +
	'</div>'
});
Vue.component('read-clause', {
	template: 
	'<div class="read-clause">' + 
		'<input type="checkbox" id="checkbox-clause"/>' + 
		'<label for="checkbox-clause"></label>' + 
		'已阅读<div id="clause">服务条款</div>' +
	'</div>'
});
Vue.component('btn-clause', {
	template: 
	'<div class="btns-clause">' + 
		'<div class="btn-clause-block btn_gradient_grey"><p>确认加入</p></div>' +
		'<div class="btn-clause btn_gradient_yellow" id="join"><p>确认加入</p></div>' +
	'</div>'
});
$(document).ready(function() {
	// vue注册
	var clause = new Vue({
		el: "#clauseVue",
	});
	// 点击弹出服务条款内容
	$('#clause').bind('click', function() {
		$('#pop-clause').fadeIn(500);
	});
	// 阅读按钮效果
	var clauseChecked = false;
	$('#checkbox-clause').click(function () {
		if (clauseChecked) {
			$('.btn-clause').css('opacity', '0');
			$('.btn-clause-block').css({
				opacity: '1',
				'z-index': '2'
			});
			clauseChecked = false;			
		}
		else{
			$('.btn-clause').css('opacity', '1');
			$('.btn-clause-block').css({
				opacity: '0',
				'z-index': '0'
			});
			clauseChecked = true;
		}
	});
	// 服务条款里已阅读按钮
	$('#pop_read_btn').click(function() {
		if (!clauseChecked) {
			$('#checkbox-clause').click();
		}
		$('#pop-clause').click();
	});
});
