$(document).ready(function() {
  welcomeMessage();
  menuHover();
  menuShake();
});

const welcomeMessage = function() {
  $('#content').hide();
  $('.one, .two, .three').each(function(divs) {
    $(this).delay(divs * 1500).fadeIn(2000, function() {
      $('#welcome').delay(1000).fadeOut(2000, function() {
        $('#welcome').remove();
        $('#content').fadeIn(1000);
      });
    });
  });
}

const menuHover = function() {
  $('.nav-menu').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
}

const menuShake = function() {
  $('.nav-menu').on('click', function() {
    $(this).effect('shake', {times: 3, distance: 2}, 200);
  });
}