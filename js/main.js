// Shared navigation, language controls and page interactions.

(() => {
  'use strict';

  const STORE_LANG = 'unnati.lang';

  const root = document.documentElement;

  // Language toggle  (en/hi)
  const initLang = () => {
    const saved = localStorage.getItem(STORE_LANG);
    const lang = saved === 'hi' ? 'hi' : 'en';
    setLang(lang, false);
  };

  const setLang = (lang, save = true) => {
    root.setAttribute('lang', lang);
    if (save) localStorage.setItem(STORE_LANG, lang);
    document.title =
      lang === 'hi'
        ? document.querySelector('meta[name="title-hi"]')?.content || document.title
        : document.querySelector('meta[name="title-en"]')?.content || document.title;

    // Keep the toggle state in sync on every page.
    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.setAttribute('aria-pressed', lang === 'hi' ? 'true' : 'false');
    });
  };

  initLang();

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-lang-toggle]');
    if (!t) return;
    e.preventDefault();
    const next = root.getAttribute('lang') === 'en' ? 'hi' : 'en';
    setLang(next);
  });

  // Nav — scroll state + dark-aware
  const nav = document.querySelector('.nav');
  const updateNav = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 30);

    const darkUnder = [
      ...document.querySelectorAll('.section-dark, .page-head, .footer, .verbatim'),
    ].some((s) => {
      const r = s.getBoundingClientRect();
      return r.top <= 56 && r.bottom >= 56;
    });
    nav.classList.toggle('dark', darkUnder);
    root.classList.toggle('nav-dark', darkUnder);
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // Mobile menu
  const navToggle = document.querySelector('.nav-toggle');
  const navCenter = document.querySelector('.nav-center');
  if (navToggle && navCenter) {
    const setOpen = (open) => {
      navCenter.classList.toggle('open', open);
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('nav-open', open);
    };
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.addEventListener('click', () => {
      setOpen(!navCenter.classList.contains('open'));
    });
    navCenter
      .querySelectorAll('a')
      .forEach((a) => a.addEventListener('click', () => setOpen(false)));
    // ESC closes the menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navCenter.classList.contains('open')) setOpen(false);
    });
  }

  // Reveal-on-scroll
  let io, galleryIO, counterIO, impactIO;

  function startReveals() {
    if (io) return; // idempotent
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    // Observe the gallery as a group for the staggered photo reveal.
    galleryIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            galleryIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' },
    );
    document.querySelectorAll('.gallery').forEach((el) => galleryIO.observe(el));

    // The impact styles use a separate visibility class.
    impactIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('lit');
            impactIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    document.querySelectorAll('.impact-cell').forEach((el) => impactIO.observe(el));

    // Count-up — animate any [data-count] element from 0 → target on first viewport entry
    counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.dataset.count);
          if (isNaN(target)) return;
          const decimals = (el.dataset.count.split('.')[1] || '').length;
          const duration = 2000;
          const startVal = 0;
          const startTime = performance.now();
          const tick = (now) => {
            const t = Math.min((now - startTime) / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - t, 3);
            const val = startVal + (target - startVal) * eased;
            el.textContent = decimals
              ? val.toFixed(decimals)
              : Math.round(val).toLocaleString('en-IN');
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterIO.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );
    document.querySelectorAll('[data-count]').forEach((el) => counterIO.observe(el));
  }

  startReveals();

  // Tab filter (programs page)
  const tabs = document.querySelectorAll('.tab');
  if (tabs.length) {
    tabs.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        tabs.forEach((b) => b.classList.toggle('active', b === btn));
        document.querySelectorAll('[data-panel]').forEach((p) => {
          const show = target === 'all' || p.dataset.panel === target;
          p.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // Year stamp
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Local acknowledgement only; this form has no delivery service.
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      const lang = root.getAttribute('lang');
      const thanks =
        lang === 'hi' ? 'धन्यवाद — हम जल्द ही उत्तर देंगे' : 'Thank you — we’ll reply soon';
      if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = thanks;
        btn.disabled = true;
        setTimeout(() => {
          btn.innerHTML = orig;
          btn.disabled = false;
          form.reset();
        }, 3000);
      }
    });
  }
})();
