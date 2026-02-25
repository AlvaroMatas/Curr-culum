document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll('.fill');
    
    setTimeout(() => {
        bars.forEach(bar => {
            const targetWidth = bar.parentElement.previousElementSibling.querySelector('.pct').innerText;
            if(targetWidth.includes("Avanzado")) bar.style.width = "95%";
            else if(targetWidth.includes("85%")) bar.style.width = "85%";
            else if(targetWidth.includes("Medio-Bajo")) bar.style.width = "40%";
            else if(targetWidth.includes("Mínimo")) bar.style.width = "15%";
        });
    }, 300);

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        const url = card.getAttribute('href');
        console.log(`Navegando al proyecto: ${url}`);
    });
});
});