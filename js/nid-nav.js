$(function() {
	$( "#all" ).click(function() {
	    $('.col-3').filter(function(){ 
	    return $(this).data("group") !== ''})
	    .css({display:'block'});
	});

	$( "#photos" ).click(function() {
	    $('.col-3').filter(function(){ 
	    return $(this).data("group") === 'photos'})
	    .css({display:'block'});
	   $('.col-3').filter(function(){ 
	    return $(this).data("group") !== 'photos'})
	    .css({display:'none'});
	});

	$( "#banding" ).click(function() {
	    $('.col-3').filter(function(){ 
	    return $(this).data("group") === 'banding'})
	    .css({display:'block'});
	   $('.col-3').filter(function(){ 
	    return $(this).data("group") !== 'banding'})
	    .css({display:'none'});
	});
 
 	$( "#adverts" ).click(function() {
	    $('.col-3').filter(function(){ 
	    return $(this).data("group") === 'adverts'})
	    .css({display:'block'});
	   $('.col-3').filter(function(){ 
	    return $(this).data("group") !== 'adverts'})
	    .css({display:'none'});
	});

	 $( "#development" ).click(function() {
	    $('.col-3').filter(function(){ 
	    return $(this).data("group") === 'development'})
	    .css({display:'block'});
	   $('.col-3').filter(function(){ 
	    return $(this).data("group") !== 'development'})
	    .css({display:'none'});
	});

	 $( "#misc" ).click(function() {
	    $('.col-3').filter(function(){ 
	    return $(this).data("group") === 'misc'})
	    .css({display:'block'});
	   $('.col-3').filter(function(){ 
	    return $(this).data("group") !== 'misc'})
	    .css({display:'none'});
	});
});