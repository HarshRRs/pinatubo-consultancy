/* ============================================
   MAIN JAVASCRIPT - PINATUBO CONSULTANCY
   ============================================ */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const dropdowns = document.querySelectorAll('.dropdown');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Animate hamburger icon
      this.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('active');
          hamburger.classList.remove('active');
        }
      });
    });
  }
  
  // ============================================
  // MOBILE DROPDOWN TOGGLE
  // ============================================
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.classList.toggle('active');
      }
    });
  });
  
  // ============================================
  // NAVBAR SCROLL EFFECT
  // ============================================
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // ============================================
  // MOBILE STICKY BOOK NOW BUTTON
  // ============================================
  const stickyBtn = document.querySelector('.mobile-sticky-btn');
  
  if (stickyBtn) {
    window.addEventListener('scroll', function() {
      if (window.innerWidth <= 768) {
        if (window.scrollY > 300) {
          stickyBtn.style.display = 'block';
        } else {
          stickyBtn.style.display = 'none';
        }
      }
    });
  }
  
  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // ============================================
  // ANIMATION ON SCROLL (Fade in elements)
  // ============================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all service cards and sections
  document.querySelectorAll('.service-card, .glass-card').forEach(el => {
    observer.observe(el);
  });
  
});

// ============================================
// SERVICE CARD CLICK NAVIGATION
// ============================================
function navigateToService(serviceUrl) {
  window.location.href = serviceUrl;
}
