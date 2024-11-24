document.addEventListener('DOMContentLoaded', () => {
    const resume = document.querySelector('.resume'); // Вибираємо шаблон

    resume.addEventListener('click', () => {
        // Перш за все анімувати текст
        const text = document.querySelector('.animated-text');
        text.classList.add('move-up'); // Додаємо клас для руху тексту

        // Потім анімувати іконки
        const icons = document.querySelectorAll('.icon');
        icons.forEach(icon => {
            icon.classList.add('rotate'); // Додаємо клас для обертання

            // Видаляємо клас після завершення обертання
            setTimeout(() => {
                icon.classList.remove('rotate');
            }, 1000); // Тривалість анімації (1 секунда)
        });

        // Видаляємо клас після завершення анімації тексту
        setTimeout(() => {
            text.classList.remove('move-up');
        }, 1000); // Тривалість анімації тексту (1 секунда)
    });
});
