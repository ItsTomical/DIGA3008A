// lightbox.js

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".lightbox .close");

  // Attach event listeners to all images with class "lightbox-target"
  document.querySelectorAll("img.lightbox-target").forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
      captionText.textContent = img.alt;
    });
  });

  // Close lightbox when clicking the close button
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Optional: Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
