var TabBox = {
	_tabClicked: function(){
		$("ul li").removeClass("selected");
		/*$('.selected').className = '';*/
		$(this).addClass("selected");
		var index = $("li").index(this);
		$('#d1').text("탭뷰" + (index+1));
		/*$("#d1").text("탭뷰" + $(this).text());*/
	},
	
	init:function(){
		$(function(){
			$("ul li").click(TabBox._tabClicked);
		});
	}
}
