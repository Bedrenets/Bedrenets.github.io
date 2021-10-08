$(document).ready(function() {

    $(function(){
      $('.view-source .hide2').hide();
      $a = $('.view-source p');
      $a.on('click', function(event) {
        event.preventDefault();
        $a.not(this).next().slideUp(500);
        $(this).next().slideToggle(500);
      });
  });

});
