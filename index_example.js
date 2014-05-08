$(document).ready(function(){
 

$("#anup").on("click", function() {

$('#anup').css("background-color","#F28500");
$('body').css("background-image", 'url(BG-Basketball_Court1.jpg)');
     $('.skils').css('font-size' ,'20px');
})
 
 $("#blog").on("click", function() {

$('#blog').css("background-color","#F28500");
$('body').css("background-image", 'url(BG-Basketball_Court1.jpg)');
     $('.skils').css('font-size' ,'20px');
})
 
 $("#skills").on("click", function() {

$('#skills').css("background-color","#F28500");
$('body').css("background-image", 'url(BG-Basketball_Court1.jpg)');
     $('.skils').css('font-size' ,'20px');
})
 
 $("#interests").on("click", function() {

$('#interests').css("background-color","#F28500");
$('body').css("background-image", 'url(BG-Basketball_Court1.jpg)');
     $('.skils').css('font-size' ,'20px');
})
 
 $('#images').on('mouseover', function(e){
     e.preventDefault()
    // $(this).attr('src','google2.png')
    $('body').css("background-image", 'url(284881_original.jpg)');
  })


  $('#images').on('mouseout', function(e){
     e.preventDefault()
    // $(this).attr('src','google2.png')
    $('body').css("background-image", 'url(BG-Basketball_Court1.jpg)');
  })



    $('.small1').on('mouseover', function(e){
     e.preventDefault()
    $(this).attr('src','google2.png')
  })

  $('.small1').on('mouseout', function(e){
     e.preventDefault()
    $(this).attr('src','google.jpg')
  })

   $('.sanfran').on('mouseover', function(e){
     e.preventDefault()
    $(this).attr('src','284881_original.jpg')
  })
 
 
})  
