function checkIn(){
	var feeling = prompt("On a scale of 1 to 5 (1 being the worst, 5 being the best), how are you feeling?");
		if(feeling<=2){
			document.getElementById("checkin").innerHTML "Yeah!";
		}
		else if(feeling==3){
			document.getElementById("checkin").innerHTML "Just ok?";
		}
		else if(feeling>=5){
			document.getElementById("checkin").innerHTML "Oh no!";
		}
		else {
			document.getElementById("checkin").innerHTML "Please try again with a number from 1-5";
		}
}


function myFunction() {
    var person = prompt("Please enter your name", "Harry Potter");
    
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}


