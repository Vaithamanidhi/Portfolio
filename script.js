// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
  const next = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message)
    return alert('Please fill all fields');

  const subject = encodeURIComponent('Portfolio contact from ' + name);
  const bodyText = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:s.abiram24@gmail.com?subject=${subject}&body=${bodyText}`;
  form.reset();
});

// Clear form
document.getElementById('clearBtn').addEventListener('click', () => form.reset());
