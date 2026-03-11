/* ============================================================
   THARINDU LAKSHAN — PORTFOLIO SCRIPT
   ============================================================ */

/* ── Typed.js ─────────────────────────────────────────────── */
const typed = new Typed(".multiple-text", {
  strings: [
    "IT Undergraduate.",
    "Full Stack Developer.",
    "Software Engineer.",
    "Mobile App Developer.",
    "Web Developer.",
  ],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1400,
  startDelay: 600,
  loop: true,
});

/* ── Mobile Navigation ────────────────────────────────────── */
const menuBtn = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.querySelector("i").classList.toggle("bx-menu", !isOpen);
  menuBtn.querySelector("i").classList.toggle("bx-x", isOpen);
});

/* Close mobile nav when a link is clicked */
navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuBtn.querySelector("i").classList.add("bx-menu");
    menuBtn.querySelector("i").classList.remove("bx-x");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

/* ── Active nav link + sticky header on scroll ────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("header nav a");
const header = document.getElementById("header");

function onScroll() {
  const scrollY = window.scrollY;

  /* Sticky header */
  header.classList.toggle("sticky", scrollY > 80);

  /* Highlight active nav link */
  sections.forEach((sec) => {
    const top = sec.offsetTop - 140;
    const bottom = top + sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const active = document.querySelector(`header nav a[href="#${id}"]`);
      if (active) active.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScroll, { passive: true });

/* ── ScrollReveal ─────────────────────────────────────────── */
const sr = ScrollReveal({
  reset: false, // reveal once for a cleaner feel
  distance: "50px",
  duration: 800,
  delay: 100,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
});

/* Hero */
sr.reveal(".home-greeting", { origin: "top", delay: 100 });
sr.reveal(".home-name", { origin: "top", delay: 200 });
sr.reveal(".home-role", { origin: "top", delay: 300 });
sr.reveal(".home-bio", { origin: "top", delay: 400 });
sr.reveal(".home-actions", { origin: "bottom", delay: 500 });
sr.reveal(".home-img", { origin: "right", delay: 200 });

/* About */
sr.reveal(".about-img", { origin: "left" });
sr.reveal(".about-content", { origin: "right" });

/* Shared headings */
sr.reveal(".section-title", { origin: "top" });
sr.reveal(".section-sub", { origin: "top", delay: 150 });
sr.reveal(".section-overline", { origin: "top" });

/* Journey */
sr.reveal(".col-title", { origin: "top" });
sr.reveal(".timeline-item", { origin: "left", interval: 120 });

/* Services */
sr.reveal(".service-card", { origin: "bottom", interval: 120 });

/* Skills */
sr.reveal(".skill-item", { origin: "bottom", interval: 60 });

/* Portfolio */
sr.reveal(".portfolio-card", { origin: "bottom", interval: 120 });

/* Certificates */
sr.reveal(".cert-card", { origin: "bottom", interval: 100 });

/* Contact */
sr.reveal(".contact-info", { origin: "left" });
sr.reveal(".contact-form-wrap", { origin: "right" });

/* Footer */
sr.reveal(".footer", { origin: "bottom" });
