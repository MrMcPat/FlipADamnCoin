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

for(let i = 2; i<6; i++){
  $('#coin-content'+i).hide();
}

let flipHeads = [];

$('#coin').on('click', function() {
  let flipResult = Math.random();
  $('#coin').removeClass();
  setTimeout(function() {
    $('.result').text("Flipping...");
    if (flipResult <= 0.5) {
      $('#coin').addClass('heads');
      setTimeout(function() {
        $('.result').text("Heads");
        flipHeads.push("Heads");
      }, 3000);
    } else {
      $('#coin').addClass('tails');
      setTimeout(function() {
        $('.result').text("Tails");
      }, 3000);
    }
    setTimeout(function() {
      $('#coin-content').addClass('move-left');
    }, 3000);
  }, 100);
  $('#coin').prop("onclick", null).off('click');
  setTimeout(function() {
    $('#coin-content2').show().addClass('appear-mid');
  }, 4000);
});

$('#coin2').on('click', function() {
  let flipResult = Math.random();
  $('#coin2').removeClass();
  setTimeout(function() {
    $('.result2').text("Flipping...");
    if (flipResult <= 0.5) {
      $('#coin2').addClass('heads2');
      setTimeout(function() {
        $('.result2').text("Heads");
        flipHeads.push("Heads");
      }, 3000);
    } else {
      $('#coin2').addClass('tails2');
      setTimeout(function() {
        $('.result2').text("Tails");
      }, 3000);
    }
  }, 100);
  $('#coin2').prop("onclick", null).off('click');
  setTimeout(function() {
    $('#coin-content3').show();
  }, 4000);
  $('#coin-content3').addClass('move-right');
});

$('#coin3').on('click', function() {
  let flipResult = Math.random();
  $('#coin3').removeClass();
  setTimeout(function() {
    $('.result3').text("Flipping...");
    if (flipResult <= 0.5) {
      $('#coin3').addClass('heads3');
      setTimeout(function() {
        $('.result3').text("Heads");
        flipHeads.push("Heads");
        checkOutcome();
      }, 3000);
    } else {
      $('#coin3').addClass('tails3');
      setTimeout(function() {
        $('.result3').text("Tails");
        checkOutcome();
      }, 3000);
    }
  }, 100);
  $('#coin3').prop("onclick", null).off('click');
  setTimeout(function() {
    $('#coin-content4').show();
  }, 4000);

});
