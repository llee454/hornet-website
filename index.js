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

  $('#intro-video')
    .on ('play', function (event) {
      ga ('send', 'event', 'intro video', 'play');
    })
    .on ('ended', function (event) {
      ga ('send', 'event', 'intro video', 'ended');
    });

  var viewedCaseStudyDetails = false;
  $('#case-study-details').on ('click', function () {
    if (!viewedCaseStudyDetails) {
      viewedCaseStudyDetails = true;
      ga ('send', 'event', 'case study details', 'view');
    }
  });

  var viewedPortfolioDetails = false;
  $('#portfolio-details').on ('click', function () {
    if (!viewedPortfolioDetails) {
      viewedPortfolioDetails = true;
      ga ('send', 'event', 'portfolio details', 'view');
    }
  });

  $('#code-sample').on ('click', function () {
    ga ('send', 'event', 'code sample', 'click');
  });

  var searchCheckInterval = 1000;
  var lastSendTime = 0;
  setInterval (function () {
    var currentTime = Date.now ();
    Object.values (search_INTERFACES).forEach (function (interface) {
      if (lastSendTime < interface.lastQueryTime &&
          interface.lastQueryTime < currentTime - searchCheckInterval) {
        lastSendTime = currentTime;
        ga ('send', 'event', 'faq search', interface.query);
      }
    });
  }, searchCheckInterval);

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
