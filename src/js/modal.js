var controller = new ScrollMagic.Controller();

// var revealElements = document.getElementsByClassName("cardPic");
// 		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
// 			new ScrollMagic.Scene({
// 								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
// 								offset: 200, // start a little later
// 								triggerHook: 0.5,
// 							})
// 							.setClassToggle(revealElements[i], "visible") // add class toggle
// 							.addTo(controller);
// 		}
// 		var revealElements = document.getElementsByClassName("cardPicLeft");
// 		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
// 			new ScrollMagic.Scene({
// 								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
// 								offset: 200, // start a little later
// 								triggerHook: 0.5,
// 							})
// 							.setClassToggle(revealElements[i], "visible") // add class toggle
// 							.addTo(controller);
// 		}


var tl = new TimelineMax();

tl.add(
	TweenMax.to('.heroImage', 1, { backgroundColor: "#39C8ED", transformOrigin: "50%, 50%", ease:Power2.easeInOut})
);

tl.add(
	TweenMax.to(".blueX svg", 1, {opacity: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut}),
	"-=0.3"
);

tl.add(
	TweenMax.to(".heroImage .heroImageContainer", 1, {opacity: 0, transformOrigin: "50%, 50%", ease:Power2.easeInOut}),
	"-=0.3"
);

tl.add(
	TweenMax.to(".blueX svg text", 1, {scale: 0.1, transformOrigin: "50%, 47%", ease:Power2.easeInOut}),
	"-=0.3"
);

tl.add(
	TweenMax.to(".blueText", 1, {top: "50%", transformOrigin: "50%, 50%", ease:Power2.easeInOut}),
	"+=0.1"
);

// const controller = new ScrollMagic.Controller();
var startpin = new ScrollMagic.Scene({
	duration: 800
})
.setPin(".topHero")
.addTo(controller);

new ScrollMagic.Scene({
	duration: 800
})
.setTween(tl)
.addTo(controller);


$(function (){
	var scene = new ScrollMagic.Scene({triggerElement: "#drag", triggerHook: "onLeave"})
	.setPin("#drag")
	.addIndicators({name: "2 (duration: 0)"})
	.addTo (controller);
	var offset = scene.offset();
	

});

// define images
var images = [
	"../images/wideMan2.png",
	"../images/wideGirl2.png",
	
];

// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = {curImg: 0};

// create tween
var tween = TweenMax.to(obj, 1,
	{
		curImg: images.length - 1,	// animate propery curImg to number of images
		roundProps: "curImg",				// only integers so it can be used as an array index							// repeat 3 times
		immediateRender: true,			// load first image automatically
		ease: Linear.easeNone,			// show every image the same ammount of time
		onUpdate: function () {
		  $(".portraitX").attr("src", images[obj.curImg]); // set the image source
		}
	}
);



// build scene
var scene = new ScrollMagic.Scene({triggerElement: ".portraitContainer", offset: 1600})
				.setTween(tween)
				.addIndicators() // add indicators (requires plugin)
				.addTo(controller);