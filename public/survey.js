$('#surveyUndecided').prop("checked", true);

$('.survey-button').on('click', function() {
  if ($('#additional-comments').val().length === 0) {
    $('#additional-comments').text("No comment.");
  } if ($('#surveyName').val().length === 0){
    $('#surveyName').val("Anonymous");
  } else {}
});
