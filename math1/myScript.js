$(document).ready(function(){
    $("#fullPage").hide();
    $("#navButton").on('click', function(){
        $('#fullPage').show();
    });
    $('#leaveMenu').on('click', function(){
        $('#fullPage').hide();
    });
	
});
