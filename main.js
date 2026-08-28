// edeCON — shared interactions
document.addEventListener('DOMContentLoaded', () => {
  // Scroll-Reveal: Inhalte fliegen beim Scrollen sanft ein (angelehnt an leadsimply.de).
  // Markiert automatisch sinnvolle Blöcke — kein manuelles Klassen-Tagging pro Seite nötig.
  (() => {
    const groupSelectors = [
      '.card-grid > *', '.pillar-grid > *', '.steps > *',
      '.service-grid > *', '.job-list > *', '.trust-bar .container > *'
    ];
    const singleSelectors = [
      '.section-header', '.hero-dark-copy', '.hero-dark-photo',
      '.cta-band', '.quote-block', '.contact-info-card', '.sidebar-card',
      '.page-hero .breadcrumb, .page-hero h1, .page-hero .lede'
    ];
 
    const targeted = new Set();
 
    // Gruppen: Kind-Elemente bekommen eine gestaffelte Verzögerung
    groupSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        if (targeted.has(el)) return;
        el.classList.add('reveal');
        el.style.setProperty('--rv-delay', `${Math.min(i, 6) * 0.08}s`);
        targeted.add(el);
      });
    });
 
    // Einzelblöcke ohne Staffelung
    singleSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (targeted.has(el)) return;
        el.classList.add('reveal');
        targeted.add(el);
      });
    });
 
    if (!targeted.size) return;
 
    // Reduced-Motion: nichts beobachten, Inhalte bleiben normal sichtbar (CSS deckt das zusätzlich ab)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
 
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
 
    targeted.forEach(el => observer.observe(el));
  })();
 
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn = document.querySelector('.mobile-nav-close');
 
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => mobileNav.classList.add('open'));
  }
  if (closeBtn && mobileNav) {
    closeBtn.addEventListener('click', () => mobileNav.classList.remove('open'));
  }
  mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
 
  // Header shadow on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 8) {
        header.style.boxShadow = '0 2px 12px rgba(15,31,56,0.06)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
 
  // Contact form (demo — no backend wired up)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Vielen Dank! Ich melde mich zeitnah.';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = original; btn.disabled = false; form.reset(); }, 3500);
    });
  }
 
  // Pre-fill "Anliegen" field from ?betreff= query param (links from job postings, Bedarfsanalyse etc.)
  const anliegen = document.querySelector('#anliegen');
  if (anliegen) {
    const params = new URLSearchParams(window.location.search);
    const betreff = params.get('betreff');
    if (betreff) {
      anliegen.value = decodeURIComponent(betreff).replace(/\+/g, ' ') + ': ';
      anliegen.focus();
      anliegen.setSelectionRange(anliegen.value.length, anliegen.value.length);
    }
  }
 
  // Bedarfsanalyse form (demo — no backend wired up)
  const bedarfsForm = document.querySelector('#bedarfsanalyse-form');
  if (bedarfsForm) {
    bedarfsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = bedarfsForm.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Vielen Dank! Ich melde mich zeitnah.';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = original; btn.disabled = false; bedarfsForm.reset(); }, 3500);
    });
  }
});
