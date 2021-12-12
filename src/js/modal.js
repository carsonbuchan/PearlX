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
								offset: 150, // start a little later
								triggerHook: 0.5,
							})
							.setClassToggle(revealElements[i], "visible") // add class toggle
							.addTo(controller);
		}


		// $(function () { // wait for document ready
		// 	// build scene
		// 	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
		// 					.setPin("#pin1")
		// 					.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
		// 					.addTo(controller);
		// });


		// $(document).scroll(function(){
		// 	var scrollTop = $(".bottomHero").scrollTop();
		// 	if(scrollTop > 150){
		// 		$(".bottomHeroTrans").fadeIn();
		// 	}
		// 	else
		// 		$(".bottomHeroTrans").fadeOut();
		// })