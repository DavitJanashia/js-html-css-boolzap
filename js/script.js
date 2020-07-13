$(document).ready(function(){


  $('#invia').click(function() {
    // seleziono il .my-green-answer solo quello dentro template
    var templateGreen = $('.my-template .my-li-green').clone();
    var myInput = $('#input').val();
    //, e faccio le modifiche
    templateGreen.find('.my-green-answer').html(myInput);
    $('.my-list').append(templateGreen);
  });

}
);




// $(document).ready(function(){
//   var templateGreen = $('.my-li-green').clone().html();
//
//
//   $('#invia').click(function() {
//
//     var myInput = $('#input').val();
//     $('.my-list').append(templateGreen);
//     $('.my-green-answer').html(myInput);
//   });
//
// }
// );
//
