/* ============================================================
   Jasiri Tech Solutions — script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Dynamic copyright year ──────────────────────────────── */
  const yearEls = document.querySelectorAll('#currentYear');
  const year = new Date().getFullYear();
  yearEls.forEach(el => el.textContent = year);

  /* ── Active nav link ─────────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  /* ── Contact form — basic client-side validation + UX ────── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Sending…';
      btn.disabled = true;

      /* Simulate submission (replace with real endpoint / Formspree) */
      setTimeout(() => {
        btn.textContent = '✓ Message Sent!';
        btn.style.background = '#059669';
        form.reset();
        setTimeout(() => {
          btn.textContent = 'Send Message';
          btn.style.background = '';
          btn.disabled = false;
        }, 3500);
      }, 1200);
    });
  }

  /* ── Smooth reveal on scroll ─────────────────────────────── */
  const revealEls = document.querySelectorAll(
    '.service-card, .blog-card, .stat-card, .services-page-list li'
  );

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = `opacity .45s ease ${i * 0.07}s, transform .45s ease ${i * 0.07}s`;
      observer.observe(el);
    });

    /* When element becomes visible */
    document.addEventListener('animationframe', () => {});
    const styleTag = document.createElement('style');
    styleTag.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(styleTag);
  }

});
