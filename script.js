document.addEventListener("DOMContentLoaded", () => {
    // Animación de las barras de progreso al cargar la página
    const bars = document.querySelectorAll('.fill');
    
    // Un pequeño retardo para que se vea el efecto de carga
    setTimeout(() => {
        bars.forEach(bar => {
            // Obtenemos el ancho que pusimos en el HTML y lo aplicamos
            const targetWidth = bar.parentElement.previousElementSibling.querySelector('.pct').innerText;
            // Si el texto es "Avanzado" ponemos 95%, si es "85%" lo limpiamos, etc.
            if(targetWidth.includes("Avanzado")) bar.style.width = "95%";
            else if(targetWidth.includes("85%")) bar.style.width = "85%";
            else if(targetWidth.includes("Medio-Bajo")) bar.style.width = "40%";
            else if(targetWidth.includes("Mínimo")) bar.style.width = "15%";
        });
    }, 300);

    // Añade esto dentro de tu DOMContentLoaded
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        const url = card.getAttribute('href');
        console.log(`Navegando al proyecto: ${url}`);
        // Aquí podrías añadir una animación de salida si quisieras
    });
});
});