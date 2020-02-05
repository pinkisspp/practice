$(function(){
  //--------------ここから　script.js-----------------------

  // ----------------header-------------------------------- 
  $('.why').click(function() {
    var $answer = $(this).find('.whyAnswer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
    } else {
      $answer.addClass('open'); 
      $answer.slideDown();
    }
  });
  // ----------------main----------------------------------
  $('.accordion').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    } else {
      $answer.addClass('open'); 
      $answer.slideDown();
      $(this).find('span').text('-');
    }
  });



// --------------------ここまで---------------------------
});