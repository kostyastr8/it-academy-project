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


$(document).ready(function(){
  var $productpreview = $('.productslider');


  $productpreview.slick({
    infinite: true,
    vertical:true,
    verticalSwiping: true,
    slidesToShow: 3,
    arrows:false,
    autoplay:false,
    responsive:[
      {
        breakpoint:1140,
        settings:{
          vertical:false,
          verticalSwiping: false,
          slidesToShow: 3,
          dots:true
        }
      },
      {
        breakpoint:770,
        settings:{
          infinite: false,
          vertical:false,
          verticalSwiping: false,
          slidesToShow: 1,
          dots:true
        }
      }
    ]
  });
});

var $slider3 = $('.featured-product-list-product-grid');
$(".sliderhead .prew").on('click', function(e) {
  e.preventDefault();
  $slider3.slick('slickPrev');
});

$(".sliderhead .next").on('click', function(e) {
  e.preventDefault();
  $slider3.slick('slickNext');
});


$slider3.slick({
  infinite: true,
  slidesToShow: 4,
  arrows:false,
  autoplay:true,
  dots:false,
  responsive:[
    {
      breakpoint:1024,
      settings: {
        slidesToShow: 3,
        dots: true
      }
    },
    {
      breakpoint:769,
      settings: {
        slidesToShow: 2,
        dots: true
      }
    },
    {
      breakpoint: 415,
      settings: {
        infinite: false,
        dots: true,
        slidesToShow: 1
      }
    }
  ]
});


