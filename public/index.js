//Hides elements for them to be animated later.
$('.outcome-form').hide();
$('.choose-flip').hide();
$('.row').hide();

//Introduction, tells user to click on coins to start the app.
$('i').on('click', function() {
  $('.starting-text').addClass('disappear-mid');
  setTimeout(function() {
    $('.starting-text').hide();
    $('.outcome-form').show();
    $('.outcome-form').addClass('appear-mid');
  }, 500);

});

//Two text boxes appear, prompting the user to enter their decisions for heads and tails.
//After submitting, the user can choose between three coin flip modes.
$('.submit-button').on('click', function() {
  if($('#heads').val().length === 0 || $('#tails').val().length === 0) {
    alert("Please enter your decisions.");
  } else {
    setTimeout(function() {
      $('.outcome-form').hide();
      $('.choose-flip').addClass('appear-mid').show();
      $('.row').addClass('appear-mid').show();
    }, 500);
  }
});
