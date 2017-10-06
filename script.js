$(document).ready(function() {
  welcomeListener();

});

const welcomeListener = function() {
  $('#content').hide();
  $('.one, .two, .three, .four').each(function(divs) {
    $(this).delay(divs * 1500).fadeIn(2000, function() {
      $('#welcome').delay(5000).fadeOut(2000, function() {
        $('#welcome').remove();
        $('#content').fadeIn(1000);
      });
    });
  });

}