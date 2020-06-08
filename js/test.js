var displayed = false;
var aboutDisplayed=false;
var currentElem= "";
function init() {

	var listElem = [];
	for (let index = 1; index < 17; index++) {
		
		listElem.push(document.getElementById("rect"+index));
	}
	listElem.forEach(function(item, index, array) {	
		item.addEventListener("click", function(){
			
			displayElem(item.id)
		  });
		});
	
}

function displayElem(rectId){
	
	document.getElementById("base").classList.add('hidden');
	document.getElementById('about').classList.add('hidden');
	aboutDisplayed=false;

	if (currentElem==""){
		document.getElementById(rectId).style.fill= "blue";
		document.getElementById("info-"+rectId).classList.remove('hidden');
		document.getElementById("base").classList.add('hidden');
		displayed = true;
		console.log("hello")
	}
	else if(rectId == currentElem && displayed == true){
		document.getElementById(currentElem).style.fill= "black";
		document.getElementById("info-"+ currentElem).classList.add('hidden');
		document.getElementById("base").classList.remove('hidden');
		displayed = false;
	}	else if(rectId == currentElem && displayed == false){
		
		document.getElementById(currentElem).style.fill= "blue";
		document.getElementById("info-"+ currentElem).classList.remove('hidden');
		document.getElementById("base").classList.add('hidden');
		displayed = true;
	}   else if (rectId != currentElem && currentElem!="")	{
		document.getElementById(rectId).style.fill= "blue";
		document.getElementById("info-"+rectId).classList.remove('hidden');
		console.log(currentElem);
		document.getElementById(currentElem).style.fill= "black";
		document.getElementById("info-"+ currentElem).classList.add('hidden');
		document.getElementById("base").classList.add('hidden');
		displayed = true;
	}  

		

	currentElem = rectId;
	console.log(currentElem)
}
function about(){
	var nous = document.getElementById('about')
	if (aboutDisplayed==false){
		document.getElementById("base").classList.add('hidden');
		nous.classList.remove('hidden');
		
		aboutDisplayed=true;

	}
	else if (aboutDisplayed==true){
		document.getElementById("base").classList.remove('hidden');
		nous.classList.add('hidden');
		aboutDisplayed=false;
	} else if (aboutDisplayed==false && currentElem!=""){
		document.getElementById("base").classList.add('hidden');
		nous.classList.remove('hidden');
		aboutDisplayed=true;
		currentElem.classList.add('hidden')
	}
		
}