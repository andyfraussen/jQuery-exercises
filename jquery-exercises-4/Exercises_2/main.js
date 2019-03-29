 // Write your solution here
 $('#knopCalc').on('click', function(){
   var numSal = Number($('#salary').val());
   var equality = $('#genderSelect').val();
   var kids = $('#children').val();
   kidscheck();
   function kidscheck(){
     if (kids <= 3){
       var kidsNum = 0.01;
       console.log(kidsNum);
       return kidsNum;
     } else if (kids >=4) {
       var kidsNum = 0.02;
       console.log(kidsNum);
     }
   };
   
   function gendercheck(){
   console.log(equality)
     if (equality == "Men"){
       var berekend = numSal - (numSal * 0.30);
       console.log(berekend, kidsNum);
     } else if (equality == "Women") {
       var berekend = numSal - (numSal * 0.32);
       console.log(berekend);
     } else {
       console.log('error gender not found');
      }
    };
    gendercheck();
});
