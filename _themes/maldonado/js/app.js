// --------------------------------------------------------------------------
//  Main Javascript File
// --------------------------------------------------------------------------
$(function() {

  //  Main Navigation
  // ----------------------------------------------
  $('.nav-toggle').on('click', function() {

    $("body").toggleClass("nav-open");

    var menu = $('.main-nav');

    if (menu.hasClass("open")) {
        menu.removeClass("open animated slideInLeft");
        menu.addClass("close animated slideOutLeft");
      } else {
        menu.removeClass("close animated slideOutLeft");
        menu.addClass("open animated slideInLeft");
    }

      $(window).resize( function() {

        var w = $(window).width();

        if(w > 780 && menu.hasClass('close')) {
            menu.removeClass('close animated slideOutLeft');
        }

      });

  });

  //  Blog Action Bar
  // ----------------------------------------------
  $(".action-bar-trigger").on("click", function( e ){
    e.preventDefault();
    $(".blog-action-bar").slideToggle('fast');
    $(".action-bar-trigger").toggleClass("close");
  });
  
});

jQuery(window).on('load', function() {

  //  Masonry - "on load" - to prevent overlap bug.
  // ----------------------------------------------

  //blog listing & Categories
  $('.entry-listing').masonry({
    // options
    columnWidth: '.entry-item',
    itemSelector: '.entry-item'
  });

  //archives
  $('.archives-listing').masonry({
    // options
    columnWidth: '.archive-item',
    itemSelector: '.archive-item'
  });

});
