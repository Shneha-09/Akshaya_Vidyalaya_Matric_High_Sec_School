/* =============================================
   AKSHAYA VIDYALAYA - Main JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile Nav Toggle ---- */
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.nav-overlay');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Dropdown toggles on mobile
    document.querySelectorAll('.has-dropdown > a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const parent = this.parentElement;
          parent.classList.toggle('open');
        }
      });
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
      }
    });
  }

  /* ---- Hero Slider ---- */
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  let current = 0;
  let sliderTimer;

  function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    if (slides[index]) slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    current = index;
  }

  function nextSlide() {
    goToSlide((current + 1) % slides.length);
  }

  function startSlider() {
    sliderTimer = setInterval(nextSlide, 5000);
  }

  if (slides.length > 0) {
    goToSlide(0);
    startSlider();

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        clearInterval(sliderTimer);
        goToSlide(i);
        startSlider();
      });
    });

    const prevBtn = document.querySelector('.hero-arrow-prev');
    const nextBtn = document.querySelector('.hero-arrow-next');

    if (prevBtn) prevBtn.addEventListener('click', function () {
      clearInterval(sliderTimer);
      goToSlide((current - 1 + slides.length) % slides.length);
      startSlider();
    });

    if (nextBtn) nextBtn.addEventListener('click', function () {
      clearInterval(sliderTimer);
      nextSlide();
      startSlider();
    });
  }

  /* ---- Lab Tabs ---- */
  const labTabs = document.querySelectorAll('.lab-tab');
  const labContents = document.querySelectorAll('.lab-content');

  labTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      labTabs.forEach(t => t.classList.remove('active'));
      labContents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  /* ---- Video Modal ---- */
  const playBtns = document.querySelectorAll('.play-btn');
  const modal = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  const modalIframe = document.querySelector('.modal-box iframe');

  playBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (modal && modalIframe) {
        modalIframe.src = 'https://www.youtube.com/embed/iw1OqhBXpp8?autoplay=1';
        modal.classList.add('open');
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', function () {
      modal.classList.remove('open');
      if (modalIframe) modalIframe.src = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('open');
        if (modalIframe) modalIframe.src = '';
      }
    });
  }

  /* ---- Back to Top ---- */
  const backTop = document.querySelector('.back-top');
  if (backTop) {
    window.addEventListener('scroll', function () {
      backTop.classList.toggle('visible', window.scrollY > 400);
    });
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Counter Animation ---- */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    let count = 0;

    const timer = setInterval(function () {
      count = Math.min(count + step, target);
      el.textContent = count.toLocaleString();
      if (count >= target) clearInterval(timer);
    }, 16);
  }

  const counters = document.querySelectorAll('[data-target]');
  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => obs.observe(c));
  }

  /* ---- Scroll Reveal ---- */
  if ('IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => revealObs.observe(el));
  }

  /* ---- Active nav link ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || href.replace('.html', '') === currentPage.replace('.html', ''))) {
      link.closest('li').classList.add('active');
    }
  });

  /* ---- Sticky header shadow ---- */
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 10 ? '0 4px 24px rgba(26,82,118,0.13)' : '0 2px 20px rgba(26,82,118,0.09)';
    });
  }

  /* ---- Contact form submit ---- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = '✓ Message Sent!';
        btn.style.background = '#1e8449';
        contactForm.reset();
        setTimeout(function () {
          btn.textContent = 'Send Message';
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }

  /* ---- Ticker duplicate for seamless loop ---- */
  const tickerItems = document.querySelector('.ticker-items');
  if (tickerItems) {
    tickerItems.innerHTML += tickerItems.innerHTML;
  }

});
