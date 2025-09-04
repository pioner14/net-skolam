// Ждём загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.reviews-carousel');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  
  if (!carousel || !prevBtn || !nextBtn) return;
  
  // Прокрутка вперёд
  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ 
      left: 320, // Ширина карточки + отступ
      behavior: 'smooth' 
    });
  });
  
  // Прокрутка назад
  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ 
      left: -320, 
      behavior: 'smooth' 
    });
  });
});
