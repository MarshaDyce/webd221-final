$(document).ready(function(){

 	$('.bxslider').bxSlider();


	$(".main").on("click", function(){							//min nav toggle menu
		$(".dropdown").toggleClass("open");						//
	});	


	$(".selection").on("click", "li", function() {				//
		var $this = $(this);									//adds active class to clicked element and
	    $this.addClass("active")								//removes .active from siblings
	    .siblings().removeClass("active");						//
	});


	$(".selector").on("click", function(){						//min nav toggle portfolio
		$(".selection").toggleClass("open");					//
	});


	var windowWidth = $(window).width();						//
	if(windowWidth <= 768){										//reverses li order in .dropdown if 
		ul = $('.dropdown');									//screen size is equal or smaller
		ul.children().each(function(i,li){ul.prepend(li)}) 		//than 768px (doesn't work if browser 
	}															//is resized - not dynamic, must be refreshed)


	var str=location.href.toLowerCase();
	$(".nav li a").each(function() {
		if (str.indexOf(this.href.toLowerCase()) > -1) {
			$("a.current").removeClass("current");
			$(this).addClass("current");
		}
	});
	$("a.current").each(function(){
		if ($(this).is("a")){
			$(this).addClass("current");
		}
	});

});
