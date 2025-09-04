document.addEventListener('DOMContentLoaded', function() {
    // Функция для загрузки отзывов
    function loadReviews() {
        fetch('../data/reviews.json') // Путь к файлу
        .then(response => {
            if (!response.ok) {
                throw new Error('Не удалось загрузить отзывы');
            }
            return response.json();
        })
        .then(reviews => {
            displayReviews(reviews);
        })
        .catch(error => {
            console.error('Ошибка:', error);
            // Можно показать заглушку, если отзывы не загрузились
            document.getElementById('testimonials-container').innerHTML =
            '<p>Отзывы скоро появятся.</p>';
        });
    }

    // Функция для отображения отзывов
    function displayReviews(reviews) {
        const container = document.getElementById('testimonials-container');

        // Очищаем контейнер
        container.innerHTML = '';

        // Создаём HTML для каждого отзыва
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'testimonial-item';
            reviewElement.innerHTML = `
            <p class="quote">"${review.text}"</p>
            <p class="author">- ${review.author}</p>
            `;
            container.appendChild(reviewElement);
        });
    }

    // Запускаем загрузку
    loadReviews();
});
