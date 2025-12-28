const header = document.getElementById('cabeça');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 80);
});

/* Reveal animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
