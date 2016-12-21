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



$(function () {
  var $headerLi = $('li').has('.dropdown');
  $headerLi.find('a:first').on('click', function (e) {
    e.preventDefault();
    $('li').has('.dropdown').toggleClass('open');
    $(this).siblings('.dropdown').stop().slideToggle();
  });
});


