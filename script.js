// ─── SCROLL FADE-IN ANIMATION ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ─── HERO FADE ON LOAD ───
window.addEventListener('load', () => {
  document.querySelectorAll('#hero .fade-in').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 200);
  });
});

// ─── MOBILE MENU TOGGLE ───
function toggleMenu() {
  document.querySelector('.mobile-menu').classList.toggle('open');
}

// ─── CONTACT FORM SUBMIT ───
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#2d6a4f';
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}
