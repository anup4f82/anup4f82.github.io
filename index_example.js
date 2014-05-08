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

  $('#anup').on('mouseover', function(e){
     e.preventDefault()
    
    $('#anup').css("background-image", 'url(anup3.png)');

})

 $('#anup').on('mouseout', function(e){
     e.preventDefault()
    // $(this).attr('src','google2.png')
    $('#anup').css("background-image", 'none');
  })

  $('#blog').on('mouseover', function(e){
     e.preventDefault()
    
    $('#blog').css("background-image", 'url(blscreen.png)');

})

 $('#blog').on('mouseout', function(e){
     e.preventDefault()
    // $(this).attr('src','google2.png')
    $('#blog').css("background-image", 'none');
  
})
    $('#interests').on('mouseover', function(e){
     e.preventDefault()
    
    $('#interests').css("background-image", 'url(sport1.png)');

})

 $('#interests').on('mouseout', function(e){
     e.preventDefault()
    // $(this).attr('src','google2.png')
    $('#interests').css("background-image", 'none');
  })

 $('#skills').on('mouseover', function(e){
     e.preventDefault()
    
    $('#skills').css("background-image", 'url(rubysql1.png)');

})

 $('#skills').on('mouseout', function(e){
     e.preventDefault()
    // $(this).attr('src','google2.png')
    $('#skills').css("background-image", 'none');
  })


 $('#images').on('mouseover', function(e){
     e.preventDefault()
    // $(this).attr('src','google2.png')
    $('#images').css("background-image", 'url(284881_original.jpg)','width','300px');

    // $('#images').css('width': '300px');
  })


  $('#images').on('mouseout', function(e){
     e.preventDefault()
    // $(this).attr('src','google2.png')
    $('#images').css("background-image", 'none');
  })



    $('.small1').on('mouseover', function(e){
     e.preventDefault()
    $(this).attr('src','google2.png')
  })

  $('.small1').on('mouseout', function(e){
     e.preventDefault()
    $(this).attr('src','google.jpg')
  })


 
 
 
})  
