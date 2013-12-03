$(document).ready( function (){
	

	
	$('textarea').autosize();   

	/*var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
	*/
	function viewHeight() {
		return $(window).height();
	}

	function viewWidth() {
		return $(window).width();
	}

	$('.hero-place-holder').each(function () {
		$(this).css('height',viewHeight());
	});


	var intro = $('.intro');
	var contact = $('.contact');
	var content = $('.content');
	var hero = $('.hero-place-holder');
	var home = $('#home');
	var nav = $('#navbar-top');
	var mainNav = $('#navbar-main');
	var callout = $('.call-out');
	var subCallout = $('.sub-call-out');


	callout.removeClass('bounceOut').addClass('animated bounceInDown');
	window.setTimeout(function(){
		subCallout.removeClass('bounceOut').css('visibility','visible').addClass('animated tada');
	},500);	

	function homePosition() {

		return  contact.outerHeight();
	}
	/* if there is hash don't scroll*/

	if(window.location.hash) {
		if(window.location.hash=="#home-anchor"){

			$(window).scrollTop(homePosition());

		}
	} else {
		$(window).scrollTop(homePosition());
	}

	

	function scrollHandler() {
		var intro = $('.intro');
		var contact = $('.contact');
		var content = $('.content');
		var hero = $('.hero-place-holder');
		var home = $('#home');
		var mainNav = $('#navbar-main');
		var callout = $('.call-out');
		var subCallout = $('.sub-call-out');
		// panel stack goes from bottom to top of document
		if( $(window).scrollTop() >= hero.outerHeight()+nav.outerHeight()+contact.outerHeight()) {
			mainNav.addClass('sticky').css('margin-top',0);
		} else
		{
			mainNav.removeClass('sticky').css('margin-top','');
		} 

		

		$(".page-turner").each(function () {
			if( $(window).scrollTop() >= $(this).offset().top-viewHeight()/6*5) {
			
				$(this).removeClass('bounceOut').addClass('animated tada');

			}
			else
			{
				$(this).removeClass('tada').addClass('bounceOut');
			}
		});


		if( $(window).scrollTop() >= hero.offset().top-100){
			$('.navbar-toggle').removeClass('alternate');
      	}
      	else{
      		$('.navbar-toggle').addClass('alternate');
      	}
	}

	$(window).scroll(function () {
		scrollHandler();
	});


	//smooth anchor scroll as seen on css-tricks.com
	$('a[href*=#]:not([href=#])').click(function(e) {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);

	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      


	      if (target.length) {
	      	if(this.hash=="#contact") {
	      		$('.navbar-toggle').addClass('alternate');
	      	}
	      	else{
	      		$('.navbar-toggle').removeClass('alternate');
	      	}
	      	if(this.hash=="#home-anchor"){
	      		$('html,body').animate({
		          scrollTop: homePosition()
		        }, 500, scrollHandler);

		        console.log(homePosition());
	      	} else {
	      		$('html,body').animate({
		          scrollTop: target.offset().top
		        }, 500, scrollHandler);
	      	}
	      	history.replaceState(null, '', this.hash);
		    return false;
	      }


	    }
	});




	$("#contact").css('visibility','visible');

	// handle resize

	window.addEventListener("orientationchange", function() {
		console.log('orientation change');
		$('.hero-place-holder').each(function () {
			$(this).css('height',viewHeight());
		});
		// reset scrollspy, cuz this motherfucker somehow doesn't work properly after resize
		$('[data-spy="scroll"]').each(function () {
		  $(this).scrollspy('refresh');
		});

	}, false);

	$(window).resize(function(){
		console.log('resized');
		$('.hero-place-holder').each(function () {
			$(this).css('height',viewHeight());
		});
		// reset scrollspy, cuz this motherfucker somehow doesn't work properly after resize
		$('[data-spy="scroll"]').each(function () {
		  $(this).scrollspy('refresh');
		});

	});

	scrollHandler();

	$(document).on('click',function(e) {

	    $("#main-nav").removeClass('in').addClass('collapse');

	});

	
});

