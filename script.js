document.getElementById("year").textContent = new Date().getFullYear();

var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var reveal = document.querySelectorAll(".gallery .frame, .gallery .pair");

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  reveal.forEach(function (el) {
    el.classList.add("pre-reveal");
    observer.observe(el);
  });
}
