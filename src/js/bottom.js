        $(function() {
            var header = $(".bottomHero");
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
            
                if (scroll >= 7000) {
                    header.removeClass('bottomHero').addClass("bottomHeroTrans");
                    $(".portraitX").attr("src","../images/wideGirl.png");
                } 
                else{
                    
                    $(".portraitX").attr("src","../images/wideMan.png");
                }
            });
        });
        