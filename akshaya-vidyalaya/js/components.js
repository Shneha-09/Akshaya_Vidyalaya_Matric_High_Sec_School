/* =============================================
   AKSHAYA VIDYALAYA - Components (Header / Footer)
   Inject shared HTML into every page
   ============================================= */

const AV = {

  /* Determine relative path prefix based on page location */
  prefix: (function () {
    const path = window.location.pathname;
    return path.includes('/pages/') ? '../' : '';
  })(),

  headerHTML: function (p) {
    return `
<!-- TOP BAR -->
<div class="topbar">
  <div class="container">
    <div class="topbar-inner">
      <div class="topbar-left">
        <a href="mailto:akshayavidyalaya@gmail.com">
          <span>✉</span> akshayavidyalaya@gmail.com
        </a>
        <a href="#">
          <span>📍</span> Cauvery Ammal Campus, Akshaya Nagar, Seelapadi, Dindigul
        </a>
      </div>
      <div class="topbar-right follow-us">
        <span class="topbar-label">Follow Us:</span>
        <div class="social-links">
          <a href="https://www.facebook.com/profile.php?id=100093361665543" target="_blank" title="Facebook">f</a>
          <a href="https://www.youtube.com/@akshayavidyalaya6801" target="_blank" title="YouTube">▶</a>
          <a href="https://www.instagram.com/vidyalayaakshaya" target="_blank" title="Instagram">◈</a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- HEADER -->
<header class="header">
  <div class="container">
    <nav class="nav-inner">
      <a href="${p}index.html" class="logo">
        <img src="${p}images/logo.png" alt="Akshaya Vidyalaya Logo" onerror="this.style.display='none'">
        <div class="logo-text">
          <strong>AKSHAYA VIDYALAYA</strong>
          <span>MATRIC HR. SEC. SCHOOL</span> 
        </div>       
      </a>

      <ul class="nav-menu">
        <li><a href="${p}index.html">Home</a></li>
        <li class="has-dropdown">
          <a href="#">About</a>
          <ul class="dropdown">
            <li><a href="${p}pages/about.html">About Us</a></li>
            <li><a href="${p}pages/trust.html">Management Trustees</a></li>
            <li><a href="${p}pages/trustee-1.html">Managing Trustee Message</a></li>
            <li><a href="${p}pages/trustee-2.html">Trustee Message</a></li>
            <li><a href="${p}pages/principal.html">Principal's Message</a></li>
          </ul>
        </li>
        <li class="has-dropdown">
          <a href="#">Academic</a>
          <ul class="dropdown">
            <li><a href="${p}pages/campus.html">Campus Details</a></li>
            <li><a href="${p}pages/curriculum.html">Academics &amp; Curriculum</a></li>
            <li><a href="${p}pages/facilities.html">Laboratories &amp; Facilities</a></li>
          </ul>
        </li>
        <li><a href="${p}pages/admission.html">Admission</a></li>
        <li><a href="${p}pages/gallery.html">Gallery</a></li>
        <li><a href="${p}pages/career.html">Careers</a></li>
        <li><a href="${p}pages/contact.html">Contact Us</a></li>
      </ul>

      <div class="nav-cta">
        <a href="${p}pages/admission.html" class="btn btn-primary">🎓 Admission</a>
      </div>
      <button class="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </div>
</header>

<!-- Video Modal -->
<div class="modal-overlay">
  <div class="modal-box">
    <button class="modal-close">✕</button>
    <iframe src="" allowfullscreen title="School Video"></iframe>
  </div>
</div>`;
  },

  footerHTML: function (p) {
    return `
<!-- QUICK CONTACT BANNER -->
<section class="quick-contact">
  <div class="container">
    <div class="quick-contact-inner">
      <div>
        <h3>We're Here to Help You</h3>
        <p>We welcome your inquiries, feedback and visits. Feel free to connect with us through the following contact details.</p>
      </div>
      <a href="${p}pages/contact.html" class="btn btn-white">📞 Contact Us</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <!-- About -->
      <div class="footer-about">
        <img src="${p}images/logo.png" alt="Akshaya Vidyalaya" onerror="this.style.display='none'">
        <p>Founded in June 1994, Akshaya Vidyalaya Matriculation Higher Secondary School has steadily grown into one of the most respected institutions in Dindigul district. Spread across a sprawling 25-acre green campus in Seelapadi.</p>
        <div class="footer-social">
          <a href="https://www.facebook.com/profile.php?id=100093361665543" target="_blank" title="Facebook">f</a>
          <a href="https://www.instagram.com/vidyalayaakshaya" target="_blank" title="Instagram">◈</a>
          <a href="https://www.youtube.com/@akshayavidyalaya6801" target="_blank" title="YouTube">▶</a>
          <a href="https://wa.me/919363704545" target="_blank" title="WhatsApp">💬</a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="${p}pages/about.html">About Us</a></li>
          <li><a href="${p}pages/curriculum.html">Academic</a></li>
          <li><a href="${p}pages/admission.html">Admission</a></li>
          <li><a href="${p}pages/facilities.html">Facilities</a></li>
          <li><a href="${p}pages/campus.html">Campus Details</a></li>
          <li><a href="${p}pages/gallery.html">Gallery</a></li>
          <li><a href="${p}pages/career.html">Careers</a></li>
          <li><a href="${p}pages/contact.html">Contact Us</a></li>
        </ul>
      </div>

      <!-- Recent Posts -->
      <div>
        <h4>Recent Posts</h4>
        <div class="footer-post">
          <img src="${p}images/a-14.png" alt="Rakshabandhan" onerror="this.src='${p}images/placeholder.jpg'">
          <div class="footer-post-info">
            <p>📅 Jan, 2025</p>
            <h5>Rakshabandhan Celebration — popular and traditional Hindu annual ritual</h5>
          </div>
        </div>
        <div class="footer-post">
          <img src="${p}images/a-15.png" alt="Onam Celebration" onerror="this.src='${p}images/placeholder.jpg'">
          <div class="footer-post-info">
            <p>📅 Aug, 2025</p>
            <h5>Onam Celebration features famous snake boat races, dance performances</h5>
          </div>
        </div>
      </div>

      <!-- QR / Services -->
      <div>
        <h4>Our Services</h4>
        <p style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:12px;">Scan to visit our website</p>
        <div class="footer-qr">
          <img src="${p}images/qr (2).png" alt="QR Code" onerror="this.style.display='none'">
          <p>akshayavidyalayamhss.com</p>
        </div>
        <div style="margin-top:20px;">
          <p style="font-size:13px;color:rgba(255,255,255,0.6);">📞 <a href="tel:9363704545" style="color:rgba(255,255,255,0.8);">9363704545</a></p>
          <p style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:6px;">📞 <a href="tel:04512410383" style="color:rgba(255,255,255,0.8);">0451-2410383</a></p>
          <p style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:6px;">✉ <a href="mailto:akshayavidyalaya@gmail.com" style="color:rgba(255,255,255,0.8);">akshayavidyalaya@gmail.com</a></p>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p>© 2026 AKSHAYA VIDYALAYA MATRIC HR. SEC. SCHOOL. All Rights Reserved.</p>
    </div>
  </div>
</footer>

<!-- Back to Top -->
<button class="back-top" title="Back to top">↑</button>

<!-- WhatsApp Float -->
<a href="https://wa.me/919363704545" class="whatsapp-float" target="_blank" title="Chat on WhatsApp">💬</a>`;
  },

  inject: function () {
    const p = this.prefix;
    const headerEl = document.getElementById('av-header');
    const footerEl = document.getElementById('av-footer');
    if (headerEl) headerEl.innerHTML = this.headerHTML(p);
    if (footerEl) footerEl.innerHTML = this.footerHTML(p);
  }
};

AV.inject();
