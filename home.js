//Var 
var startWidth = $(window).width();

//DOM
$(document).ready(function() {
	var windowHeight = $(window).height(),
		windowWidth = $(window).width();
	
	setControlPanel();
	fixSmoothScrolling();
	startLoader();
	
	//Height fix for resize
	if(windowWidth > 1024) {
		$("#dtx-wrapper").height(windowHeight);
	} else {
		$("#dtx-wrapper").css("height", "100%");
	}	
});
$(window).load(function() {
	startScrollMagic();
})
$(window).resize(function() {
	resizeContainer();
});
$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	
	//Menu
	if (scrollTop > 0) {
		$("#dtx-header").removeClass("open");
		$("#dtx-hamburger .dtx-spinner").removeClass("open");
	}
	
	//Language 
	if (scrollTop > 200) {
		$("#dtx-language").addClass("scroll");
	} else {
		$("#dtx-language").removeClass("scroll");
	}
});

//Resize functions
function resizeContainer() {
	var windowHeight = $(window).height(),
		windowWidth = $(window).width();
	
	if(windowWidth > 1024) {
		if(startWidth < 1024) {
			location.reload();
		}
		$("#dtx-wrapper").height(windowHeight);
		$("#dtx-wrapper").css("width", "100%");
	} else {
		if(startWidth > 1024) {
			location.reload();
		}
		$("#dtx-wrapper").css("height", "100%");
		$("#dtx-wrapper").css("width", "100%");
	}
}

//Controlpanel
function setControlPanel() {
	if ($('#ControlBar_ControlPanel').length > 0) {
		$('#dtx-hamburger').css('margin-top','53px');
	}	
}

//Smooth scrolling fix
function fixSmoothScrolling() {
	var windowWidth = $(window).width();
	
	if(windowWidth > 1024) {
		$('body').on("mousewheel", function () {
			//remove default behavior
			event.preventDefault(); 

			//scroll without smoothing
			var wheelDelta = event.wheelDelta,
				currentScrollPosition = window.pageYOffset;
			window.scrollTo(0, currentScrollPosition - wheelDelta);
		});	
	}
}

//Scrollmagic
function startScrollMagic() {
	if($(window).width() > 1024) {
		//Controller
		var scrollController = new ScrollMagic.Controller();

		//Tweens
		var scrollAnimation = new TimelineMax().add([
			/* Animation 1 */
			TweenMax.to("#dtx-h1-image3", 0.30, {
				x:"-100%",
				ease:Sine.easeOut
			}),
			TweenMax.to("#dtx-h1-image3-background", 0.30, {
				x:"100%",
				ease:Sine.easeOut
			}),
			/* Animation 2 */
			TweenMax.to("#dtx-h2-panel", 0.30, {
				top:"0%",
				ease:Sine.easeOut,
				delay:0.30
			}),
			TweenMax.to("#dtx-h2-panel-text", 0.30, {
				opacity:1,
				top:"0%",
				ease:Sine.easeOut,
				delay:0.30
			}),
			TweenMax.to("#dtx-h1-image1", 0.30, {
				x:"-100%",
				ease:Sine.easeOut,
				delay:0.30
			}),
			TweenMax.to("#dtx-h1-image1-background", 0.30, {
				x:"100%",
				ease:Sine.easeOut,
				delay:0.30
			}),
			/* Animation 3 */
			TweenMax.to("#dtx-h3-image1", 0.30, {
				x:"100%",
				ease:Sine.easeOut,
				delay:0.60
			}),		
			TweenMax.to("#dtx-h3-image1-background", 0.30, {
				x:"-100%",
				ease:Sine.easeOut,
				delay:0.60
			}),	
			/* Animation 4 */
			TweenMax.to("#dtx-home-scroll", 0.3, {
				x:"-100%",
				ease:Sine.easeOut,
				delay:1.05
			}),
			TweenMax.to("#dtx-homesection1", 0.3, {
				x:"-100%",
				ease:Sine.easeOut,
				delay:1.05
			}),
			TweenMax.to("#dtx-homesection2", 0.3, {
				x:"-100%",
				ease:Sine.easeOut,
				delay:1.05
			}),
			TweenMax.to("#dtx-homesection3", 0.3, {
				x:"-100%",
				ease:Sine.easeOut,
				delay:1.05
			}),
			TweenMax.to("#dtx-h4-image1", 0.3, {
				x:"-100%",
				ease:Sine.easeOut,
				delay:1.05
			}),
			TweenMax.to("#dtx-h4-logo", 0.25, {
				x:"-100%",
				ease:Sine.easeOut,
				delay:0.95
			}),
			TweenMax.to("#dtx-h4-panel-text", 0.3, {
				opacity:1,
				ease:Sine.easeOut,
				delay:1.20
			}),
			/* Animation 5 */
			TweenMax.to("#dtx-h4-image1", 0.3, {
				y:"-100%",
				ease:Sine.easeOut,
				delay:1.45
			}),
			TweenMax.to("#dtx-h4-image1-background", 0.3, {
				y:"100%",
				ease:Sine.easeOut,
				delay:1.45
			}),
			TweenMax.to("#dtx-h5-image1", 0.3, {
				top:"0%",
				ease:Sine.easeOut,
				delay:1.45
			}),
			TweenMax.to("#dtx-h5-image1-background", 0.3, {
				top:"0%",
				ease:Sine.easeOut,
				delay:1.45
			}),
			/* Animation 6 */
			TweenMax.to("#dtx-h5-image1", 0.3, {
				y:"-100%",
				ease:Sine.easeOut,
				delay:1.75
			}),
			TweenMax.to("#dtx-h5-image1-background", 0.3, {
				y:"100%",
				ease:Sine.easeOut,
				delay:1.75
			}),
			TweenMax.to("#dtx-h6-image1", 0.3, {
				top:"0%",
				ease:Sine.easeOut,
				delay:1.75
			}),
			TweenMax.to("#dtx-h6-image1-background", 0.3, {
				top:"0%",
				ease:Sine.easeOut,
				delay:1.75
			}),
			TweenMax.to("#dtx-h6-panel", 0.3, {
				top:"0%",
				ease:Sine.easeOut,
				delay:1.75
			}),
			/* Animation 7 */
			TweenMax.to("#dtx-h4-logo", 0.3, {
				top:"100%",
				ease:Sine.easeOut,
				delay:2.05
			}),
			TweenMax.to("#dtx-h4-panel-text", 0.3, {
				opacity:"0",
				ease:Sine.easeOut,
				delay:2.05
			}),
			TweenMax.to("#dtx-h7-image1", 0.3, {
				top:"0%",
				ease:Sine.easeOut,
				delay:2.05
			}),
			TweenMax.to("#dtx-h7-image2", 0.3, {
				top:"0%",
				ease:Sine.easeOut,
				delay:2.05
			}),
			TweenMax.to("#dtx-h7-image2-background", 0.3, {
				top:"0%",
				ease:Sine.easeOut,
				delay:2.05
			}),
			TweenMax.to("#dtx-home-logo", 0.2, {
				top:"-100%",
				ease:Sine.easeOut,
				delay:2.30
			}),
			TweenMax.to("#dtx-homesection6", 0.2, {
				top:"-100%",
				ease:Sine.easeOut,
				delay:2.35
			}),
			TweenMax.to("#dtx-h7-panel-text", 0.3, {
				opacity:1,
				ease:Sine.easeOut,
				delay:2.30
			}),
			/* Animation 8 */
			TweenMax.to("#dtx-h7-image3", 0.3, {
				x:"100%",
				ease:Sine.easeOut,
				delay:2.60
			}),
			TweenMax.to("#dtx-h7-image3-background", 0.3, {
				left:"0%",
				ease:Sine.easeOut,
				delay:2.60
			}),
			TweenMax.to("#dtx-h7-panel-text", 0.3, {
				opacity:0,
				ease:Sine.easeOut,
				delay:2.60
			}),
			/* Animation 9 */
			TweenMax.to("#dtx-h7-image1", 0.05, {
				top:"100%",
				ease:Sine.easeOut,
				delay:2.95
			}),
			TweenMax.to("#dtx-h7-image1-background", 0.3, {
				y:"-100%",
				ease:Sine.easeOut,
				delay:2.95
			}),
			TweenMax.to("#dtx-h7-image3", 0.3, {
				top:"100%",
				ease:Sine.easeOut,
				delay:2.95
			}),
			TweenMax.to("#dtx-h7-image3-background", 0.3, {	
				y:"-100%",
				ease:Sine.easeOut,
				delay:2.95
			}),
			TweenMax.to("#dtx-h7-image2", 0.3, {
				x:"100%",
				ease:Sine.easeOut,
				delay:2.95
			}),
			TweenMax.to("#dtx-h7-image2-background", 0.3, {
				x:"-100%",
				ease:Sine.easeOut,
				delay:2.95
			}),
			TweenMax.to("#dtx-h8-image1-text", 0.3, {
				opacity:1,
				ease:Sine.easeOut,
				delay:2.95
			}),
			/* Animation 10 */
			TweenMax.to("#dtx-h8-image1", 0.3, {
				x:"-100%",
				ease:Sine.easeOut,
				delay:3.25
			}),
			TweenMax.to("#dtx-h8-image1-background", 0.3, {
				x:"100%",
				ease:Sine.easeOut,
				delay:3.25
			}),
			TweenMax.to("#dtx-h8-image1-text", 0.3, {
				x:"100%",
				ease:Sine.easeOut,
				delay:3.25
			}),
			TweenMax.to("#dtx-h8-image2", 0.3, {
				x:"100%",
				ease:Sine.easeOut,
				delay:3.25
			}),
			TweenMax.to("#dtx-h8-image2-background", 0.3, {
				x:"-100%",
				ease:Sine.easeOut,
				delay:3.25
			}),
			TweenMax.to("#dtx-h8-panel-text", 0.3, {
				opacity:1,
				ease:Sine.easeOut,
				delay:3.25
			}),
			/* Animation 11 */
			TweenMax.to("#dtx-h8-image1-text", 0.3, {
				y:"-100%",
				ease:Sine.easeOut,
				delay:3.55
			}),
			TweenMax.to("#dtx-h8-panel", 0.3, {
				y:"-100%",
				ease:Sine.easeOut,
				delay:3.55
			}),
			TweenMax.to("#dtx-h8-image3", 0.3, {
				y:"-100%",
				ease:Sine.easeOut,
				delay:3.55
			}),
			TweenMax.to("#dtx-h8-image3-background", 0.3, {
				y:"100%",
				ease:Sine.easeOut,
				delay:3.55
			}),			
			TweenMax.to("#dtx-h9-image1", 0.3, {
				top:"0%",
				ease:Sine.easeOut,
				delay:3.55
			}),
			TweenMax.to("#dtx-h9-image1-background", 0.3, {
				top:"0%",
				ease:Sine.easeOut,
				delay:3.55
			}),		
			TweenMax.to("#dtx-h9-panel-text", 0.3, {
				opacity:1,
				ease:Sine.easeOut,
				delay:3.65
			}),	
			/* Animation 12 */
			TweenMax.to("#dtx-h9-image1", 0.3, {
				y:"-100%",
				ease:Sine.easeOut,
				delay:3.95
			}),
			TweenMax.to("#dtx-h9-image1-background", 0.3, {
				y:"100%",
				ease:Sine.easeOut,
				delay:3.95
			}),
			TweenMax.to("#dtx-h10-image1", 0.3, {
				top:"0%",
				ease:Sine.easeOut,
				delay:3.95
			}),
			TweenMax.to("#dtx-h10-image1-background", 0.3, {
				top:"0%",
				ease:Sine.easeOut,
				delay:3.95
			}),	
			/* Animation 13 */
			TweenMax.to("#dtx-h10-image1", 0.3, {
				y:"-100%",
				ease:Sine.easeOut,
				delay:4.25
			}),
			TweenMax.to("#dtx-h10-image1-background", 0.3, {
				y:"100%",
				ease:Sine.easeOut,
				delay:4.25
			}),
			TweenMax.to("#dtx-h11-image1", 0.3, {
				top:"0%",
				ease:Sine.easeOut,
				delay:4.25
			}),
			TweenMax.to("#dtx-h11-image1-background", 0.3, {
				top:"0%",
				ease:Sine.easeOut,
				delay:4.25
			}),
			TweenMax.to("#dtx-hamburger", 0.3, {
				className:"end",
				delay:4.35								
			}),
			/* Animation 14 - Header & Footer */
			TweenMax.to("#dtx-header", 0.3, {
				x:"100%",
				ease:Sine.easeOut,
				delay:4.75					
			}),
		]);

		//Scene
		var scrollScene = new ScrollMagic.Scene({
			triggerElement:"#dtx-wrapper",
			triggerHook:"onLeave",
			duration:$(window).height() * 12
		}).setPin("#dtx-wrapper").setTween(scrollAnimation).addTo(scrollController);
		
		//Resize event inside scrollmagic
		$(window).on('resize', function() {
			setTimeout(function(){ 
				resizeContainer();
				scrollScene.update(true);
				scrollScene.refresh();
				scrollController.update(true);			
			}, 1000);
		});
	}		
}

//Start page
function startLoader() {
	var counter = 0;
	var c = 0;
	var i = setInterval(function() {
		$(".dtx-loading-page .dtx-counter hr").css("width", c + "%");
		
		counter++;
		c++;
		
		//Clear interval
		if(counter == 101) {
			clearInterval(i);
			startPage();
		}
	}, 15);	
}
function startPage() {
	//Fade out loading
	$('.dtx-loading-page').addClass('start');
	
	//Load in page
	$('#dtx-page').addClass('start');
}

//Header functions 
function openHeader() {
	var isHeaderOpen = $("#dtx-header").hasClass("open");
	
	if (!isHeaderOpen) {
		$("#dtx-header").addClass("open");
		$("#dtx-hamburger .dtx-spinner").addClass("open");
	} else {
		$("#dtx-header").removeClass("open");
		$("#dtx-hamburger .dtx-spinner").removeClass("open");
	}
}
function activateMenuHover(number) {
	var activateLine = $("#dtx-menu-line" + number),
		activatePicture = $("#dtx-header-2" + number);
	
	//Remove every active class
	$(".dtx-menu-line").removeClass("active");
	$(".dtx-header-2-panel").removeClass("active");
	
	//Activate class
	activateLine.addClass("active")
	activatePicture.addClass("active");
}