jQuery(function($) {
	"use strict";

	// Author Code Here
	$(window).load(function(){
		$('header').height($(window).height());
		$('.owl-intro').owlCarousel({
			singleItem:true,
			pagination:false,
			autoPlay:4000
		});
		$('.center-v').css('position', 'relative');
		$('.center-v').each(function(){
			$(this).css('top', ($('header').height() / 2 - $(this).height() / 2) + "px");
		});
	});

	$(window).scroll(function(){

	});
});