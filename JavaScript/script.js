// Seleccionar el modal y la imagen del modal
var modal = document.getElementById("modal");
var modalImage = document.getElementById("modal-image");

// Obtener todas las imágenes de la galería
var images = document.querySelectorAll(".gallery-image");

// Para cerrar el modal
var closeButton = document.querySelector(".close");

// Añadir evento de clic a cada imagen de la galería
images.forEach(function(image) {
image.addEventListener("click", function() {
    modal.style.display = "flex"; // Mostrar el modal
    modalImage.src = this.src;    // Colocar la imagen en el modal
});
});

// Evento para cerrar el modal al hacer clic fuera de la imagen
window.addEventListener("click", function(event) {
if (event.target === modal) {
    modal.style.display = "none";
}
});

// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón "View Gallery" y la sección de la galería
    const viewGalleryBtn = document.getElementById('viewGalleryBtn');
    const gallerySection = document.getElementById('galeria');
    
    // Añade un evento de clic al botón "View Gallery"
    viewGalleryBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      gallerySection.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente a la sección de la galería
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón "View Gallery" y la sección de la galería
    const viewGalleryBtn = document.getElementById('viewVisitBtn');
    const gallerySection = document.getElementById('visita');
    
    // Añade un evento de clic al botón "View Gallery"
    viewGalleryBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      gallerySection.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente a la sección de la galería
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});


