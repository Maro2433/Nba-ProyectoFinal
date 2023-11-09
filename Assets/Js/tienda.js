document.getElementById("search-button").addEventListener("click", function () {
    // Obtener el texto de búsqueda ingresado por el usuario
    var searchText = document.getElementById("search-input").value.toLowerCase();

    // Obtener todos los elementos con clase "card"
    var cards = document.querySelectorAll(".container-jersey .card");

    // Recorrer todos los elementos y mostrar/ocultar según el texto de búsqueda
    cards.forEach(function (card) {
        var productText = card.querySelector("img").alt.toLowerCase();
        if (productText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


// Obtén todos los botones "Agregar al Carrito" por su ID
  const botonesAgregarCarrito = document.querySelectorAll('#agregarCarrito');

  // Agrega un evento de clic a cada botón
  botonesAgregarCarrito.forEach((boton) => {
    boton.addEventListener('click', () => {
      alert('Se ha agregado al carrito');
    });
  });




