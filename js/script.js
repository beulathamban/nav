console.log('hi');

$('body').click(function(){
  $(this).css('background','gray');
})

$('.fas').click(function(){
  $('nav').toggle();
})
