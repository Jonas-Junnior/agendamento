function openNav() {
  document.getElementById("submenu").style.width = "250px";
  document.getElementById("btn").style.visibility = "hidden";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("submenu").style.width = "0";
  document.getElementById("btn").style.visibility = "visible";
}

$(document).ready(function() {
  $("#inputcelular").mask("(99) 99999-9999");

  $("#inputCEP").mask("99999-999");

  $("#enviar").on("click", function() {
    $("#myModal").modal("show");
  });

  $("#modal-btn-close").click(function() {
    $("#myModal").modal("hide");
    location.reload(true);
  });

  $("#form").submit(function(e) {
    e.preventDefault();
    $("#inputcelular")
      .removeClass("phone")
      .unmask();

    var post_data = $("#form").serialize();
    $.ajax({
      type: "POST",
      url: "agendamento.php",
      data: post_data
    }).done(function(res) {
      // console.log(res);
    }); // in milliseconds
  });
});
