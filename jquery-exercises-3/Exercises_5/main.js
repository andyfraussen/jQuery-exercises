 // Write your solution here
 /* $(document).on('input', '#inputNum', function(){
   var numberEnter = parseFloat($( "input[name='inputX']").val(), 10);
   $("#text").text(numberEnter);
 });
*/

 $(document).keydown(function(e){
     switch (e.which){
         case 37:    //left arrow key
             $("#rectangleDiv").finish().animate({
                 left: "-=50"
             });
             break;
         case 38:    //up arrow key
             $("#rectangleDiv").finish().animate({
                 top: "-=50"
             });
             break;
         case 39:    //right arrow key
             $("#rectangleDiv").finish().animate({
                 left: "+=50"
             });
             break;
         case 40:    //bottom arrow key
             $("#rectangleDiv").finish().animate({
                 top: "+=50"
             });
             break;
     }
 });