function addSubtitle(){

  var subTitle = $('.template > h3').clone();
  subTitle.text('holahola');
  var target = $('#target');

  target.append(subTitle);
}


function init(){
  console.log('initinit');
}
init();


$(document).ready(init);
