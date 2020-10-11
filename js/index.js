// Navigation Bar Animation

(function ($) {
    $(document).ready(function(){

      // Hides the navigation bar
      $("#headerNavbar").hide();

      // fade in .navbar
      $(function () {
          $(window).scroll(function() {
                  
              var showNav = $("#welcome").height()
              
              
            // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > showNav-25) {
                  $('#headerNavbar').fadeIn();
              } else {
                  $('#headerNavbar').fadeOut();
              }
          });
      });

  });
    }(jQuery));

// End of Animation