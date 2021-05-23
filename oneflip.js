//jshint esversion:6
$('.coin-img1').hide();
$('.coin-img2').hide();

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


$('#coin').on('click', function() {
  let flipResult = Math.random();
  $('#coin').removeClass();
  setTimeout(function() {
    $('.result').text("Flipping...");
    if (flipResult <= 0.5) {
      $('#coin').addClass('heads');
      setTimeout(function() {
        $('.result').text("Heads win!");
      }, 3000);
    } else {
      $('#coin').addClass('tails');
      setTimeout(function() {
        $('.result').text("Tails win!");
      }, 3000);
    }
  }, 100);
});
