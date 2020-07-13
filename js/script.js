$(document).ready(function(){

  $('input').keyup(function (event){
    console.log(event.which);
    if (event.which == 13){
      // seleziono il .my-green-answer solo quello dentro template e faccio la sua coppia
      //con click  avevo selezionato concretamente quello che mi serviva e quindi le modifiche avverranno solo su questo elemento speficico
      var templateGreen = $('.my-template .my-li-green').clone();
      //valore del input, cioè quello che scrive utente diventa un valore
      var myInput = $('#input').val();
      //faccio le modifiche del elemento nipote del clone selezionato.. occhio che io faccio la modifica proprio su un elemento dentro CLONE, e non sul elemento originale
      templateGreen.find('.my-green-answer').html(myInput);
      //aggiungo con click dentro ul
      $('.my-list').append(templateGreen);
      setTimeout(answers, 5000);
    }

  });

  $('#invia').click(function() {
    // seleziono il .my-green-answer solo quello dentro template e faccio la sua coppia
    //con click  avevo selezionato concretamente quello che mi serviva e quindi le modifiche avverranno solo su questo elemento speficico
    var templateGreen = $('.my-template .my-li-green').clone();
    //valore del input, cioè quello che scrive utente diventa un valore
    var myInput = $('#input').val();
    //faccio le modifiche del elemento nipote del clone selezionato.. occhio che io faccio la modifica proprio su un elemento dentro CLONE, e non sul elemento originale
    templateGreen.find('.my-green-answer').html(myInput);
    //aggiungo con click dentro ul
    $('.my-list').append(templateGreen);
    setTimeout(answers, 5000);
  });

  function answers(){
    // $('.my-list').append('ciao');
      var templateWhite = $('.my-template .my-li-white').clone();
      templateWhite.find('.my-white-answer').html('OK! :)');
      $('.my-list').append(templateWhite);

  }

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
