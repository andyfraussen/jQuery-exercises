 // Write your solution here
 /* $(document).on('input', '#inputNum', function(){
   var numberEnter = parseFloat($( "input[name='inputX']").val(), 10);
   $("#text").text(numberEnter);
 });
*/
 var randomNum = Math.floor((Math.random() * 100) + 1);

 $('#raadnekeer').on("click", function() {
   if($('#inputNum').val() < randomNum) {
     $('#text').html("<strong>Fout! HOGER.</strong>");
   }
   else if($('#inputNum').val() > randomNum) {
     $('#text').html("<strong>Fout! LAGER.</strong>");
   }
   else {
     $('#text').html("<strong>Correct!</strong>");
   }
   console.log(randomNum)
 });
