$(document).ready(function(){
  //importante aggiungere anche html senno aggiunge solo una volta (è come outer html)
  var templateWhite = $('.my-li-white').clone().html();
  var templateGreen = $('.my-li-green').clone().html();
  console.log(templateGreen, templateWhite);

  $('#invia').click(function() {
    $('.my-list').append(templateGreen);
  });
}
);
