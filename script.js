document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  // Disable scrolling initially
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    // Fade out preloader
    preloader.style.transition = "opacity 0.5s ease-out, visibility 0.5s ease-out";
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

    setTimeout(() => {
      preloader.style.display = "none";
      mainContent.style.display = "block";
      document.body.style.overflow = "auto"; // Enable scrolling

      // Apply fade-in effect on scroll
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing after revealing
          }
        });
      }, { threshold: 0.2 });

      fadeElements.forEach(element => observer.observe(element));

    }, 500);
  }, 1000);
});