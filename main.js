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

  // EmailJS: sendet dem Absender eine automatische Bestätigungsmail (zusätzlich zur
  // Formspree-Benachrichtigung an Ertan). Bewusst "fire and forget" — ein Fehler hier
  // darf die eigentliche Formular-Übermittlung an Formspree nicht beeinflussen.
  if (window.emailjs) {
    window.emailjs.init({ publicKey: '3QHj7ADn991avAlxI' });
  }

  function sendAutoResponse(form) {
    if (!window.emailjs) return;

    const data = new FormData(form);
    const email = data.get('email');
    if (!email) return;

    // Name-Feld unterscheidet sich je Formular: Kontaktformular hat vorname/nachname,
    // Bedarfsanalyse hat ansprechpartner.
    let name = data.get('ansprechpartner');
    if (!name) {
      const vorname = data.get('vorname') || '';
      const nachname = data.get('nachname') || '';
      name = `${vorname} ${nachname}`.trim();
    }
    if (!name) name = 'Ihnen';

    window.emailjs.send('service_n1jbt3e', 'template_bypn64q', {
      to_email: email,
      to_name: name
    }).catch((err) => {
      console.warn('EmailJS-Bestätigungsmail konnte nicht gesendet werden:', err);
    });
  }

  // Gemeinsame Submit-Logik: sendet das Formular per fetch() an Formspree (action-Attribut),
  // zeigt bei Erfolg die bestehende Bestätigung, bei Fehler eine Fallback-Meldung mit Mail-Hinweis.
  function wireFormSubmit(form) {
    if (!form) return;
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      btn.disabled = true;
      btn.textContent = 'Wird gesendet …';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          btn.textContent = 'Vielen Dank! Ich melde mich zeitnah.';
          sendAutoResponse(form);
          form.reset();
        } else {
          throw new Error('Formspree-Fehler');
        }
      } catch (err) {
        btn.textContent = 'Senden fehlgeschlagen — bitte per Mail an info@edecon.de';
      }

      setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 4500);
    });
  }

  // Contact form
  const form = document.querySelector('#contact-form');
  wireFormSubmit(form);

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

  // Bedarfsanalyse form
  const bedarfsForm = document.querySelector('#bedarfsanalyse-form');
  wireFormSubmit(bedarfsForm);
});
