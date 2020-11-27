// this is a small script that displays links inside an <iframe> element when the user clicks them
// this is also JavaScript, but not p5.js, but jQuery

$(document).on('click', 'a', function(e) {   // when the user clicks a object that is a link:
  var target = $(this).attr('href');         //   try to get the href property of the link
  if (target && !target.includes('://')) {   //   if we got the href and it is not a link to an external URL:
    $('#content').empty();                   //     remove everything that is currently inside #content
    var iframe = $('<iframe>');              //     create a new <iframe>
    $(iframe).attr('src', target);           //     set the src attribute of the <iframe> to the href of the link
    $('#content').append(iframe);            //     add the <iframe> to #content
    $('.selected').removeClass('selected');  //     remove the "selected" class from any element that has it currently
    $(this).addClass('selected');            //     add the "selected" class to the link the user just clicked
    return false;                            //     return false so that the browser doesn't navigate away from the page
  }
});
