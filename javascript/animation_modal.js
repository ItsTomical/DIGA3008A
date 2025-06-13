document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');
  const closeBtn = document.querySelector('.video-close');
  const prevBtn = document.querySelector('.video-prev');
  const nextBtn = document.querySelector('.video-next');
  const videos = Array.from(document.querySelectorAll('.video-thumb'));
  let currentIndex = 0;

  function openModal(index) {
    currentIndex = index;
    modal.style.display = 'flex';
    modalVideo.src = videos[currentIndex].src;
    modalVideo.play();
  }

  videos.forEach((video, index) => {
    video.addEventListener('click', () => {
      openModal(index);
    });
  });

  function closeModal() {
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.src = '';
  }

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    openModal(currentIndex);
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % videos.length;
    openModal(currentIndex);
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'flex') {
      if (e.key === 'ArrowLeft') prevBtn.click();
      if (e.key === 'ArrowRight') nextBtn.click();
      if (e.key === 'Escape') closeBtn.click();
    }
  });
});
