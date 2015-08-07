
$(document).ready(function(){
    $("#unitSpace").hide();
    $("#unitSpace2").hide();
    $('#unitSpace3').hide();
    $("#currentUnit").on('click', function(){
        $('#unitSpace').show();
    });
    $('#exitMenu').on('click', function(){
        $('#unitSpace').hide();
    });
	$("#importantDates").on('click', function() {
		$('#unitSpace2').show();
	});
	$('#exitMenu2').on('click', function(){
        $('#unitSpace2').hide();
    });
	$("#celebrations").on('click', function() {
		$('#unitSpace3').show();
	});
	$('#exitMenu3').on('click', function(){
        $('#unitSpace3').hide();
    });
});
