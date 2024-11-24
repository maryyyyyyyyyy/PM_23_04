document.addEventListener('DOMContentLoaded', () => {
    const resume = document.querySelector('.resume'); // Вибираємо весь блок резюме
    const text = document.querySelector('.animated-text'); // Вибираємо текст

    resume.addEventListener('click', () => {
        console.log('Resume clicked!'); // Перевірка, чи спрацьовує подія
        const icons = document.querySelectorAll('.icon'); // Вибираємо всі іконки

        // Анімація іконок
        icons.forEach(icon => {
            icon.classList.add('rotate'); // Додаємо клас обертання
            setTimeout(() => {
                icon.classList.remove('rotate'); // Видаляємо клас після завершення
            }, 1000);
        });

        // Анімація тексту
        text.classList.add('move-up'); // Додаємо клас для руху тексту
        console.log('move-up class added to text'); // Перевірка, чи додається клас до тексту

        setTimeout(() => {
            text.classList.remove('move-up'); // Видаляємо клас після завершення
        }, 1000); // Тривалість анімації
    });
});
