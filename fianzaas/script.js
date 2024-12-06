// Seleccionar todas las preguntas
const questions = document.querySelectorAll('.faq-question');

// Añadir evento de clic a cada pregunta
questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Mostrar/Ocultar la respuesta
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        // Cambiar el icono de "+" a "-"
        const icon = question.querySelector('.plus-icon');
        icon.textContent = icon.textContent === '+' ? '-' : '+';
    });
});