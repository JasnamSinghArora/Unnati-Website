/* ============================================
   UNNATI · main.js
   - first-visit-only intro animation
   - mini page transitions between routes
   - EN/HI i18n toggle (localStorage)
   - scroll-reveal + nav theme switch
   ============================================ */

(() => {
  'use strict';

  const STORE_LANG = 'unnati.lang';
  const STORE_VISIT = 'unnati.visited';

  const root = document.documentElement;

  /* -----------------------------------------------------
     1) Language toggle  (EN/HI)
     ----------------------------------------------------- */
  const initLang = () => {
    const saved = localStorage.getItem(STORE_LANG);
    const lang = saved === 'hi' ? 'hi' : 'en';
    setLang(lang, false);
  };

  const setLang = (lang, save = true) => {
    root.setAttribute('lang', lang);
    if (save) localStorage.setItem(STORE_LANG, lang);
    document.title = lang === 'hi'
      ? (document.querySelector('meta[name="title-hi"]')?.content || document.title)
      : (document.querySelector('meta[name="title-en"]')?.content || document.title);

    // Update buttons that show the *other* language (the click affordance)
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

  /* -----------------------------------------------------
     2) Intro loader  (FIRST VISIT ONLY)
        Mini page-transition for subsequent navigations
     ----------------------------------------------------- */
  const intro    = document.querySelector('.intro');
  const pageTrans = document.querySelector('.page-trans');
  // ?intro=skip lets tooling/screenshots skip the loader entirely
  if (location.search.includes('intro=skip')) {
    sessionStorage.setItem(STORE_VISIT, '1');
    if (intro) intro.remove();
    if (pageTrans) pageTrans.remove();
    // Also force-show reveal elements so screenshots capture the whole page
    document.documentElement.classList.add('reveal-all');
  }
  const firstVisit = !sessionStorage.getItem(STORE_VISIT);

  // Flag so CSS holds reveals hidden during the intro
  let introActive = false;
  if (firstVisit && intro) {
    introActive = true;
    root.classList.add('intro-active');
  }

  if (firstVisit) {
    // Show big intro
    sessionStorage.setItem(STORE_VISIT, '1');
    if (pageTrans) pageTrans.remove();
    if (intro) {
      // Wait for fonts so animation lands clean
      const finishIntro = () => {
        intro.classList.add('done');
        // Intro: words finish ~4.2s, slide-up starts at 4.4s, ends at ~5.25s.
        // Trigger reveals just before slide-up begins so the page is already animating in
        // as the dark panel lifts off.
        setTimeout(() => {
          root.classList.remove('intro-active');
          startReveals();
        }, 4400);
        setTimeout(() => intro.remove(), 5400);
      };
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(finishIntro);
      } else {
        window.addEventListener('load', finishIntro);
      }
    }
  } else {
    // Subsequent navigation — show short reveal of the transition panel
    if (intro) intro.remove();
    if (pageTrans) {
      // start covered, then reveal
      pageTrans.classList.add('cover');           // hold cover state visually (already at translateY(0))
      // Force layout, then trigger reveal
      requestAnimationFrame(() => {
        pageTrans.classList.remove('cover');
        pageTrans.classList.add('reveal');
        setTimeout(() => {
          pageTrans.classList.remove('reveal');
          pageTrans.style.transform = '';
        }, 760);
      });
    }
  }

  /* Intercept internal links → animate out → navigate */
  if (pageTrans) {
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
      const href = a.getAttribute('href');
      if (!href) return;
      // Only intercept internal .html pages (not anchors, not mailto)
      const isInternal = /\.html(\?.*)?(#.*)?$/.test(href) || href === '/' || href === 'index.html';
      const isAnchor = href.startsWith('#');
      const isExternal = /^(https?:)?\/\//i.test(href);
      const isMail = href.startsWith('mailto:') || href.startsWith('tel:');
      if (isAnchor || isExternal || isMail || !isInternal) return;

      e.preventDefault();
      // Lock interaction during transition
      document.body.style.pointerEvents = 'none';
      pageTrans.style.transform = 'translateY(100%)';
      pageTrans.classList.remove('reveal');
      // Force a frame, then cover
      requestAnimationFrame(() => {
        pageTrans.classList.add('cover');
      });
      setTimeout(() => {
        window.location.href = href;
      }, 540);
    });
  }

  /* -----------------------------------------------------
     3) Nav — scroll state + dark-aware
     ----------------------------------------------------- */
  const nav = document.querySelector('.nav');
  const updateNav = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 30);

    const darkUnder = [...document.querySelectorAll('.section-dark, .page-head, .footer, .verbatim')]
      .some((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= 56 && r.bottom >= 56;
      });
    nav.classList.toggle('dark', darkUnder);
    root.classList.toggle('nav-dark', darkUnder);
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* -----------------------------------------------------
     4) Mobile menu
     ----------------------------------------------------- */
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
    navCenter.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => setOpen(false))
    );
    // ESC closes the menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navCenter.classList.contains('open')) setOpen(false);
    });
  }

  /* -----------------------------------------------------
     5) Reveal-on-scroll (deferred when first-visit intro is active)
     ----------------------------------------------------- */
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
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    // Gallery cascade — adds .in to the parent .gallery so children animate via CSS delays
    galleryIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            galleryIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.gallery').forEach((el) => galleryIO.observe(el));

    // Impact cells — adds .lit when each cell enters viewport, triggers the gold rule + plus reveal
    impactIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('lit');
            impactIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
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
      { threshold: 0.5 }
    );
    document.querySelectorAll('[data-count]').forEach((el) => counterIO.observe(el));
  }

  if (!introActive) startReveals();
  // expose for the first-visit callback above
  window.__unnatiStartReveals = startReveals;

  /* -----------------------------------------------------
     6) Tab filter (programs page)
     ----------------------------------------------------- */
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

  /* -----------------------------------------------------
     7) Year stamp
     ----------------------------------------------------- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* -----------------------------------------------------
     8) Contact form — no-op submit handler
     ----------------------------------------------------- */
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      const lang = root.getAttribute('lang');
      const thanks = lang === 'hi'
        ? 'धन्यवाद — हम जल्द ही उत्तर देंगे'
        : 'Thank you — we’ll reply soon';
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
