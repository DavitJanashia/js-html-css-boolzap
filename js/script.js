$(document).ready(function(){

  $('input').keyup(function (event){
    // console.log(event.which);
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
      // con il click al messaggio si appare una finestra con delete,
      //*** selezionare il messaggio // IMPORTANTE: DEVO SELEZIONARE PER FORZA DENTRO QUESTA FUNZIONE SENNO NON VEDE
      $('ul .my-green').click(function () {
        // console.log('ciao');
        $(this).siblings('.delete').addClass('show');
        // con click cancello
        $(this).siblings('.delete').click(function () {
          // console.log($(this).parent());
          $(this).parent().hide();
        });

      });
    }

  });
  function answers(){
    // $('.my-list').append('ciao');
    var templateWhite = $('.my-template .my-li-white').clone();
    templateWhite.find('.my-white-answer').html('OK! :)');
    $('.my-list').append(templateWhite);
  }


  //una cosa extra un bottone che fa invio
  $('#invia').click(function() {
    // seleziono il .my-green-answer solo quello dentro template e faccio la sua coppia
    //con click  avevo selezionato concretamente quello che mi serviva e quindi le modifiche avverranno solo su questo elemento speficico
    var templateGreen = $('.my-template .my-li-green').clone();
    //valore del input, cioè quello che scrive utente diventa un valore
    var myInput = $('#input').val();
    //faccio le modifiche del elemento nipote (CON FIND, se era figlio diretto CHILDREN ANDAVA BENE) del clone selezionato.. occhio che io faccio la modifica proprio su un elemento dentro CLONE, e non sul elemento originale
    templateGreen.find('.my-green-answer').html(myInput);
    //aggiungo con click dentro ul
    $('.my-list').append(templateGreen);
    setTimeout(answers, 5000);
    // con il click al messaggio si appare una finestra con delete,
    //*** selezionare il messaggio // IMPORTANTE: DEVO SELEZIONARE PER FORZA DENTRO QUESTA FUNZIONE SENNO NON VEDE
    $('ul .my-green').click(function () {
      // console.log('ciao');
      $(this).siblings('.delete').addClass('show');
      // con click cancello
      $(this).siblings('.delete').click(function () {
        // console.log($(this).parent());
        $(this).parent().hide();
      });

    });
  });


  //qua finisce la funzione del document ready
}
);
