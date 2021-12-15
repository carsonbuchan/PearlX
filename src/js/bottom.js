        // $(function() {
        //     var header = $(".bottomHero");
        //     $(window).scroll(function() {    
        //         var scroll = $(window).scrollTop();
            
        //         if (scroll >= 7000) {
        //             header.removeClass('sticky').addClass("stickyChange");
        //             $(".portraitX").attr("src","../images/wideGirl2.png");
        //         } 
        //         else{
                    
        //             $(".portraitX").attr("src","../images/wideMan2.png");
        //         }
        //     });
        // });
        

        // define images
// build scene
// var scene = new ScrollMagic.Scene({triggerElement: ".portraitContainer", offset: 2000})
// 				.setTween(tween)
// 				.addIndicators() // add indicators (requires plugin)
// 				.addTo(controller);

// 				var pics = [
// 					"../images/textWall.png",
// 					"../images/textWallChange.png"
// 				];
				
// 				// TweenMax can tween any property of any object. We use this object to cycle through the array
// 				var obj = {curImg: 0};
				
// 				// create tween
// 				var tween = TweenMax.to(obj, 0.5,
// 					{
// 						curImg: pics.length - 1,	// animate propery curImg to number of images
// 						roundProps: "curImg",				// only integers so it can be used as an array index							// repeat 3 times
// 						immediateRender: true,			// load first image automatically
// 						ease: Linear.easeNone,			// show every image the same ammount of time
// 						onUpdate: function () {
// 						  $(".sticky").attr("src", pics[obj.curImg]); // set the image source
// 						}
// 					}
// 				);
				
				var controller = new ScrollMagic.Controller();
				
// 				// build scene
// 				var scene = new ScrollMagic.Scene({triggerElement: ".portraitContainer", offset: 2000})
// 								.setTween(tween)
// 								.addIndicators() // add indicators (requires plugin)
// 								.addTo(controller);

var scene = new ScrollMagic.Scene({
    triggerElement: ".bottomHero", offset: 1600
})
.setTween (".stickyChange", {opacity: 1})
.reverse(false)
.addTo (controller);

var scene = new ScrollMagic.Scene({
    triggerElement: ".bottomHero", offset: 1600
})
.setTween (".sticky", {opacity: 0})
.reverse(false)
.addTo (controller);