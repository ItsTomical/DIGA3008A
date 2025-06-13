document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const cards = Array.from(track.children);

  let currentIndex = 0;

  function getCardWidth() {
    const card = cards[0];
    const gap = 40; // Matches your CSS .carousel-track gap
    const width = card.getBoundingClientRect().width;
    return width + gap;
  }

  function updateCarousel() {
    const cardWidth = getCardWidth();
    const offset = currentIndex * cardWidth;
    track.style.transform = `translateX(-${offset}px)`;
  }

  function equalizeCardHeights() {
    // Reset all heights first
    cards.forEach(card => {
      card.style.height = 'auto';
    });

    // Find tallest card
    let maxHeight = 0;
    cards.forEach(card => {
      const height = card.offsetHeight;
      if (height > maxHeight) maxHeight = height;
    });

    // Set all cards to tallest height
    cards.forEach(card => {
      card.style.height = `${maxHeight}px`;
    });

    // Optionally, set the container height too
    const container = document.querySelector('.carousel-track-container');
    if (container) {
      container.style.height = `${maxHeight}px`;
    }
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 2) {
      currentIndex++;
      updateCarousel();
    }
  });

  window.addEventListener('resize', () => {
    updateCarousel();
    equalizeCardHeights();
  });

  updateCarousel();
  equalizeCardHeights(); // ✅ Fix heights on load
});
