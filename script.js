$(document).ready(function() {
  welcomeMessage();
  menuHover();
  menuShake();
  menuHomeClick();
  menuAboutClick();
  menuSkillsClick();
  menuProjectsClick();
  menuContactClick();
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
    $(this).effect('shake', {
      times: 3, distance: 2
    }, 200);
  });
}

const menuHomeClick = function() {
  $('.home-button').on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });
}

const menuAboutClick = function() {
  $('.about-button').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.about.section').offset().top - 45
    }, 500);
  });
}

const menuSkillsClick = function() {
  $('.skills-button').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.skills.section').offset().top - 45
    }, 500);
  });
}

const menuProjectsClick = function() {
  $('.projects-button').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.projects.section').offset().top - 45
    }, 500);
  });
}

const menuContactClick = function() {
  $('.contact-button').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.contact.section').offset().top - 45
    }, 500);
  });
}