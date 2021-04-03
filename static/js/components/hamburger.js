document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  hamburger &&
    hamburger.addEventListener("click", function (event) {
      event.preventDefault();
      this.classList.toggle("active");
      this.closest(".header").classList.toggle("open");
      this.closest("body").classList.toggle("hidden");
    });
});
