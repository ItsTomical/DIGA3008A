document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');
  const footer = document.querySelector('footer');
  const defaultBottom = 40; // px spacing from bottom when no overlap

  function checkScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;

    // Footer top relative to the page
    const footerRect = footer.getBoundingClientRect();
    const footerTop = scrollY + footerRect.top;

    // Show button only after scrolling 100px
    if (scrollY > 100) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }

    // Calculate distance from bottom of viewport to footer top
    const distanceFromBottom = footerTop - (scrollY + windowHeight);

    // If footer is more than defaultBottom below viewport bottom, keep button fixed at defaultBottom
    if (distanceFromBottom > defaultBottom) {
      backToTop.style.bottom = defaultBottom + 'px';
    } else {
      // Footer is close, move button up so it stays defaultBottom above footer
      backToTop.style.bottom = (defaultBottom - distanceFromBottom) + 'px';
    }
  }

  window.addEventListener('scroll', checkScroll);

  // Initial call
  checkScroll();
});
