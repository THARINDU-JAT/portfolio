/* ── Typed.js ───────────────────────────────────────── */
const typed = new Typed(".multiple-text", {
  strings: [
    "IT graduate.",
    "Full Stack Developer.",
    "Software Engineer.",
    "Mobile App Developer.",
    "Web Developer.",
  ],
  typeSpeed: 55,
  backSpeed: 40,
  backDelay: 1200,
  loop: true,
});

/* ── Mobile menu ────────────────────────────────────── */
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

/* ── Active nav & sticky header ─────────────────────── */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  /* sticky */
  header.classList.toggle("sticky", scrollY > 80);

  /* close mobile menu on scroll */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  /* highlight active link */
  sections.forEach((sec) => {
    const offset = sec.offsetTop - 160;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        const match = document.querySelector(`header nav a[href*="${id}"]`);
        if (match) match.classList.add("active");
      });
    }
  });
});

/* ── ScrollReveal ───────────────────────────────────── */
ScrollReveal({
  reset: false, // fire once = smoother feel
  distance: "60px",
  duration: 900,
  delay: 150,
  easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
});

ScrollReveal().reveal(".home-content, .heading, .heading-sub, .section-label", {
  origin: "top",
});
ScrollReveal().reveal(
  ".home-img, .portfolio-box, .skills-box, .certificates-box",
  { origin: "bottom", interval: 80 },
);
ScrollReveal().reveal(
  ".about-img, .education-box, .col-title, .contact-info-panel",
  { origin: "left" },
);
ScrollReveal().reveal(".about-content, .services-box, .contact-form-panel", {
  origin: "right",
  interval: 100,
});
