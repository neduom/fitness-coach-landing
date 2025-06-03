console.log("Landing Page loaded!");

AudioScheduledSourceNode.init({
    duration: 1000,
    once: true,
});

document.addEventListener("mousemove", (e) => {
  const moveEls = document.querySelectorAll("[data-move]");
  moveEls.forEach((el) => {
    const speed = 0.03;
    const x = (window.innerWidth / 2 - e.pageX) * speed;
    const y = (window.innerHeight / 2 - e.pageY) * speed;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(e) {
  const email = form.email.value;
  if (!email.includes('@')) {
    e.preventDefault();
    alert('Please enter a valid email address');
  }
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  form.reset();
});
