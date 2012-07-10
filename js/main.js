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
	var	opt= ["blank", "inside", "outside", "errand"],
		ct = a('choretype'),
		cn = a('chorename'),
		urg= a('urgent'),
		fin= a('finishby'),
		dif= a('difficulty'),
		notes= a('chorenotes');
		
	// Creating Select elements and populate with options
	function makeType () {
		var 	formTag = document.getElementsByTagName("form"),
			selectLi = a('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute('id', 'type');
		
		for (var i=0; j=opt.length, i<j; i++){
			var makeOption = document.createElement('types');
			var optText = opt[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		};
		selectLi.appendChild(makeSelect);
	};
	makeType();
	
	// Button Action functions
	var displayButton = a('display');
	displayButton.addEventListener("click", getData);
	
	var clearButton = a('clear');
	clearButton.addEventListener("click", clearLocal);
	
	var submitButton = a('submitbutton');
	submitButton.addEventListener = a("click", storeData);
	
});