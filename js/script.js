// da sistemare il codice come abbiamo fatto stamattina:
// 1. creare funzione che invia il messaggio
// 2. chiamare questa funzione dentro il bottone e dentro tasto invio
// 3. su click anche della risposta deve comparire Delete
// 4. search




$(document).ready(function(){

  $('input').keyup(function (event){
    // console.log(event.which);
    //valore del input, cioè quello che scrive utente diventa un valore
    var myInput = $('#input').val();
    if (event.which == 13 && myInput.length > 0){
      // seleziono il .my-green-answer solo quello dentro template e faccio la sua coppia
      //con click  avevo selezionato concretamente quello che mi serviva e quindi le modifiche avverranno solo su questo elemento speficico
      var templateGreen = $('.my-template .my-li-green').clone();

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
    //valore del input, cioè quello che scrive utente diventa un valore
    var myInput = $('#input').val();
    //condizione che ci permette di non inviare il messaggio vuoto
    if ( myInput.length > 0){
      // seleziono il .my-green-answer solo quello dentro template e faccio la sua coppia
      //con click  avevo selezionato concretamente quello che mi serviva e quindi le modifiche avverranno solo su questo elemento speficico
      var templateGreen = $('.my-template .my-li-green').clone();
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
    }
  });


// fatto ricerca su internet e fatto un po di modifiche (da capire bene come funziona)
  $("#input-search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    //da capire bene come funzione FILTER
    $("#my-other-prof-ul .names").filter(function() {
      //questa condizione da capire MOLTO BENE $(this).text().toLowerCase().indexOf(value) > -1)
      if($(this).text().toLowerCase().indexOf(value) > -1){
        $(this).parent().parent().parent().show();
      } else{
        $(this).parent().parent().parent().hide();
      }

    });
  });


  //qua finisce la funzione del document ready
}
);
