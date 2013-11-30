function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}

$(document).ready( function (){
	


	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);

	var viewWidth = $(window).width();
	var viewHeight = $(window).height();
	
	var intro = $('.intro');
	var contact = $('.contact');
	var content = $('.content');
	var hero = $('.hero');
	var nav = $('#navbar-top');
	var mainNav = $('#navbar-main');
	var callout = $('#call-out');

	$(window).scrollTop(contact.outerHeight());

	$(window).scroll(function () {
		// panel stack goes from bottom to top of document
		if( $(window).scrollTop() >= hero.outerHeight()+nav.outerHeight()+intro.outerHeight()+contact.outerHeight()) {
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
		
		if( $(window).scrollTop() >= callout.offset().top-viewHeight/6*5) {
			
			callout.removeClass('bounceOut').addClass('animated bounceInDown');

		}
		else
		{
			callout.removeClass('bounceInDown').addClass('bounceOut');
			
		}
	});


	//smooth anchor scroll as seen on css-tricks.com
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	});
});

