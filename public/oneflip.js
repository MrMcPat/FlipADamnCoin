//jshint esversion:6

//Hides certain HTML elements to be animation later.
$('.coin-img1').hide();
$('.coin-img2').hide();
$('.result-heads').hide();
$('.result-tails').hide();
$('.continue-button').hide();

//Drop down menu for user to choose a coin of their liking.
function coinSelect() {
  let coinSelected = $('#coin-dropdown').val();

  if (coinSelected === "Quarter") {
    $('.coin-img1').show().attr("src", "images/quarterh.jpg");
    $('.coin-img2').show().attr("src", "images/quartert.jpg");
  } else if (coinSelected === "Bitcoin") {
    $('.coin-img1').show().attr("src", "images/bitcoinh.png");
    $('.coin-img2').show().attr("src", "images/bitcoint.png");
  } else if (coinSelected === "Dogecoin") {
    $('.coin-img1').show().attr("src", "images/dogecoinh.png");
    $('.coin-img2').show().attr("src", "images/dogecoint.png");
  } else {
    $('.coin-img1').hide();
    $('.coin-img2').hide();
  }
}

//COIN FLIP TIME!!!
$('#coin').on('click', function() {
  let flipResult = Math.random();
  $('.result-heads').hide();
  $('.result-tails').hide();
  $('.continue-button').hide();
  $('#coin').removeClass();
  setTimeout(function() {
    $('.result').text("Flipping...");
    if (flipResult <= 0.5) {
      $('#coin').addClass('heads');
      setTimeout(function() {
        $('.result').text("Heads");
        $('.result-heads').addClass('appear-mid').show();
        $('.continue-button').addClass('appear-mid').show();
        $('.result-button').val("Heads (One flip)");
      }, 3000);
    } else {
      $('#coin').addClass('tails');
      setTimeout(function() {
        $('.result').text("Tails");
        $('.result-tails').addClass('appear-mid').show();
        $('.continue-button').addClass('appear-mid').show();
          $('.result-button').val("Tails (One flip)");
      }, 3000);
    }
  }, 100);
});
