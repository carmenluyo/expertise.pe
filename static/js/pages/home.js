document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelectorAll(".splide");
  slider.forEach(function (element) {
    if (element) {
      import("../lib/splide.min.js").then(() => {
        const elementClass = element.getAttribute("class");
        const speed = element.getAttribute("data-speed");
        const autoplay = element.getAttribute("data-autoplay");
        const interval = element.getAttribute("data-interval");
        const arrows = element.getAttribute("data-arrows");
        const bullets = element.getAttribute("data-bullets");

        const slide = new Splide(`.${elementClass}`, {
          lazyLoad: "nearby",
          speed: speed,
          autoplay: autoplay === "true" ? true : false,
          interval: interval,
        }).mount();

        isExists(".splide__arrow", arrows);
        isExists(".splide__pagination", bullets);

        function isExists(component, value) {
          value && value === "true"
            ? null
            : slide.root.querySelectorAll(component).forEach(function (arrow) {
                arrow.remove();
              });
        }
      });
    }
  });
});
