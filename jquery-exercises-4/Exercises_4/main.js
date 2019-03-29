 // Write your solution here
$('button').on('click', function(){
  console.log('youre on the other side');
  var jaartje = $('.birthday').val();
  var naamtje = $('.name').val();
  var voornaamtje =$('.fname').val();
  var gebplaatsje =$('.birthplace').val();
  var werkplaatsje =$('.workplace').val();
  var bedrijfje =$('.company').val();
  $('#displayBox').html('Mijn naam is ' + naamtje + ' ' + voornaamtje + ' ik ben geboren te ' + gebplaatsje + ' op ' + jaartje + '.' + 'Ik werk bij ' + bedrijfje + ', en dat is gelegen te ' + werkplaatsje + '.');
});
