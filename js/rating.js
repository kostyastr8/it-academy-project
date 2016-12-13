$(document).ready( function() {
  $('.rating').on('click', function (e) {
    (e).preventDefault();
    $(this).removeClass("stars").addClass("starsactive");
  });
});
