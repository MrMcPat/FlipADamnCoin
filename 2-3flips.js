//jshint esversion:6
for (let i = 1; i < 3; i++) {
  $('.coin-img' + i).hide();
}

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

for (let i = 2; i < 4; i++) {
  $('#coin-content' + i).hide();
}

let flipHeads = [];

$('#coin').on('click', coinFlip);
$('#coin2').on('click', coinFlip2);
$('#coin3').on('click', coinFlip3);

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
  $('#coin').off('click');
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
        if (flipHeads.length === 2) {
          $('.outcome').addClass('appear-mid appear-mid-2').text("Heads win!");
        } else if (flipHeads.length === 1) {
          setTimeout(function() {
            $('#coin-content3').show();
          });
          $('#coin-content3').addClass('move-right');
        }
      }, 3000);
    } else {
      $('#coin2').addClass('tails2');
      setTimeout(function() {
        $('.result2').text("Tails");
        if (flipHeads.length === 0) {
          $('.outcome').addClass('appear-mid appear-mid-2').text("Tails win!");
        } else if (flipHeads.length === 1) {
          setTimeout(function() {
            $('#coin-content3').show();
          });
          $('#coin-content3').addClass('move-right');
        }
      }, 3000);
    }
  }, 100);
  $('#coin2').off('click');
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
  $('#coin3').off('click');
}

function checkOutcome() {
  if (flipHeads.length >= 2) {
    $('.outcome').addClass('appear-mid').text("Heads win!");
  } else {
    $('.outcome').addClass('appear-mid').text("Tails win!");
  }
}

$('.reset').on('click', function() {
  // for (let i = 2; i < 4; i++) {
  //   $('#coin-content' + i).hide();
  // }
  // flipHeads=[];
  // $('#coin').on('click', coinFlip);
  // $('#coin2').on('click', coinFlip2);
  // $('#coin3').on('click', coinFlip3);
  // $('.outcome').text("");
  location.reload();
});
