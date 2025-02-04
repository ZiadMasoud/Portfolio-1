document.querySelectorAll(".navbar-nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.getElementById("toggleProjects").addEventListener("click", function () {
  const extraProjects = document.querySelectorAll(".extra-project");
  extraProjects.forEach((project) => {
    project.style.display = project.style.display === "none" ? "block" : "none";
  });
  this.textContent = this.textContent === "Show More Projects" ? "Show Less Projects" : "Show More Projects";
});

document.getElementById("toggleExperience").addEventListener("click", function () {
  const extraExperience = document.querySelectorAll(".extra-experience");
  extraExperience.forEach((experience) => {
    experience.style.display = experience.style.display === "none" ? "block" : "none";
  });
  this.textContent = this.textContent === "Show More Experience" ? "Show Less Experience" : "Show More Experience";
});
