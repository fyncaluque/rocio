function activarEnlaceSeleccionado() {
  var paginaActual = window.location.href;
  var enlacesMenu = document.querySelectorAll("#my-menu ul li a");
  enlacesMenu.forEach(function (enlace) {
    if (paginaActual === enlace.href) {
      enlace.classList.add("link-active");
    } else {
      enlace.classList.remove("link-active"); // Remueve la clase "activo" de otros enlaces
    }
  });
}

// Escucha eventos de clic en los enlaces
var enlacesMenu = document.querySelectorAll("[data-link-button]");
enlacesMenu.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    console.log(enlace.href);
    // Llama a la función para establecer la clase "activo" después de hacer clic
    activarEnlaceSeleccionado();
  });
});

// Llama a la función para establecer la clase "activo" cuando se carga la página
activarEnlaceSeleccionado();

console.log("Aqui");
