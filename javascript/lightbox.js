document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".lightbox .close");
  const prevBtn = document.querySelector(".lightbox .prev");
  const nextBtn = document.querySelector(".lightbox .next");
  const images = Array.from(document.querySelectorAll("img.lightbox-target"));
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "block";
    lightboxImg.src = images[currentIndex].src;
    captionText.textContent = images[currentIndex].alt;
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      openLightbox(index);
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing lightbox
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openLightbox(currentIndex);
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing lightbox
    currentIndex = (currentIndex + 1) % images.length;
    openLightbox(currentIndex);
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "block") {
      if (e.key === "ArrowLeft") prevBtn.click();
      if (e.key === "ArrowRight") nextBtn.click();
      if (e.key === "Escape") closeBtn.click();
    }
  });
});
