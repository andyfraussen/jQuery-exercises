$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $('li:first-child').click(function(){
      $('#content').css('font-size', '120%');
    });

    /* On click: Decrease the font size (80%) */
    $('li:nth-child(2)').click(function(){
      $('#content').css('font-size', '80%');
    });

    /* On click: Bold or normalize the green words */

    $('li:nth-child(3)').click(function(){
    var value = $(this).html();
    if(value=='Bold'){
        $(this).html('Normal');
        $('.green').css('font-weight', 'bold');
    }else{
    $(this).html('Bold');
    $('.green').css('font-weight', 'normal');
    }
})
    /* On click: Bold or normalize the green words */

    $('li:nth-child(4)').click(function(){
    var value = $(this).html();
    if(value=='Underline'){
        $(this).html('Normal');
        $('.red').css('text-decoration', 'underline');
    }else{
    $(this).html('Underline');
    $('.red').css('text-decoration', 'none');
    }
})

    /* On click: Replace the logo with another image */

  $('img').click(function(){
    $('img').attr('src',"https://i.ytimg.com/vi/mSnMTMlJzME/maxresdefault.jpg");
  });

    /* On hover: Display the URL of links in a tooltip when hovering over links */

    $('a').mouseover(function(){
      $(this).attr('title', $(this).attr('href'));
    })

    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
      $('img').after('<h2>Chapter 1:</h2>');
      $('p:nth-child(5)').after('<h2>Chapter 2:</h2>');
});
