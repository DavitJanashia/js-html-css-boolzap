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




$(document).ready(function(){

  var templateGreen = $('.my-li-green').clone();
  // templateGreen.text();

  console.log(templateGreen);

  $('#invia').click(function() {
    var prova = templateGreen;
    var myInput = $('#input').val();
    $('.my-list').append(prova);
    $('.my-green-answer').html(myInput);
  });

}
);
