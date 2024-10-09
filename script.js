// Selecciona todos los elementos con la clase "fade-in"
const fadeElements = document.querySelectorAll('.fade-in');

// Función para añadir la clase "visible"
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Agrega la clase visible cuando se ve
            observer.unobserve(entry.target); // Deja de observar el elemento una vez visible
        }
    });
});

// Observa cada elemento fade-in
fadeElements.forEach(element => {
    observer.observe(element);
});


let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0; // Volver al primer slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Ir al último slide
    } else {
        currentSlide = index;
    }

    slides.forEach((slide) => {
        slide.classList.remove('active'); // Remover la clase active de todas
    });

    slides[currentSlide].classList.add('active'); // Agregar la clase active a la imagen actual
}

// Mueve el slide en la dirección indicada
function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Inicializa el carrusel mostrando la primera imagen
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});


