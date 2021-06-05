$('.survey-button').on('click', function() {
  if ($('#additional-comments').val().length === 0) {
    $('#additional-comments').text("No comment.");
  } else {}
});

$('.survey-button').on('click', function() {
  if ($('#surveyYes').prop("checked", false) && $('#surveyNo').prop("checked", false) && $('#surveyUndecided').prop("checked", false)) {
    $('#surveyUndecided').prop("checked", true);
  }
});
