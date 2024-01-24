$(document).ready(function(){
     //main banner slider
     var mainBannerSlider = $('#mainBannerSlider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
      });

      //main banner custom nav buttons
      $('.web-main-banner .nav-prev').click(function () {
        mainBannerSlider.trigger('prev.owl.carousel');
      })
      $('.web-main-banner .nav-next').click(function () {
        console.log("next click");
        mainBannerSlider.trigger('next.owl.carousel');
      })
      
      //scroll to main content
      $("#scrollToMainContent").click(function () {
        $("html, body").animate({
          scrollTop: $("#mainContent").offset().top
        }, 0);
      })
})