document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.getElementById("copyEmail");
  const msg = document.getElementById("copyMsg");

  emailLink.addEventListener("click", function (e) {
    e.preventDefault();

    const email = emailLink.textContent.trim();
    navigator.clipboard.writeText(email).then(() => {
      msg.style.display = "inline";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
    });
  });
});
