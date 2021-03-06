
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




if (window.innerWidth > 768) {
	var tl = new TimelineMax();

	tl.add(
		TweenMax.to(".blueX svg", 1, {opacity: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut}),
		// "-=0.3"
		);
		
	tl.add(
		TweenMax.to(".heroImage .heroImageContainer", 1, {opacity: 0, transformOrigin: "50%, 50%", ease:Power2.easeInOut}),
		// "-=0.3"
		);
			
	tl.add(
		TweenMax.to(".blueX", 1, {scale: 0.5, transformOrigin: "50%, 47%", ease:Power2.easeInOut}),
		// "-=0.3"
		);
	
		
	tl.add(
		TweenMax.to('.blueX', 1, { backgroundColor: "#39C8ED", transformOrigin: "50%, 50%", ease:Power2.easeInOut}),
		"-=2"
		);
	
	tl.add(
		TweenMax.from(".blueX svg text", 1, {scale: 3, transformOrigin: "50%, 47%", ease:Power2.easeInOut}),
		"-=2"
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

	//picture Swap/pull
	$(function (){
		var scene = new ScrollMagic.Scene({triggerElement: "#drag", triggerHook: "onLeave"})
		.setPin("#drag")
		
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
	var scene = new ScrollMagic.Scene({triggerElement: ".portraitContainer", offset: 1000})
					.setTween(tween)
					
					.addTo(controller);			
  } else{	
	// define images
	var images = [
		"../images/mobileXNewMan.png",
		"../images/mobileXNewChild.png"
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
			  $(".mobileX").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);
	
	
	
	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: ".portraitContainer", offset: 200})
					.setTween(tween)
					
					.addTo(controller);
  }
