 // Write your solution here
 $(function() {
   $('#nudes').click(function() {
     $('#text').html(function(i, value) {
       return value * 1 + 1;
     });
   });
 });
//$("#text").css("display", "none");
