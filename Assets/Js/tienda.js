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

// Obtén el botón "Agregar al Carrito" por su id
    var botonAgregarCarrito = document.getElementById("agregarCarrito");

    // Agrega un evento click al botón
    botonAgregarCarrito.addEventListener("click", function() {
        // Muestra un mensaje de alerta cuando se hace clic en el botón
        alert("Se agregó al carrito");
    });




