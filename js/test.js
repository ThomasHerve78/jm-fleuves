var displayed = false;
var currentElem= "";
function init() {

	var listElem = [];
	for (let index = 1; index < 19; index++) {
		
		listElem.push(document.getElementById("rect"+index));
	}
	listElem.forEach(function(item, index, array) {	
		item.addEventListener("click", function(){
			
			displayElem(item.id)
		  });
		});
	
}

function displayElem(rectId){
	

	
	if(rectId == currentElem && displayed == true){
		document.getElementById(currentElem).style.fill= "black";
		document.getElementById("info-"+ currentElem).classList.add('hidden');
		displayed = false;
	}	else if(rectId == currentElem && displayed == false){
		document.getElementById(currentElem).style.fill= "blue";
		document.getElementById("info-"+ currentElem).classList.remove('hidden');
		displayed = true;
	}   else if (rectId != currentElem && currentElem!="")	{
		document.getElementById(rectId).style.fill= "blue";
		document.getElementById("info-"+rectId).classList.remove('hidden');
		console.log(currentElem);
		document.getElementById(currentElem).style.fill= "black";
		document.getElementById("info-"+ currentElem).classList.add('hidden');
		displayed = true;
	}   else if (currentElem=""){
		document.getElementById(rectId).style.fill= "blue";
		document.getElementById("info-"+rectId).classList.remove('hidden');
		displayed = true;

	}	

	currentElem = rectId;
	console.log(currentElem)
}
