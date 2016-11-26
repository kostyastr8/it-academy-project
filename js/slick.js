$(document).ready(function(){
  var $slider = $('.slider-container');
  var $slider2 = $('.slidercontent');


  $slider.slick({
    arrows:false,
    autoplay:true,
    dots:true
});


  $(".sliderhead .prew").on('click', function(e) {
    e.preventDefault();
    $slider2.slick('slickPrev');
  });

  $(".sliderhead .next").on('click', function(e) {
    e.preventDefault();
    $slider2.slick('slickNext');
  });

  $slider2.slick({
    infinite: true,
    slidesToShow: 4,
    arrows:false,
    autoplay:true,
    responsive:[
      {
        breakpoint:1200,
        settings:{
          slidesToShow:3,
          dots:true
        }
      },
      {
      breakpoint:960,
    settings:{
    slidesToShow:2,
      dots:true
    }
  }
    ]
  });
});
