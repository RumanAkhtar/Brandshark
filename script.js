$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Front-End Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Front-End Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



gsap.from(".service",{
    opacity:0,
    stagger:0.4,
    y:40,
    delay:1,
    duration:1,
    scrollTrigger:{
      scroller:"body",
      trigger: ".scroller",
      start:"top 80%",
      // markers:true
    }
  })

  gsap.from(".about-us",{
    opacity:0,
    stagger:0.4,
    y:40,
    delay:1,
    duration:1,
    scrollTrigger:{
      scroller:"body",
      trigger: ".service-2",
      start:"top 80%",
      // markers:true
    }
  })


  gsap.from(".service-2",{
    opacity:0,
    stagger:0.4,
    y:40,
    delay:1,
    duration:2,
    scrollTrigger:{
      scroller:"body",
      trigger: ".service",
      start:"top 50%",
      // markers:true
    }
  })

  gsap.from(".our-team",{
    opacity:0,
    stagger:0.4,
    y:40,
    delay:1,
    duration:2,
    scrollTrigger:{
      scroller:"body",
      trigger: ".about-us",
      start:"top 50%",
      // markers:true
    }
  })

  gsap.from(".testimonials",{
    opacity:0,
    stagger:0.4,
    y:40,
    delay:1,
    duration:2,
    scrollTrigger:{
      scroller:"body",
      trigger: ".our-team",
      start:"top 50%",
      // markers:true
    }
  })

  gsap.from(".blog",{
    opacity:0,
    stagger:0.4,
    y:40,
    delay:1,
    duration:2,
    scrollTrigger:{
      scroller:"body",
      trigger: ".testimonials",
      start:"top 50%",
      // markers:true
    }
  })

  gsap.from(".contact",{
    opacity:0,
    stagger:0.4,
    y:40,
    delay:1,
    duration:2,
    scrollTrigger:{
      scroller:"body",
      trigger: ".blog",
      start:"top 50%",
      // markers:true
    }
  })

  gsap.from(".footer",{
    opacity:0,
    stagger:0.4,
    y:40,
    delay:1,
    duration:2,
    scrollTrigger:{
      scroller:"body",
      trigger: ".contact",
      start:"top 50%",
      // markers:true
    }
  })