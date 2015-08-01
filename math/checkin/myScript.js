var name;

function myFunction() {
    name = prompt("Please enter your name");
}
myFunction();

function checkIn(){
	var feeling = prompt("On a scale of 1 to 5 (1 being the worst, 5 being the best), how are you feeling, " + name + "?");
		if(feeling<=2){
			document.getElementById("checkin").innerHTML = "Cheer up, pup";
			$(".sad").show();
			$("button").hide();

		}
		else if(feeling==3){
			document.getElementById("checkin").innerHTML = "Classy.";
			$(".middle").show();
			$("button").hide();
		}
		else if(feeling>=5){
			document.getElementById("checkin").innerHTML = "Yeah!";
			$(".happy").show();
			$("button").hide();
		}
		else {
			document.getElementById("checkin").innerHTML = "Please refresh the page and try again with a number from 1-5";
		}
}

$(document).ready(function(){
	$("img").hide();


});

