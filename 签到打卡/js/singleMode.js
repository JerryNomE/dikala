$(document).ready(function(){
	/*按下确认条款时的效果*/
	$("#checkboxInput").change(function(){
		if ($("#checkboxInput").prop('checked')) {	
			$('#blocking').attr('id','di');
		}
		else{
			$('#di').attr('id','blocking');
		}
	});

	$("#school").click(function(){
		$("#surface").fadeIn(0);
	});

	$("surface_bg").click(function(){
		$(this).fadeOut(0);
	});

	/*点击选择学校时的效果*/
		/*2个函数是下拉框效果*/
	function school_fadeIn(){
		$("#surface").removeClass('disappear');
		$(".schools").fadeIn(200);
		$(".schools").css("margin","-.03rem auto 0");
		$(".schools_top").css("margin-top","1.53rem");
		$("#surface").css("height","100%");
	}
	function school_fadeOut(){/**/
		$(".schools").fadeOut(100);
		// $(".schools").hide(200);
		$(".schools").css("margin","-.61rem auto 0");
		$(".schools_top").css("margin-top","0.94rem");
		$("#surface").css("height","0");
		// $("#surface").hide();
	}

	$("#school").click(function(){
		school_fadeIn();
	});

	$("#surface_bg").click(function(){
		school_fadeOut();
	});

	$(".schools").click(function(){
		school_fadeOut();
		$(".chose:first").text($(this).text());
	});
	/*查看是否阅读条款*/
	$('#di').click(function() {
		var obj = document.getElementById("checkboxInput");//复选框	
	    if(obj.checked){
	    	$('#pop_succeed').removeClass('disappear');
	    }
	});
	$('#share_btn').click(function() {
		$('#pop_succeed').addClass('disappear');
	    $('#pop_share').removeClass('disappear');
	});
	// $('.pop_bg').click(function() {
	// 	$('.pop_up').addClass('disappear');
	// });

});