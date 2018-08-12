$(".wrapper li").on("click", function() {
  var index = $(this).index() + 1;
  $(".wrapper")[0].className = $(".wrapper")[0].className.replace(/\brotated-\d+\b/g, '');
  $(".wrapper").addClass("rotated-" + index);
  $('.active').addClass('animated');
  $('.active').removeClass("active");
  $(this).find("span").addClass("active");
  $(this).find("span").removeClass('animated');
  if ( $(this).hasClass("apps") ) {
    $(".brandCont").hide();
    $(".webCont").hide();
    $(".appCont").show('ease');
  } else if ( $(this).hasClass("brand") ) {
    $(".appCont").hide();
    $(".webCont").hide();
    $(".brandCont").show('ease');
  } else if ( $(this).hasClass("web") ) {
    $(".appCont").hide();
    $(".brandCont").hide();
    $(".webCont").show('ease');
  }
});
$(".brandCont").hide();
$(".webCont").hide();
