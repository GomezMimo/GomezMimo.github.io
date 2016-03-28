																/*Exercises to do*/

/*Exercise on keyup event and data values*/
$(document).ready(function() {
  $('#nights').on('keyup', function() {    
    var nights = +$(this).val();
    var dailyPrice = +$(this).closest('.tour').data('daily-price');
    $('#total').text(nights * dailyPrice);
    $('#nights-count').text($(this).val());
  });
});

/*Exercise on focus */
$(document).ready(function() {
  $('#nights').on('keyup', function() {
    var nights = +$(this).val();
    var dailyPrice = +$(this).closest(".tour").data("daily-price");
    $('#total').text(nights * dailyPrice);
    $('#nights-count').text($(this).val());
  });
  $('#nights').on('focus', function(){
  	$(this).val(7);
  });
});

/**/

$(document).ready(function() {
  $('.see-photos').on('click', function() {
  	$(this).closest('.tour').find('.photos').slideToggle();  
  });
});

/**/