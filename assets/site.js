/* ═══════════════════════════════════════════════════
   PRISCI CONSTRUCTIONS — SHARED SITE BEHAVIOR
   Loaded on every page (homepage, services/*, knowledge/*).
   Every block guards on its target selector existing, so
   the same file safely no-ops for features a given page
   doesn't have.
═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Nav scroll shadow ── */
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('nav--scrolled', window.scrollY > 50);
    });
  }

  /* ── Mobile nav burger ── */
  var burger = document.getElementById('nav-burger');
  var navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      navLinks.classList.toggle('nav-links--open');
    });
  }

  /* ── Mobile services dropdown toggle ── */
  var dropdown = document.querySelector('.nav-has-dropdown');
  if (dropdown) {
    var ddTrigger = dropdown.querySelector('a');
    if (ddTrigger) {
      ddTrigger.addEventListener('click', function (e) {
        if (window.innerWidth < 960) {
          e.preventDefault();
          dropdown.classList.toggle('open');
        }
      });
    }
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
    });
  }

  /* ── FAQ accordion (.sp-faq-item / .sp-faq-q) — shared by homepage + service pages ── */
  var faqQuestions = document.querySelectorAll('.sp-faq-q');
  if (faqQuestions.length) {
    faqQuestions.forEach(function (q) {
      q.addEventListener('click', function () {
        var item = q.parentElement;
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.sp-faq-item.open').forEach(function (i) { i.classList.remove('open'); });
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  /* ── Service page subnav scroll-spy (.sp-section[id] / .sp-subnav-link) ── */
  var spSections = document.querySelectorAll('.sp-section[id]');
  var subLinks = document.querySelectorAll('.sp-subnav-link');
  if (spSections.length && subLinks.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          subLinks.forEach(function (l) { l.classList.remove('active'); });
          var active = document.querySelector('.sp-subnav-link[href="#' + entry.target.id + '"]');
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    spSections.forEach(function (s) { sectionObserver.observe(s); });
  }

  /* ── Knowledge article TOC scroll-spy (.kc-toc a / .kc-article h2[id]) ── */
  var tocLinks = document.querySelectorAll('.kc-toc a');
  var articleHeadings = document.querySelectorAll('.kc-article h2[id]');
  if (tocLinks.length && articleHeadings.length) {
    window.addEventListener('scroll', function () {
      var current = '';
      articleHeadings.forEach(function (s) {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      tocLinks.forEach(function (l) {
        l.classList.toggle('active', l.getAttribute('href') === '#' + current);
      });
    });
  }

  /* ── Scroll reveal — covers old (.fade-in-up/.sp-reveal) and new (.pf-*) classes ── */
  var revealTargets = document.querySelectorAll(
    '.pf-reveal, .pf-reveal-stagger, .pf-headline-line, .sp-reveal, .fade-in-up'
  );
  if (revealTargets.length) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add(el.classList.contains('pf-reveal') || el.classList.contains('pf-reveal-stagger') || el.classList.contains('pf-headline-line') ? 'in-view' : 'visible');
          revealObserver.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ── Flip-card tap-to-toggle (touch devices have no hover) ── */
  var flipCards = document.querySelectorAll('.flip-card');
  if (flipCards.length) {
    flipCards.forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (window.matchMedia('(hover: none)').matches) {
          e.preventDefault();
          card.classList.toggle('is-flipped');
        }
      });
    });
  }

  /* ── Sticky CTA bar — appears after scrolling past the hero ── */
  var stickyCta = document.querySelector('.sticky-cta');
  if (stickyCta) {
    var showAfter = window.innerHeight * 0.65;
    window.addEventListener('scroll', function () {
      stickyCta.classList.toggle('visible', window.scrollY > showAfter);
    });
  }

  /* ── Toast helper — window.pfToast('message') ── */
  window.pfToast = function (message, duration) {
    var toast = document.getElementById('pf-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'pf-toast';
      toast.className = 'pf-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    requestAnimationFrame(function () { toast.classList.add('visible'); });
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(function () {
      toast.classList.remove('visible');
    }, duration || 3500);
  };

  /* ── Generic number counter — any [data-count] element ── */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    var animateCounter = function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = 1800;
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    };
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { counterObserver.observe(el); });
  }

  /* ── Draggable story track (generic horizontal carousel) ── */
  document.querySelectorAll('.pf-story-track').forEach(function (track) {
    var isDown = false, startX, scrollLeft;
    track.addEventListener('pointerdown', function (e) {
      isDown = true;
      track.classList.add('dragging');
      startX = e.clientX;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener('pointermove', function (e) {
      if (!isDown) return;
      track.scrollLeft = scrollLeft - (e.clientX - startX);
    });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (evt) {
      track.addEventListener(evt, function () {
        isDown = false;
        track.classList.remove('dragging');
      });
    });
  });
})();
