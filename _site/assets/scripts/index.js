// jQuery to make the navbar function
$('.navbar-burger').on('click', function () {
  if ( $('.navbar-burger').hasClass('is-active') ) {
    $('.navbar-burger').removeClass('is-active');
    $('.navbar-menu').removeClass('is-active');
  } else {
    $('.navbar-burger').addClass('is-active');
    $('.navbar-menu').addClass('is-active');
  }
});