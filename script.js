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
  $('.one, .two, .three').each(function(msg) {
    $(this).delay(msg * 1000).fadeIn(2000, function() {
      $('#welcome').delay(1000).fadeOut(2000, function() {
        $('html, body').css("background", "white");
        $('#welcome').remove();
        $('#content').fadeIn(2000);
      });
    });
  });
}

const imageSlider = function() {
  let $active = $('#slider > .active');
  let $next = $active.next().length > 0 ? $active.next() : $('#slider > .bg-image:first'); //if an element exists after 'active', set $next as the next element, else  set $next as the first element
  $next.css('z-index', 2); //move the next image up the pile
  $active.fadeOut(1500, function() { //fade out the top image
    $active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
    $next.css('z-index', 3).addClass('active'); //make the next image the top one
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
