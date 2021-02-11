$(document).ready(function(){

    $(window).on('load',function(){
        $('.preloader').addClass('complete');
    })
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeClass("stickyadd");
        }
    })

    var typed = new Typed(".element",{
        strings: ["Ayush Sinha","a Web Developer","a Android Developer","a Logo Designer"],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
            var p =document.querySelectorAll('.progress-bar');
            p[0].setAttribute("style","width:90%;transition:1s all");
            p[1].setAttribute("style","width:50%;transition:1.5s all");
            p[2].setAttribute("style","width:70%;transition:1.7s all");
            p[3].setAttribute("style","width:40%;transition:1.9s all");
            p[4].setAttribute("style","width:10%;transition:1.2s all");
            p[5].setAttribute("style","width:100%;transition:1.4s all");
            p[6].setAttribute("style","width:20%;transition:1.3s all");
        },offset:'90%'
      });

      $(".owl-carousel").owlCarousel({
          loop:true,
          autoplay:true,
          autoplayTimeout:2000,
          items:1
      })

      var filterized = $('.filter-container').filterizr({
          animationDuration : 0.5,
      });



    


})