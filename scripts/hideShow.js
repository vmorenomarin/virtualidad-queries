$(document).ready(function () {
  $("#intro").hide();
});

$(document).ready(function () {
  $('select[id="field_836"]').change(function () {
    if ($(this).val() == "Venta Empresarial") {
      $("#nombre-empresa").show();
    } else {
      $("#nombre-empresa").hide();
    }
  });
});

$(document).ready(function () {
  $('input[type="radio"]').click(function () {
    if ($(this).attr("id") == "field_833_0") {
      $("#multirregion").show();
    } else {
      $("#multirregion").hide();
    }
  });
});

$(document).ready(function () {
  $('input[type="radio"]').click(function () {
    if ($(this).attr("id") == "field_829_0") {
      $("#subir-usuarios").show();
    } else {
      $("#subir-usuarios").hide();
    }
  });
});

$(document).ready(function () {
  var adminUsers = [
    "Jaime Alberto Moncada Soto",
    "MIGUEL ADOLFO BARRERA ZAPATA",
    "Santiago Gómez Garcés",
    "Victor Moreno Marín",
  ];
  var userText = $('span[class="usertext"]')[0];
  var user = userText.textContent;
  if (adminUsers.indexOf(user) >= 0) {
    $("#estado-solicitud").show();
  } else {
    $("#estado-solicitud").hide();
  }
});

$(document).ready(function () {
  var estado = $('span[class="estado"]');
  $(estado).each(function (index, element) {
    var estadoTexto = element.textContent;
    if (estadoTexto == "") { 
      $(element).addClass("badge badge-pill badge-warning");
      element.textContent = "Pendiente";
    } else if (estadoTexto == "Finalizada") {
      $(element).addClass("badge badge-pill badge-success");
    } else if (estadoTexto == "Rechazada") {
      $(element).addClass("badge badge-pill badge-danger");
    }
  });
});
