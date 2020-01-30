$(document).ready(function($){
	$(".homepage-slides").owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		nav:true,
		navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
		dots:true,
		dotsData:true,
	});
});