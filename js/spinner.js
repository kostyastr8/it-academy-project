
$(document).ready(function () {
  $(".spinner .dec").on("click", function(){
    var $spinerVal = $(this).closest('.spinner').find('.spinner-val');
    $spinerVal.val(+$spinerVal.val() - 1);
  });
  $(".spinner .inc").on("click", function(){
    var $spinerVal = $(this).closest('.spinner').find('.spinner-val');
    $spinerVal.val(+$spinerVal.val() + 1);
  });
});

