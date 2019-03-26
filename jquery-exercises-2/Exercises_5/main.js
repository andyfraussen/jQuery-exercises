// Write your solution here
$( "#name, #first_name" ).focus(function() {
  $(this).css('border', '1px solid green')
});

$( "#name, #first_name" ).focusout(function() {
  $(this).css('border', '1px solid red')
});
