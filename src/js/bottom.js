        $(function() {
            var header = $(".bottomHero");
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
            
                if (scroll >= 8000) {
                    header.removeClass('bottomHero').addClass("bottomHeroTrans");
                } 
            });
        });
        $(function() {
            var portrait = $(".portraitX");
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
            
                if (scroll >= 8000) {
                    portrait.removeClass('portraitX').addClass("portraitChildX");
                } 
            });
        });