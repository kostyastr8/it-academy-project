$(document).ready(function(){
  var $slider = $('.slider-container');


  $slider.slick({
    arrows:false,
    autoplay:true,
    dots:true
});
});

$(document).ready(function(){
var $slider2 = $('.slidercontent');


$slider2.slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:true,
  autoplay:true,
});
});
