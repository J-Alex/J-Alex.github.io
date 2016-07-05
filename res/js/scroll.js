$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        //Esta linea analizala y adaptala
        var targetOffset = $target.offset().top - (parseInt(jQuery("header").css("padding-bottom"))*3.5);
        $('html,body')
        .stop().animate({scrollTop: targetOffset}, 600);
       return false;
      }
    }
  });
});
