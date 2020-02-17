$(document).ready(function (){
  
  // ------- Listeners active only after page fully loaded --------

  $(".navbar-about").click(function (){
    $('html, body').animate({
        scrollTop: ($("#about").offset().top - 100)
    }, 1000);
  });

  $(".navbar-tracks").click(function (){
    $('html, body').animate({
        scrollTop: ($("#track-info").offset().top - 100)
    }, 1000);
  });

  $(".navbar-resources").click(function (){
    $('html, body').animate({
        scrollTop: $("#resources").offset().top
    }, 1000);
  });

  $(".navbar-sponsors").click(function (){
    $('html, body').animate({
        scrollTop: $("#sponsors").offset().top
    }, 1000);
  });

  $(".navbar-faq").click(function (){
    $('html, body').animate({
        scrollTop: ($("#faq").offset().top - 100)
    }, 1000);
  });

  // Change header on scroll but not if navbar is open
  var navbarOpen = false;
  $(window).scroll(function() {
    if ($('#header').hasClass('header-scroll-animate')) {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else if (!navbarOpen) {
        $('#header').removeClass('header-scrolled');
      }
    }
  });
  
  $("#hamburger").click(function() {
    $('#header').addClass('header-scrolled');
    navbarOpen = !navbarOpen;
    if (navbarOpen) {
      $('#mlh-trust-badge').animate({
        opacity: '0',
      }, 100)
    } else {
      $('#mlh-trust-badge').animate({
        opacity: '1',
      }, 100)
    }
  })
});
