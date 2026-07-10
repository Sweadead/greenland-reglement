window.addEventListener("mousemove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 22;
  document.documentElement.style.setProperty("--parallax-1", `${x * 0.25}px`);
  document.documentElement.style.setProperty("--parallax-2", `${x * 0.45}px`);
  document.documentElement.style.setProperty("--parallax-3", `${x * 0.7}px`);
  document.documentElement.style.setProperty("--parallax-4", `${x}px`);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      document.querySelectorAll("details").forEach((other) => {
        if (other !== detail) other.open = false;
      });
    }
  });
});

const menuBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".links");

menuBtn.addEventListener("click", () => {
  links.classList.toggle("open");
});
