$('#surveyUndecided').prop("checked", true);
$('.survey-button').on('click', function() {
  if ($('#additional-comments').val().length === 0) {
    $('#additional-comments').text("No comment.");
  } else {}
});
