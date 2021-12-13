var controller = new ScrollMagic.Controller();

var revealElements = document.getElementsByClassName("cardPic");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
								offset: 150, // start a little later
								triggerHook: 0.5,
							})
							.setClassToggle(revealElements[i], "visible") // add class toggle
							.addTo(controller);
		}
		var revealElements = document.getElementsByClassName("cardPicLeft");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
								offset: 200, // start a little later
								triggerHook: 0.5,
							})
							.setClassToggle(revealElements[i], "visible") // add class toggle
							.addTo(controller);
		}


var tl = new TimelineMax();

tl.add(
	TweenMax.to('.heroImage', 1, {scale: 0.5, transformOrigin: "50%, 50%", ease:Power2.easeInOut})
);

tl.add(
	TweenMax.to(".blueX", 1, {scale: 0.25, transformOrigin: "50%, 50%", ease:Power2.easeInOut}),
	"-=1"
);

// const controller = new ScrollMagic.Controller();
var startpin = new ScrollMagic.Scene({
	duration: 800
})
.setPin(".topHero")
.addTo(controller);

new ScrollMagic.Scene({
	duration: 500
})
.setTween(tl)
.addTo(controller);

			// var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
			// 				.setPin("#pin1")
			// 				.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
			// 				.addTo(controller);
