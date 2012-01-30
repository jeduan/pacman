$(function() {
  var $el = $("#pacman"),
    $start = $('#start'),
    $img = $('<div/>').appendTo('#pacman').addClass('message').hide(),
    display = function(to) {
      var $wrap = $('.inner-wrap');
      switch (to) {
        case 'start':
          $wrap.css('left', 0);
          break;
        case 'scores':
          $wrap.css('left', '-684px');
          setTimeout(function() {
            $('#name_input').focus();
          }, 1000)
          break;
        default:
          $wrap.css('left', '-342px');
          $('#name_input').val('');
          $img.hide();
      }
    };

  $('body').on('pacman:loaded', function() {
    $start.text('Press N');
  }).on('pacman:newgame', function() {
    display();
  }).on('pacman:dead', function() {
    display('scores');
  }).on('pacman:image:enable', function() {
    $img.fadeIn('slow');
    console.log('mostrando imagen');
  }).on('pacman:image:disable', function() {
    $img.hide();
    console.log('escondiendo imagen');
  });


  if (Modernizr.canvas && Modernizr.localstorage && 
      Modernizr.audio && (Modernizr.audio.ogg || Modernizr.audio.mp3)) {
    window.setTimeout(function () { PACMAN.init($el.get(0), "./"); }, 0);
  } else { 
    $start.html = "Sorry, needs a decent browser<br /><small>" + 
      "(Firefox, Chrome, Opera or Safari)</small>";
  }
});
