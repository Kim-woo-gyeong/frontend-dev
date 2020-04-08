/*Dom Level 2 - 특정 Element의 Event의 Listener를 등록하는 방식 : 여러 Event 가능. 
특정 event 핸들러(Listener)를 여러개 등록 할 수 있다.
3) java script code(DOM API) 로만 작성하기*/
var TabBox={
		init: function(){
			window.addEventListener('load', this._onWindowLoad);
		},
		_onWindowLoad: function(){
			//div : class('tab-box')
			var divTabBox = document.getElementsByClassName('tab-box')[0];
			var ulTabBox = divTabBox.childNodes[1];
			var liTabs = ulTabBox.getElementsByTagName('li');
			
			for(var i = 0; i < liTabs.length; i++){
				liTabs[i].addEventListener('click', TabBox.onTabClicked.bind(liTabs[i]));
			}
		},
		onTabClicked: function() {
			var liSelecteds = document.getElementsByClassName('selected');
			
			(liSelecteds.length == 1) && (liSelecteds[0].className='');
			
			this.className= 'selected';
		}
}