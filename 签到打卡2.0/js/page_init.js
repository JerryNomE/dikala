var page_init = function (){/*初始化页面，以720显示页面*/
    var _self = this;
    _self.width = 720;//设置默认宽度
    _self.fontSize = 100;//默认字体大小
    _self.widthProportion = function(){
    	var p = document.getElementsByTagName("html")[0].clientWidth/_self.width;
    	return p;
	};
    _self.changePage = function(){
        document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
    }
    _self.changePage();
    window.addEventListener('resize',function(){_self.changePage();},false);
};

$(document).ready(function() {
    page_init();
});