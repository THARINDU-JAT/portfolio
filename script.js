const typed = new Typed(".multiple-text", {
  strings: [
    "IT Undergraduate .",
    "Full Stack Developer .",
    "Software Engineer .",
    "Mobile App Developer .",
    "Web Developer .",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {

    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {

      navLinks.forEach(links => {

        links.classList.remove('active');

        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};


ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200 
 });

 ScrollReveal().reveal('.home-content, .heading, .heading-sub1', { origin:'top' });
 ScrollReveal().reveal('.home-img, .portfolio-box, .contact form, .skills-box, .certificates-box');
 ScrollReveal().reveal('.home-content h1, .about-img, .education-box, .title, .contact-box1', { origin:'left' });
 ScrollReveal().reveal('.home-content p, .about-content, .services-box, .heading-sub',{ origin:'right' });
