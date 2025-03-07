function enviarFormulario() {
  // modificar aqui
  var valkey = "O9zQqXT7s-w";

  var nombre_form = $("#input_nombre").val();
  var mail_form = $("#input_mail").val();
  var mensaje_form = $("#input_mensaje").val();
  var cel_form = $("#input_cel").val();
  var asunto_form = $("#input_asunto").val();

  var data = new FormData();
  // Bloqueando boton
  $('.enviar').attr('value', 'Enviando...').attr('disabled', true);
  // fin bloqueo
  data.append("key", valkey);
  data.append("message", mensaje_form);
  data.append("name_", nombre_form);
  data.append("email", mail_form);
  data.append("cel_number_", cel_form);
  data.append("v_card", "3.0");

  // CUSTOM FIELDS //
  data.append("custom_fields", JSON.stringify({
    "Asunto: ": asunto_form
  }));

  // ATTACHMENTS //
  //data.append('attachment_[]', $('#file')[0].files[0]);

  $.ajax({
    url: "https://api.form.rip/send-email",
    method: "POST",
    contentType: false,
    processData: false,
    data: data
  });

  $("input").attr("disabled", true);
  $("textarea").attr("disabled", true);
  $("#alert").addClass("mt-5");
  $("#alert").removeClass("d-hide");
  $("#resultado").html("¡Muchas Gracias!, su mensaje fué enviado.")
  $('.enviar').attr('value', 'Enviado').attr('disabled', true);
  $("#input_nombre").val("");
  $("#input_mail").val("");
  $("#input_mensaje").val("");
  $("#input_cel").val("");
  $("#input_asunto").val("");
  window.open("gracias.html", "_self")
}
