// Adam Vinsant
// VFW 1207
// My Honey Do List js file
// Activity 2

window.addEventListener("DOMContentLoaded", function(){
	
	// getElementById Function
	function a(id) {
		var theElement = document.getElementById(id);
		return theElement;
	};
	
	// id variables
	var	opt= [blank, inside, outside, errand],
		ct = a('choretype'),
		cn = a('chorename'),
		urg= a('urgent'),
		fin= a('finishby'),
		dif= a('difficulty'),
		notes= a('chorenotes');
		
	var displayButton = a('display');
	displayButton.addEventListener("click", getData);
	
	var clearButton = a('clear');
	clearButton.addEventListener("click", clearLocal);
	
	var submitButton = a('submitbutton');
	submitButton.addEventListener = a("click", storeData);
	
		 		
	
	
	
});