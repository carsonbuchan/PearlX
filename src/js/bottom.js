        $(function() {
            var header = $(".bottomHero");
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
            
                if (scroll >= 8000) {
                    header.removeClass('bottomHero').addClass("bottomHeroTrans");
                    $(".portraitX").attr("src","../images/childX.png");
                } 
            });
        });
        