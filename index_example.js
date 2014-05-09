$(document).ready(function(){
 

// $("#anup").on("click", function() {

// $('#anup').css("background-color","#F28500");
// $('body').css("background-image", 'url(BG-Basketball_Court1.jpg)');
//      $('.skils').css('font-size' ,'20px');
// })
 
//  $("#blog").on("click", function() {

// $('#blog').css("background-color","#F28500");
// $('body').css("background-image", 'url(BG-Basketball_Court1.jpg)');
//      $('.skils').css('font-size' ,'20px');
// })
 
//  $("#skills").on("click", function() {

// $('#skills').css("background-color","#F28500");
// $('body').css("background-image", 'url(BG-Basketball_Court1.jpg)');
//      $('.skils').css('font-size' ,'20px');
// })
 
//  $("#interests").on("click", function() {

// $('#interests').css("background-color","#F28500");
// $('body').css("background-image", 'url(BG-Basketball_Court1.jpg)');
//      $('.skils').css('font-size' ,'20px');
// })




  $('#anup').on('mouseover', function(e){
     e.preventDefault()
    
     $('#anup').css("background-image", 'url(anup.jpg)').animate({ height: '300', left: '0', top: '0', width: '450'},"slow");
    // $('#anup').animate({width: 400px, height:400px}, 1000);

})



 $('#anup').on('mouseout', function(e){
     // e.preventDefault()
    
    $('#anup').css("background-image", 'none').animate({ height: '60', left: '0', top: '0', width: '420'},"slow");
  })

$("#anup").click(function() {
  
  $("#anup").show();
});




  $('#blog').on('mouseover', function(e){
     e.preventDefault()
    
    $('#blog').css("background-image", 'url(blog3.png)').animate({ height: '300', left: '0', top: '0', width: '350'},"slow");

})

 $('#blog').on('mouseout', function(e){
     e.preventDefault()
    // $(this).attr('src','google2.png')
    $('#blog').css("background-image", 'none').animate({ height: '60', left: '0', top: '0', width: '420'},"slow");
  
})
    $('#interests').on('mouseover', function(e){
     e.preventDefault()
    
    $('#interests').css("background-image", 'url(sport1.png)').animate({ height: '300', left: '0', top: '0', width: '350'},"slow");

})

 $('#interests').on('mouseout', function(e){
     e.preventDefault()
    // $(this).attr('src','google2.png')
    $('#interests').css("background-image", 'none').animate({ height: '60', left: '0', top: '0', width: '420'},"slow");
  })

 $('#skills').on('mouseover', function(e){
     e.preventDefault()
    
    $('#skills').css("background-image", 'url(rubysql1.png)').animate({ height: '300', left: '0', top: '0', width: '550'},"slow");

})

 $('#skills').on('mouseout', function(e){
     e.preventDefault()
    // $(this).attr('src','google2.png')
    $('#skills').css("background-image", 'none').animate({ height: '60', left: '0', top: '0', width: '420'},"slow");
  })


 $('#images').on('mouseover', function(e){
     e.preventDefault()
    // $(this).attr('src','google2.png')
    $('#images').css("background-image", 'url(284881_original.jpg)','width','300px').animate({ height: '300', left: '0', top: '0', width: '1245'},"slow");

    // $('#images').css('width': '300px');
  })


  $('#images').on('mouseout', function(e){
     e.preventDefault()
    // $(this).attr('src','google2.png')
    $('#images').css("background-image", 'none').animate({ height: '60', left: '0', top: '0', width: '420'},"slow");
  })



  //   $('.small1').on('mouseover', function(e){
  //    e.preventDefault()
  //    $(this).attr('src','google2.png').animate({ height: '50', left: '0', top: '0', width: '50'},"slow");
  // })

  // $('.small1').on('mouseout', function(e){
  //    e.preventDefault()
  //   $(this).attr('src','google.jpg')
  // })





 
 
})  
