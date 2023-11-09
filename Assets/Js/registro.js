function registrarUsuario() {
  const nombreCampo = document.querySelector(".nombre");
  const apellidoCampo = document.querySelector(".apellido");
  const correoCampo = document.querySelector(".correo");
  const contraseñaCampo = document.querySelector(".contraseña");
  const repetirContraseñaCampo = document.querySelectorAll(".contraseña")[1];
  const edadCampo = document.querySelector(".edad");
  const condicionesCheckbox = document.querySelector(".condiciones");

  const nombre = nombreCampo.value;
  const apellido = apellidoCampo.value;
  const correo = correoCampo.value;
  const contraseña = contraseñaCampo.value;
  const repetirContraseña = repetirContraseñaCampo.value;
  const edad = edadCampo.value;
  const condicionesAceptadas = condicionesCheckbox.checked;

  if (
    nombre !== "" &&
    apellido !== "" &&
    correo !== "" &&
    contraseña !== "" &&
    repetirContraseña !== "" &&
    edad !== "" &&
    condicionesAceptadas
  ) {
    alert("Registro Exitoso");

    // Restablecer los campos a su estado inicial
    nombreCampo.value = "";
    apellidoCampo.value = "";
    correoCampo.value = "";
    contraseñaCampo.value = "";
    repetirContraseñaCampo.value = "";
    edadCampo.value = "";
    condicionesCheckbox.checked = false;
  } else {
    alert("Llene los Campos Faltantes")
  }
}
