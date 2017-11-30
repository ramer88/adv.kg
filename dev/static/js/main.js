$(document).ready(function () {
  /* sandwich-menu*/
  $('.sandwich-menu').click(function() {
    $(this).toggleClass('active');
    $('ul.header-nav').toggleClass('sandwich-menu-link');
  });
  /* sandwich-menu end*/

  // fixmenu
  $(function(){
    $(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 250) $("#fixmenu").css({top: '0',
                                      left: '0',
                                      position: 'relative',
                                      width: '100%',
                                      paddingTop: '11px',
                                      paddingLeft: '15px',
                                      paddingRight: '15px',
                                      paddingBottom: '11px',
                                      backgroundColor: '#333',
                                      zIndex: '3'});
    else $("#fixmenu").css({top: '0',
                            left: '0',
                            position: 'fixed',
                            width: '100%',
                            paddingTop: '8px',
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            paddingBottom: '11px',
                            backgroundColor: 'rgba(0,0,0,.8)',
                            zIndex: '3'});
    });
  });
  // fixmenu end

/*  // activ-link menu
  $('ul.header-nav li a').click(function() {
    $(this).toggleClass('active-link');
  });
    // activ-link menu end*/

// Кнопка на вверх
  var limit     = $(window).height()/3,
        $backToTop = $('#back-to-top');

    $(window).scroll(function () {
        if ( $(this).scrollTop() > limit ) {
            $backToTop.fadeIn();
        } else {
            $backToTop.fadeOut();
        }
    });

// scroll body to 0px on click
    $backToTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
    svg4everybody({});
});