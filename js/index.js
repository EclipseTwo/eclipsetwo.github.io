const buttons = document.querySelectorAll('.b, .b2, .b3');

buttons.forEach(button => {
    button.addEventListener('mousemove', e => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posição X do mouse dentro do botão
        const y = e.clientY - rect.top; // Posição Y do mouse dentro do botão
        
        button.querySelector('::after').style.transform = `translate(${x}px, ${y}px)`; // Posiciona o brilho
    });

    button.addEventListener('mouseleave', () => {
        button.querySelector('::after').style.transform = 'translate(0, 0)'; // Reset do posicionamento do brilho ao sair do botão
    });
});