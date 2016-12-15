


  $(".productslide a").on("click", function (e) {
    (e).preventDefault();
    var imglink = $(this).attr("href");

      $("#largepreview").attr("src", imglink );

  });

  $(document).ready(function() {
    $(".fancybox").fancybox();
  });
