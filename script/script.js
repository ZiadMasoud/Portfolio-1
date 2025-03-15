document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navbar links
  document.querySelectorAll(".navbar-nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Set the current year in the footer
  const currentYearElement = document.getElementById("currentYear");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Back to Top Button functionality
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        backToTopBtn.classList.add("show");
        backToTopBtn.classList.remove("hide");
      } else {
        backToTopBtn.classList.add("hide");
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Show More functionality for Projects, Experience, and Education sections
  const toggleSections = [
    { buttonId: "showMoreProjects", itemsClass: ".extra-project" },
    { buttonId: "toggleExperience", itemsClass: ".extra-experience" },
    { buttonId: "toggleEducation", itemsClass: ".extra-education" },
  ];

  toggleSections.forEach(({ buttonId, itemsClass }) => {
    const button = document.getElementById(buttonId);
    const items = document.querySelectorAll(itemsClass);

    if (button && items.length > 0) {
      button.style.display = "inline-block";

      button.addEventListener("click", function () {
        const isHidden = Array.from(items).some(
          (item) => item.style.display === "none" || item.style.display === ""
        );

        items.forEach((item) => {
          item.style.display = isHidden ? "block" : "none";
        });

        button.innerHTML = isHidden
          ? `<i class="fas fa-minus"></i> Show Less`
          : `<i class="fas fa-plus"></i> Show More`;
      });
    }
  });

  // Initialize AOS (Animate on Scroll)
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
});
