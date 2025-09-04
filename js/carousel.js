document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.reviews-carousel');
  const cards = document.querySelectorAll('.review-card');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  
  if (!carousel || !cards.length) return;
  
  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 20; // Ширина карточки + gap
  
  // Функция для обновления позиции карусели
  function updateCarousel() {
    carousel.scrollTo({
      left: currentIndex * cardWidth,
      behavior: 'smooth'
    });
    
    // Блокируем кнопки в крайних положениях
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= cards.length - 3;
  }
  
  // Обработчики для кнопок
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 3) {
      currentIndex++;
      updateCarousel();
    }
  });
  
  // Адаптация к изменению размера окна
  window.addEventListener('resize', () => {
    cardWidth = cards[0].offsetWidth + 20;
    updateCarousel();
  });
});
