jQuery(function($) {
	"use strict";

	// Author Code Here
	$(window).load(function(){
		$('header').height($(window).height() - 60);
		$('header .table').height($('header').height());
		$('.wrapper').css('opacity', '1');
		$('.tlt').textillate({
			loop: true,
			minDisplayTime: 4000
		});
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 400)
			$('.navigation-bar').addClass('active');
		else
			$('.navigation-bar').removeClass('active');
	});

	// Custom Events
	$('a.toggle-menu').click(function(){
		$('nav').toggleClass('active');
	});
});