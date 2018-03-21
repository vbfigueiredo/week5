$(document).ready(function(){
/////
	$("a").click(function(event){
		event.preventDefault();
	});
/////
    $('.readmore').click(function( event ){
  		$('#show-this-on-click').slideDown(900);
  		// if .readmore is clicked
    $(".readmore").hide();
    $(".readless").show();
});
    $('.readless').click(function( event ){
  		$('#show-this-on-click').slideUp(900);
  		// if .readmore is clicked
    $(".readmore").show();
    $(".readless").hide();
});
    $('.learnmore').click(function( event ){
  		$('.learnmoretext').slideDown(900);
  		$(".learnmore").hide();
    	
   // Couldn't DRY my code! :(
});
});