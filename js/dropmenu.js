/*$(document).ready(function () {

    $('.header-nav li').hover(
      function() {
        $('ul', this).slideDown(110);
      },
      function() {
        $('ul', this).slideUp(110);
      }
    );
  });*/



$(document).ready(function () {
  $(".header-nav li:first-child a").click(function (e) {
    var dropdown = $(this).parent().next();
    $('.dropdown').not(dropdown).slideDown('slow');
      e.preventDefault();
  })
});


