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

  /* ── File input: show which file was actually chosen, and warn/reject
     anything over Web3Forms' free-tier 5MB single-attachment limit ── */
  var MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;
  document.querySelectorAll('.file-input').forEach(function (input) {
    var status = input.closest('.file-input-wrap') && input.closest('.file-input-wrap').querySelector('.file-input-status');
    if (!status) return;
    input.addEventListener('change', function () {
      var file = input.files && input.files[0];
      if (!file) {
        status.textContent = status.dataset.empty || 'No file chosen';
        status.classList.remove('has-files', 'file-too-large');
        return;
      }
      if (file.size > MAX_ATTACHMENT_BYTES) {
        status.textContent = file.name + ' is over 5MB — please choose a smaller file, or share it via WhatsApp instead.';
        status.classList.remove('has-files');
        status.classList.add('file-too-large');
        input.value = '';
        return;
      }
      status.textContent = 'Selected: ' + file.name + ' (' + (file.size / (1024 * 1024)).toFixed(1) + 'MB)';
      status.classList.remove('file-too-large');
      status.classList.add('has-files');
    });
  });

  /* ── Date inputs: earliest selectable date is 2 days from today, giving
     the team lead time to actually schedule the inspection ── */
  document.querySelectorAll('input[type="date"]').forEach(function (input) {
    if (!input.min) {
      var earliest = new Date();
      earliest.setDate(earliest.getDate() + 2);
      var yyyy = earliest.getFullYear();
      var mm = String(earliest.getMonth() + 1).padStart(2, '0');
      var dd = String(earliest.getDate()).padStart(2, '0');
      input.min = yyyy + '-' + mm + '-' + dd;
    }
  });

  /* ── Gallery slideshows: crossfade through each project's photos ── */
  document.querySelectorAll('.gallery-slideshow').forEach(function (box) {
    var slides = box.querySelectorAll('.gallery-slide');
    if (slides.length < 2) return;
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove('is-active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('is-active');
    }, 5000);
  });

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

  /* ── Story track arrow buttons (scroll by one card + gap) ── */
  document.querySelectorAll('.story-track-arrow').forEach(function (btn) {
    var track = document.getElementById(btn.dataset.scrollTrack);
    if (!track) return;
    var dir = parseInt(btn.dataset.dir, 10) || 1;

    btn.addEventListener('click', function () {
      var card = track.querySelector('.pf-story-card, .testimonial-card');
      var gap = parseFloat(getComputedStyle(track).gap) || 0;
      var step = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
      track.scrollBy({ left: dir * step, behavior: 'smooth' });
    });
  });

  /* Keep arrow enabled/disabled state in sync with actual scroll position */
  document.querySelectorAll('.pf-story-track').forEach(function (track) {
    var arrows = document.querySelectorAll('.story-track-arrow[data-scroll-track="' + track.id + '"]');
    if (!arrows.length) return;

    function syncArrows() {
      var maxScroll = track.scrollWidth - track.clientWidth;
      arrows.forEach(function (btn) {
        var dir = parseInt(btn.dataset.dir, 10) || 1;
        if (dir < 0) btn.disabled = track.scrollLeft <= 1;
        else btn.disabled = track.scrollLeft >= maxScroll - 1;
      });
    }

    track.addEventListener('scroll', syncArrows);
    window.addEventListener('resize', syncArrows);
    syncArrows();
  });
})();
