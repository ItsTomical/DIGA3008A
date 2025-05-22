document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".nav_links a");
  const sections = document.querySelectorAll("section");

  // Smooth scrolling for navbar links
  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        event.preventDefault();
        if (targetId === "#top") {
          // Scroll to the absolute top for Home and About  
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.querySelector(targetId).scrollIntoView({
            behavior: "smooth",
            block: "center", // Center the section vertically
            inline: "nearest",
          });
        }
      }
    });
  });
});
