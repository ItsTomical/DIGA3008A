document.addEventListener("DOMContentLoaded", () => {
  const text = "Thomas Yardley";
  const target = document.getElementById("typed-name");
  let index = 0;

  function type() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(type, 120); // typing speed (in ms)
    }
  }

  type();
});
