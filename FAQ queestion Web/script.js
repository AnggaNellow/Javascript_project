const buttons = document.querySelectorAll('.faq .faq-toggle');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active');
    })
})