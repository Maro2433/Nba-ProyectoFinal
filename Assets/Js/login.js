function iniciarSesion() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const correo = email.value;
    const contraseña = password.value;

  if (correo !== "" && contraseña !== "") {
      alert("Ha Iniciado Sesión Exitosamente");
      
      email.value = "";
      password.value = "";

  } else {
    alert("LLene los Campos Faltantes")
  }
}
