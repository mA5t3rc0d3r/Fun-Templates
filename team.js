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
});
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

//Controlpanel functions
function setControlPanel() {
	if ($('#ControlBar_ControlPanel').length > 0) {
		$('#dtx-hamburger').css('margin-top','53px');
	}	
}

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

//Start functions
function startLoader() {
	var counter = 0,
		c = 0,
		i = setInterval(function() {
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

//Smooth scrolling fix
function fixSmoothScrolling() {
	var windowWidth = $(window).width();
	
	if(windowWidth > 1024) {
		$('body').on("mousewheel", function() {
			//remove default behavior
			event.preventDefault(); 

			//scroll without smoothing
			var wheelDelta = event.wheelDelta,
				currentScrollPosition = window.pageYOffset;

			window.scrollTo(0, currentScrollPosition - wheelDelta);
		});	
	}
}

//Scrollmagic functions
function startScrollMagic() { 
	if($(window).width() > 1024) {
		//Controller
		var scrollController = new ScrollMagic.Controller();	

		//Tweens
		var scrollAnimation = new TimelineMax().add([ 
			/* Animation 1 */
			TweenMax.to("#dtx-t1-scroll", 0.30, {
				opacity:0,
				y:"300px",
				ease:Sine.easeOut
			}),
			TweenMax.to("#dtx-t2-textoverlay", 0.30, {
				x:"-100%",
				ease:Sine.easeOut
			}),
			/* Animation 2 */
			TweenMax.to("#dtx-t2-panel-text", 0.30, {
				opacity:1,
				top:"0%",
				ease:Sine.easeOut,
				delay:0.10
			}),
			TweenMax.to("#dtx-t2-logo", 0.30, {
				x:"100%",
				ease:Sine.easeOut,
				delay:0.10
			}),
			/* Animation 3 */
			TweenMax.to("#dtx-t2-panel-text", 0.30, {
				top:"-100%",
				ease:Sine.easeOut,
				delay:0.45
			}),
			TweenMax.to("#dtx-teamsection1", 0.30, {
				top:"10%",
				left:"10%",
				height:"80%",
				width:"80%",
				ease:Sine.easeOut,
				delay:0.55
			}),
			TweenMax.to("#dtx-t3-outer", 0.30, {
				top:"10%",
				left:"10%",
				height:"80%",
				width:"80%",
				ease:Sine.easeOut,
				delay:0.55
			}),
			TweenMax.to("#dtx-teamsection2", 0.30, {
				top:"5%",
				left:"5%",
				height:"90%",
				width:"90%",
				ease:Sine.easeOut,
				delay:0.55
			}),
			TweenMax.to("#dtx-t2-logo", 0.30, {
				opacity:1,
				ease:Sine.easeOut,
				delay:0.55
			}),
			/* Animation 4 */
			TweenMax.to("#dtx-teamsection1", 0.30, {
				left:"-110%",
				ease:Sine.easeOut,
				delay:0.85
			}),
			TweenMax.to("#dtx-teamsection3", 0.30, {
				x:"-100%",
				ease:Sine.easeOut,
				delay:0.85
			}),
			/* Animation 5 */
			TweenMax.to("#dtx-t3-outer", 0.30, {
				top:"0%",
				left:"0%",
				height:"100%",
				width:"100%",
				ease:Sine.easeOut,
				delay:1.10
			}),
			TweenMax.to("#dtx-teamsection2", 0.30, {
				top:"0%",
				left:"0%",
				height:"100%",
				width:"100%",
				ease:Sine.easeOut,
				delay:1.10
			}),
			TweenMax.to("#dtx-t2-logo", 0.30, {
				opacity:0.75,
				ease:Sine.easeOut,
				delay:1.10
			}),
			/* Animation 6 */
			TweenMax.to("#dtx-t4-panel-text", 0.30, {
				opacity:1,
				top:"0%",
				ease:Sine.easeOut,
				delay:1.25
			}),
			/* Animation 7 */
			TweenMax.to("#dtx-t2-textoverlay", 0.30, {
				x:"100%",
				ease:Sine.easeOut,
				delay:1.65
			}),
			TweenMax.to("#dtx-t4-panel", 0.30, {
				opacity:0,
				x:"100%",
				ease:Sine.easeOut,
				delay:1.60
			})		
		]);

		//Scene
		var scrollScene = new ScrollMagic.Scene({
			triggerElement:"#dtx-wrapper",
			triggerHook:"onLeave",
			duration:$(window).height() * 8
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