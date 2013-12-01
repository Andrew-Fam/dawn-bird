$(document).ready( function (){
	
	$('textarea').autosize();   

	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);

	var viewWidth = $(window).width();
	var viewHeight = $(window).height();
	
	var intro = $('.intro');
	var contact = $('.contact');
	var content = $('.content');
	var hero = $('.hero-place-holder');
	var home = $('#home');
	var nav = $('#navbar-top');
	var mainNav = $('#navbar-main');
	var callout = $('#call-out');
	var subCallout = $('#sub-call-out');

	var homePosition = mainNav.offset().top+mainNav.outerHeight()-viewHeight;

	/* if there is hash don't scroll*/

	if(window.location.hash) {
		if(window.location.hash=="#home-anchor"){
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				$(window).scrollTop(home.offset().top);
			} else {
				$(window).scrollTop(homePosition);
			}
		} else{
			scrollHandler();
		}
	} else {
	 	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 	$(window).scrollTop(home.offset().top);
		} else {
			$(window).scrollTop(homePosition);
		}
	}

	function scrollHandler() {
		// panel stack goes from bottom to top of document
		if( $(window).scrollTop() >= hero.outerHeight()+nav.outerHeight()+contact.outerHeight()) {
			mainNav.addClass('sticky').css('margin-top',0).next().addClass('after-sticky').css('margin-top',mainNav.outerHeight());
		} else
		{
			mainNav.removeClass('sticky').css('margin-top','').next().removeClass('after-sticky').css('margin-top','');
		} 
		
		/*if( $(window).scrollTop() >= hero.outerHeight()+nav.outerHeight()) {
			//console.log('haaaa?');
			
			intro.removeClass('sticky').addClass('re-flow').css('margin-top',hero.outerHeight());
		} else {
			intro.addClass('sticky').removeClass('re-flow').css('margin-top',0).next().addClass('after-sticky').css('margin-top',intro.outerHeight());
		}

		if( $(window).scrollTop() >= intro.prev().outerHeight() ){
			//console.log('yeah');
		} else{
			//console.log('nigga what');
			intro.removeClass('sticky').next().removeClass('after-sticky').css('margin-top','');
		} */

		// call out stack
		
		if( $(window).scrollTop() >= callout.offset().top-viewHeight) {
			
			callout.removeClass('bounceOut').addClass('animated bounceInDown');
			window.setTimeout(function(){
				subCallout.removeClass('bounceOut').css('visibility','visible').addClass('animated tada');
			},500);
		}
		else
		{
			callout.removeClass('bounceInDown').addClass('bounceOut');
			subCallout.removeClass('tada').addClass('bounceOut');
		}

		$(".page-turner").each(function () {
			if( $(window).scrollTop() >= $(this).offset().top-viewHeight/6*5) {
			
				$(this).removeClass('bounceOut').addClass('animated tada');

			}
			else
			{
				$(this).removeClass('tada').addClass('bounceOut');
			}
		});
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
	      	if(this.hash=="#home-anchor"){
	      		$('html,body').animate({
		          scrollTop: homePosition
		        }, 500, scrollHandler);
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
});

