$(document).ready(function() {
  welcomeMessage();
  setInterval('imageSlider()', 7000);
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

const imageSlider = function() {
  let $active = $('#slider .active');
  let $next = $active.next().length > 0 ? $active.next() : $('#slider > .bg-image:first');
  $next.css('z-index', 2);
  $active.fadeOut(1500, function() {
    $active.css('z-index', 1).fadeIn(1500).removeClass('active');
    $next.css('z-index', 3).addClass('active');
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
    if (window.matchMedia('(max-width: 750px)').matches) {
      $('html, body').animate({
        scrollTop: $('.about.section').offset().top - 115
      }, 500);
    } else {
      $('html, body').animate({
        scrollTop: $('.about.section').offset().top - 45
      }, 500);
    }
  });
}

const menuSkillsClick = function() {
  $('.skills-button').on('click', function() {
    if (window.matchMedia('(max-width: 750px)').matches) {
      $('html, body').animate({
        scrollTop: $('.skills.section').offset().top - 115
      }, 500);
    } else {
      $('html, body').animate({
        scrollTop: $('.skills.section').offset().top - 45
      }, 500);
    }
  });
}

const menuProjectsClick = function() {
  $('.projects-button').on('click', function() {
    if (window.matchMedia('(max-width: 750px)').matches) {
      $('html, body').animate({
        scrollTop: $('.projects.section').offset().top - 115
      }, 500);
    } else {
      $('html, body').animate({
        scrollTop: $('.projects.section').offset().top - 45
      }, 500);
    }
  });
}

const menuContactClick = function() {
  $('.contact-button').on('click', function() {
    if (window.matchMedia('(max-width: 750px)').matches) {
      $('html, body').animate({
        scrollTop: $('.contact.section').offset().top - 115
      }, 500);
    } else {
      $('html, body').animate({
        scrollTop: $('.contact.section').offset().top - 45
      }, 500);
    }
  });
}
