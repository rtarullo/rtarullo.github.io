//         <form id="nameForm">Name:<input type="text" id="theText"></form>
//         <button onclick="nameFunction()">Submit</button>
//         <p id="stateName"></p>
// var theName = .getElementById("theText").form;

// function nameFunction() {
// 	document.getElementById()
// }
// var theName = .getElementById("theText").form.id;

// function nameFunction() {
// 	document.getElementById("stateName").innerHTML
// }
// <button>Find Out</button>
//         <p id="rectangle">Area of a Rectangle</p>
// function nameFunction(){
// 	var name = prompt("What is your name?");
// }
// nameFunction();
        // <p id="vocab">Acute Angle: an angle whose measure is between 0 and 90 degrees</p>
        // <button id="vocabButton">Keywords</button>
	    
$(document).ready(function(){
	$("#fullMenu").hide(); 
	// $("#nameTime").html("Hello " + name "!");
    $("#menuIcon").on('click', function(){
        $("#fullMenu").show();
    });
    $("#leaveMenu").on('click', function(){
    	$("#fullMenu").hide();

    });
    $("#rectangleButton").click(function(){
    	$("#rectangle").text("The area of rectangle = Length x Width");
    	$("#rectangleButton").hide();
	});
    $("#vocabButton").click(function(){
    	$("#vocab").html("Acute Angle: an angle whose measure is <b>between 0 and 90 degrees</b>");
    	$("#vocabButton").hide();

	});
    $("#shape").click(function(){
        $("img").width("400");
    });
    $("#back").click(function(){
        $("img").width("200");
    });
});
