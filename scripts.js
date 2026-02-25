// ...existing code...
function showPage(name) {
  const pageEl = document.getElementById('page-' + name);
  if (!pageEl) {
    console.warn('showPage: page not found ->', name);
    return;
  }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  pageEl.classList.add('active');

  document.querySelectorAll('.nav-links a[id]').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');

  window.scrollTo(0, 0);
}
// ...existing code...
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}
// ...existing code...
function submitForm(successId) {
  const el = document.getElementById(successId);
  if (el) {
    el.style.display = 'block';
    setTimeout(() => { el.style.display = ''; }, 5000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    console.warn('submitForm: success element not found ->', successId);
  }
}