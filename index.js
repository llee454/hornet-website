/*
  This module contains custom site-specific
  javascript that is called after all of the other
  block handlers have been executed.
*/

MODULE_LOAD_HANDLERS.add (
  function (done) {
  // I. Display/hide the Back to Top tab.
  setInterval (main_displayBackToTop, 1000);

  // II. Set the Back to Top tab's click event handler.
  $('#back_to_top').click (
    function (event) {
      event.preventDefault ();
      $('html, body').animate ({
        scrollTop: $('#top').offset ().top
      });
  });

  // III. control the mobile menu.
  $('#mobile-menu-header').click (function () {
    $('#mobile-menu-content').slideToggle ();
  })

  setTimeout(function () {
    $('#hero-video').play ();
  }, 1500);

  done (null);
});

// This function hides/displays the Back to Top tab.
function main_displayBackToTop () {
  if ($(window).scrollTop() > 200) {
    $('#back_to_top').animate ({opacity: 1});
  } else {
    $('#back_to_top').animate ({opacity: 0});
  }
}

$(window).scroll (function () {
  var offset = $(window).scrollTop();
  sectionOffset = $('#portfolio').offset ();
  threshold = 1000;
  backgroundOffset = 500;
  displacement = offset - sectionOffset.top + threshold;
  if (displacement > 0) {
    x = Math.floor (displacement / 4) - backgroundOffset;
    $('#portfolio-parallax-background').css ('top', x + 'px');
  }
});
