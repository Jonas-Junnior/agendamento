function openNav() {
  document.getElementById("submenu").style.width = "250px";
  document.getElementById("btn").style.visibility = "hidden";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("submenu").style.width = "0";
  document.getElementById("btn").style.visibility = "visible";
}

$(document).ready(function(){
$("#inputcelular").mask("(99) 99999-9999");
});

$(document).ready(function(){
  $("#inputCEP").mask("99999-999");
  });

$(document).ready(function(){
  $('#form').on('submit', function(){
    $('#inputcelular').removeClass('phone')
    .unmask();
  });
});

