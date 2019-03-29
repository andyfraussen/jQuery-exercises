 // Write your solution here

 // MAIL CHECK
 $('.email').focusout(function(){
  function validateEmail(email) {
    var re = /^(([a-zA-Z0-9]+)|([a-zA-Z0-9]+((?:\_[a-zA-Z0-9]+)|(?:\.[a-zA-Z0-9]+))*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-zA-Z]{2,6}(?:\.[a-zA-Z]{2})?)$)/;
    return re.test(email);
  }

  var email = $(".email").val();
  if (validateEmail(email)) {
    $('p:nth-child(9)').css('color', 'green');
  } else {
    $('p:nth-child(9)').css('color', 'red');
  }
});

// NUMERIC TELEPHONE CHECK

$('.telephone').focusout(function(){
 function validateEmail(telephone) {
   var re = /['0','1','2','3','4','5','6','7','8','9',0,1,2,3,4,5,6,7,8,9]/;
   return re.test(telephone);
 }

 var telephone = $(".telephone").val();
 if (validateEmail(telephone)) {
   $('p:nth-child(12)').css('color', 'green');
 } else {
   $('p:nth-child(12)').css('color', 'red');
 }
});

// FIRST NAME CHECK

$('.fname').focusout(function(){
 function validatefname(fname) {
   var re = /^[a-zA-Z]/;
   return re.test(fname);
 }

 var fname = $(".fname").val();
 if (validatefname(fname)) {
   $('p:nth-child(6)').css('color', 'green');
 } else {
   $('p:nth-child(6)').css('color', 'red');
 }
});

//  NAME CHECK

$('.name').focusout(function(){
 function validatefname(name) {
   var re = /^[a-zA-Z]/;
   return re.test(name);
 }

 var name = $(".name").val();
 if (validatefname(name)) {
   $('p:nth-child(2)').css('color', 'green');
 } else {
   $('p:nth-child(2)').css('color', 'red');
 }
});
