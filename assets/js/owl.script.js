 
$(function(){
	$('.owl-carousel').owlCarousel({
	 
		dots: true,
 
		responsive:{
		 
			0:{
				nav:false,
				items:1,
				margin:13,
				stagePadding: 25 
		 
			},
		 
			768:{
				nav:false,
				items:2,
				margin:13 
			 
		 
			},
			993:{
				nav:true,
				items:3,
				margin:24
			}
		},
 
		navText:[' ',' ']
	});
});


 
 







 