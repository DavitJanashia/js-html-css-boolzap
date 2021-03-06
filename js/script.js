// riogranizzare il codice in modo piu pulito
// capire come appendere i messaggi con invio, speficamente al ul con data-id selezionato
// come cancellare il testo dentro input quando clicco invio?
// con click su answers appare delete, ma quando clicco su altri posti deve scomparire (COME?)
// ho fatto scrollbar display: none, non funziona in firefox, su chrome si
//*****************
// le cose da capire bene
// 1. this
// 2. filter()
// 3. alcuni condizioni per esempio indexOf(value) > -1 ecc.
// 4. COMBINAZIONE DI CLONE E THIS
// 5. funzioni dentro funzioni (catena delle funzioni)
//*****************
// domande
// 1. perche in safari css su search non aveva influenzato?
// 2. con click su answers appare delete, ma quando clicco su altri posti deve scomparire (COME?)
// 3. come cancellare il testo dentro input quando clicco invio?
// 4. ho fatto scrollbar display: none, non funziona in firefox, su chrome si (come si puo risolvere?)
// 5. capire come appendere i messaggi con invio, speficamente al ul con DATA-ID selezionato
//*****************
// esercizi da fare (mio)
// 1. fare uno schema delle funzioni dentro funzioni per capire bene la struttura





$(document).ready(function(){


  //  ON CLICK con selezione document ogni volta che clicchi guarda tutti gli elementi nel html ( o body) e fa azione su quel elemento
  $(document).on('click', '.my-white', function () {
    var answer = $(this);
    answer.siblings('.delete2').addClass('show');
    answer.siblings('.delete2').click(function () {
      // console.log($(this).parent());
      answer.parent().remove();
    });

  } );

  // devo separare in html le conversazioni dei diversi profile

  //con un click sul profile mi seleziona il profile e la conversazione corrispondente
  //seleziono profile
  $('.other-profile').click(function (){
    // salviamo un una variabile attributo data-id (che dopo usiamo per abbinare con ul corrispondente)
    var id = $(this).data('id');
    console.log(id);
    // 1. con un click rimuovere classe active da tutti profile
    $('.other-profile').removeClass('selected');
    // 2. con click aggiungere classe active al profile cliccato
    var selectedProf = $(this);
    selectedProf.addClass('selected');

    //faccio la stessa cosa anche per selezionare UL corrispondente
    // 1. con click su other profile tolgo il classe active-l da tutti ul
    $('.my-list').removeClass('active-l');

    // 2. salvo nella variabile selected ul LA SELEZIONE DELL ELEMENTO CON LO STESSO DATA-ID DEL OTHER PROFILE CHE HO CLICCATO

    var selectedUl = $('.my-list[data-id=' + id +']');
    // console.log(selectedUl);
    // 3. aggiungo active-l AL selectedUl PER RENDERE VISIBILE
    selectedUl.addClass('active-l');

  });



  $('input').keyup(function (event){
    // console.log(event.which);
    //valore del input, cioè quello che scrive utente diventa un valore
    var myInput = $('#input').val();
    if (event.which == 13 && myInput.length > 0){
      // DOMANDA: come cancellare il testo dentro input dopo invio?


      // seleziono il .my-green-answer solo quello dentro template e faccio la sua coppia
      //con click  avevo selezionato concretamente quello che mi serviva e quindi le modifiche avverranno solo su questo elemento speficico
      var templateGreen = $('.my-template .my-li-green').clone();

      //faccio le modifiche del elemento nipote del clone selezionato.. occhio che io faccio la modifica proprio su un elemento dentro CLONE, e non sul elemento originale
      templateGreen.find('.my-green-answer').html(myInput);
      //aggiungo con click dentro ul
      //OCCHIO: QUI MI SERVE IN QUALCHE MODO USARE DATA ID PERCHE LO SCHERMO ATTIVO IN QUEL MOMENTO (cioe active-l) NON MI SEMBRA MOLTO AFFIDABILE (COME FARE?)
      $('.my-list.active-l').append(templateGreen);
      // dopo tot secondi appare la risposta
      setTimeout(answers, 1000);
      // con il click al messaggio si appare una finestra con delete,
      //*** selezionare il messaggio // IMPORTANTE: DEVO SELEZIONARE PER FORZA DENTRO QUESTA FUNZIONE SENNO NON VEDE (o in alternativa usare $(document).on('click', selettore, funzione) cosi si puo mettere anche fuori)
      $('ul .my-green').click(function () {
        // console.log('ciao');
        $(this).siblings('.delete').addClass('show');
        // con click cancello
        $(this).siblings('.delete').click(function () {
          // console.log($(this).parent());
          $(this).parent().remove();
        });

      });


    }

  });

  function answers(){
    // $('.my-list').append('ciao');
    var templateWhite = $('.my-template .my-li-white').clone();
    templateWhite.find('.my-white-answer').html('OK! :)');
    //OCCHIO: QUI MI SERVE IN QUALCHE MODO USARE DATA ID PERCHE SE IO SELEZIONO UN ALTRO PROFILE PRIMA DI SET TIMEOUT MI AGGIUNGE SU 'UL' ATTIVO IN QUEL MOMENTO (COME FARE?)
    $('.my-list.active-l').append(templateWhite);
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
      //OCCHIO: QUI MI SERVE IN QUALCHE MODO USARE DATA ID PERCHE LO SCHERMO ATTIVO IN QUEL MOMENTO NON MI SEMBRA MOLTO AFFIDABILE (COME USARE?)
      $('.my-list.active-l').append(templateGreen);

      setTimeout(answers, 1000);
      // con il click al messaggio si appare una finestra con delete,
      //*** selezionare il messaggio // IMPORTANTE: DEVO SELEZIONARE PER FORZA DENTRO QUESTA FUNZIONE SENNO NON VEDE
      $('ul .my-green').click(function () {
        // console.log('ciao');
        $(this).siblings('.delete').addClass('show');
        // con click cancello
        $(this).siblings('.delete').click(function () {
          // console.log($(this).parent());
          $(this).parent().remove();
        });

      });
    }
  });


// // fatto ricerca su internet e fatto un po di modifiche (da capire bene come funziona)

  $("#input-search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    //da capire bene come funzione FILTER
    $("#my-other-prof-ul .names").filter(function() {
      // quando nelle  parentesi subito dopo toggle la condizione è true fa qualcosa è come if else
      $(this).parent().parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)

      //** alternativa del toggle

      // if($(this).text().toLowerCase().indexOf(value) > -1){
      //   $(this).parent().parent().parent().show();
      // } else{
      //   $(this).parent().parent().parent().hide();
      // }

    });
  });


  //qua finisce la funzione del document ready
}
);
