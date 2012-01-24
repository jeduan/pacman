var $el = $("#pacman");

if (Modernizr.canvas && Modernizr.localstorage && 
    Modernizr.audio && (Modernizr.audio.ogg || Modernizr.audio.mp3)) {
  window.setTimeout(function () { PACMAN.init($el.get(0), "./"); }, 0);
} else { 
  $el.html = "Sorry, needs a decent browser<br /><small>" + 
    "(Firefox, Chrome, Opera or Safari)</small>";
}
