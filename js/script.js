//Header Down Up

var prevScrollpos = window.pageYOffset;


window.onscroll = function() {
var currentScrollpos = window.pageYOffset;
if(prevScrollpos > currentScrollpos) {
	document.getElementById("nav").style.top = "0";
} else {
	document.getElementById("nav").style.top = "-100px";
}


prevScrollpos = currentScrollpos;

}



//Header Style Timing	
$(window).on("scroll", function() {
  var editstyle = document.getElementById("nav")  
  var prevScrollpos = window.pageYOffset;
  if($(window).scrollTop()) {
          $('nav').addClass('navstyled');
		  
    }

    else {
          $('nav').removeClass('navstyled');
    }
})


jQuery(document).ready(function(){
$('nav').smoothScroll();	   
				   
					   
	});



  var com_typ = new Typed("#com_typ", {
    strings: [' Marie:Lorem ipsum dolor sit amet.^500\nMarie:Lorem ipsum dolor sit amet.^500\nMarie:Lorem ipsum dolor sit amet.^500\nMarie:Lorem ipsum dolor sit amet.^500\nMarie:Lorem ipsum dolor sit amet.^500\nMarie:Lorem ipsum dolor sit amet. ^500\nMarie:Lorem ipsum dolor sit amet. ^500\nMarie:Lorem ipsum dolor sit amet. ^500\nMarie:Lorem ipsum dolor sit amet. ^500\nMarie:Lorem ipsum dolor sit amet. ^500\nMarie:Lorem ipsum dolor sit amet. ^500\nMarie:Lorem ipsum dolor sit amet. ^500\nMarie:Lorem ipsum dolor sit amet. ^500\nMarie:Lorem ipsum dolor sit amet. ^500\nMarie:Lorem ipsum dolor sit amet. ^500\nMarie:Lorem ipsum dolor sit amet. ^500\n'],
    typeSpeed: 0,
    backSpeed: 0,
    backDelay: 500,
    startDelay: 1000,
    loop: false,
    onComplete: function(self) { prettyLog('onCmplete ' + self) },
    preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
    onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
    onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
    onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
    onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
    onReset: function(self) { prettyLog('onReset ' + self) },
    onStop: function(pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
    onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
    onDestroy: function(self) { prettyLog('onDestroy ' + self) }
  });