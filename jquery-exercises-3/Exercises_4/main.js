 // Write your solution here
 /* $(document).on('input', '#inputNum', function(){
   var numberEnter = parseFloat($( "input[name='inputX']").val(), 10);
   $("#text").text(numberEnter);
 });
*/

$('#butHeight').on('click', function () {
    $('#rectangleDiv').height("+=10px");
    if ($('#rectangleDiv').height() > 100) {
        $('#rectangleDiv').height("10px");
    }
 });

 $('#butColor').on('click', function () {
     $('#rectangleDiv').css('background', 'green');
 });

 $('#butReset').on('click', function () {
     $('#rectangleDiv').removeAttr('style');
 });

 $('#butHide').on('click', function () {
     $('#rectangleDiv').fadeOut();
 });

 $('#butShow').on('click', function () {
     $('#rectangleDiv').fadeIn();
 });
