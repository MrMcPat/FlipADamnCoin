//jshint esversion:6

//Hides certain HTML elements to be animation later.
for (let i = 1; i < 3; i++) {
  $('.coin-img' + i).hide();
}
$('.result-heads').hide();
$('.result-tails').hide();
$('#cont-button3').hide();

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
for (let i = 2; i < 6; i++) {
  $('#coin-content' + i).hide();
}

let flipHeads = [];

$('#coin').on('click', coinFlip);
$('#coin2').on('click', coinFlip2);
$('#coin3').on('click', coinFlip3);
$('#coin4').on('click', coinFlip4);
$('#coin5').on('click', coinFlip5);

function coinFlip() {
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
  }, 3500);
}

function coinFlip2() {
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
  }, 3000);
  $('#coin-content3').addClass('move-right');
}

function coinFlip3() {
  let flipResult = Math.random();
  $('#coin3').removeClass();
  setTimeout(function() {
    $('.result3').text("Flipping...");
    if (flipResult <= 0.5) {
      $('#coin3').addClass('heads3');
      setTimeout(function() {
        $('.result3').text("Heads");
        flipHeads.push("Heads");
        if (flipHeads.length === 3) {
          $('.result-heads').addClass('appear-mid appear-mid-3 outcome3').show();
          $('#cont-button3').addClass('appear-mid continue-button3a').show();
          $('.result-button').val("Heads (3-5 flips)");
        } else if (flipHeads.length === 1 || flipHeads.length === 2) {
          setTimeout(function() {
            $('#coin-content4').show();
          });
          $('#coin-content4').addClass('diag-left');
        }
      }, 3000);
    } else {
      $('#coin3').addClass('tails3');
      setTimeout(function() {
        $('.result3').text("Tails");
        if (flipHeads.length === 0) {
          $('.result-tails').addClass('appear-mid appear-mid-3 outcome3').show();
          $('#cont-button3').addClass('appear-mid continue-button3a').show();
          $('.result-button').val("Tails (3-5 flips)");
        } else if (flipHeads.length === 1 || flipHeads.length === 2) {
          setTimeout(function() {
            $('#coin-content4').show();
          });
          $('#coin-content4').addClass('diag-left');
        }
      }, 3000);
    }
  }, 100);
  $('#coin3').prop("onclick", null).off('click');
}

function coinFlip4() {
  let flipResult = Math.random();
  $('#coin4').removeClass();
  setTimeout(function() {
    $('.result4').text("Flipping...");
    if (flipResult <= 0.5) {
      $('#coin4').addClass('heads4');
      setTimeout(function() {
        $('.result4').text("Heads");
        flipHeads.push("Heads");
        if (flipHeads.length === 3) {
          $('.result-heads').addClass('appear-mid appear-mid-4 outcome4').show();
          $('#cont-button3').addClass('appear-mid continue-button3b').show();
          $('.result-button').val("Heads (3-5 flips)");
        } else if (flipHeads.length === 1 || flipHeads.length === 2) {
          setTimeout(function() {
            $('#coin-content5').show();
          });
          $('#coin-content5').addClass('diag-right');
        }
      }, 3000);
    } else {
      $('#coin4').addClass('tails4');
      setTimeout(function() {
        $('.result4').text("Tails");
        if (flipHeads.length === 0 || flipHeads.length === 1) {
          $('.result-tails').addClass('appear-mid appear-mid-4 outcome4').show();
          $('#cont-button3').addClass('appear-mid continue-button3b').show();
          $('.result-button').val("Tails (3-5 flips)");
        } else if (flipHeads.length === 2) {
          setTimeout(function() {
            $('#coin-content5').show();
          });
          $('#coin-content5').addClass('diag-right');
        }
      }, 3000);
    }
  }, 100);
  $('#coin4').prop("onclick", null).off('click');
}

function coinFlip5() {
  let flipResult = Math.random();
  $('#coin5').removeClass();
  setTimeout(function() {
    $('.result5').text("Flipping...");
    if (flipResult <= 0.5) {
      $('#coin5').addClass('heads5');
      setTimeout(function() {
        $('.result5').text("Heads");
        flipHeads.push("Heads");
        checkOutcome();
      }, 3000);
    } else {
      $('#coin5').addClass('tails5');
      setTimeout(function() {
        $('.result5').text("Tails");
        checkOutcome();
      }, 3000);
    }
  }, 100);
  $('#coin5').prop("onclick", null).off('click');
}

function checkOutcome() {
  if (flipHeads.length >= 3) {
    $('.result-heads').addClass('appear-mid appear-mid-5 outcome5').show();
    $('#cont-button3').addClass('appear-mid continue-button3c').show();
    $('.result-button').val("Heads (3-5 flips)");
  } else {
    $('.result-tails').addClass('appear-mid appear-mid-5 outcome5').show();
    $('#cont-button3').addClass('appear-mid continue-button3c').show();
    $('.result-button').val("Tails (3-5 flips)");
  }
}
$('.reset').on('click', function() {
  location.reload();
});
