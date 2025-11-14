/**
 * BREAK THE BEET - Main JavaScript
 * Handles navigation, form interactions, and animations
 */

// ================================
// NAVIGATION
// ================================

// Mobile menu toggle
const initMobileNav = () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
};

// Set active nav link based on current page
const setActiveNavLink = () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
};

// Sticky navigation on scroll
const initStickyNav = () => {
  const nav = document.querySelector('.navigation');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });
};

// ================================
// STICKY CTA
// ================================

const initStickyCTA = () => {
  const stickyCTA = document.querySelector('.sticky-cta');

  if (stickyCTA) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        stickyCTA.classList.add('visible');
      } else {
        stickyCTA.classList.remove('visible');
      }
    });
  }
};

// ================================
// MULTI-STEP FORM
// ================================

const initContactForm = () => {
  const form = document.querySelector('.contact-form');

  if (!form) return;

  let currentStep = 1;
  const totalSteps = 2;

  const showStep = (step) => {
    // Hide all sections
    document.querySelectorAll('.form-section').forEach(section => {
      section.classList.remove('active');
    });

    // Show current section
    const currentSection = document.getElementById(`step${step}`);
    if (currentSection) {
      currentSection.classList.add('active');
    }

    // Update step indicators
    document.querySelectorAll('.form-step').forEach((stepEl, index) => {
      if (index + 1 <= step) {
        stepEl.classList.add('active');
      } else {
        stepEl.classList.remove('active');
      }
    });

    // Update buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    if (prevBtn) prevBtn.style.display = step === 1 ? 'none' : 'inline-block';
    if (nextBtn) nextBtn.style.display = step === totalSteps ? 'none' : 'inline-block';
    if (submitBtn) submitBtn.style.display = step === totalSteps ? 'inline-block' : 'none';
  };

  const validateStep = (step) => {
    const currentSection = document.getElementById(`step${step}`);
    if (!currentSection) return false;

    const inputs = currentSection.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#e74c3c';
      } else {
        input.style.borderColor = '';
      }
    });

    return isValid;
  };

  // Next button
  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (validateStep(currentStep)) {
        currentStep++;
        showStep(currentStep);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert('Please fill in all required fields.');
      }
    });
  }

  // Previous button
  const prevBtn = document.getElementById('prevBtn');
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentStep--;
      showStep(currentStep);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateStep(currentStep)) {
      alert('Please fill in all required fields.');
      return;
    }

    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log('Form submitted:', data);

    // Show success message
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');

    // Reset form
    form.reset();
    currentStep = 1;
    showStep(currentStep);
  });

  // Initialize first step
  showStep(currentStep);
};

// ================================
// SCROLL ANIMATIONS
// ================================

const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements
  const animatedElements = document.querySelectorAll(
    '.menu-item, .service-card, .gallery-item, .chef-content, .section-header'
  );

  animatedElements.forEach(el => {
    observer.observe(el);
  });
};

// ================================
// GALLERY
// ================================

const initGallery = () => {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) {
        // Simple lightbox - can be enhanced with a proper lightbox library
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          cursor: pointer;
        `;

        const lightboxImg = document.createElement('img');
        lightboxImg.src = img.src;
        lightboxImg.style.cssText = `
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
        `;

        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
          document.body.removeChild(lightbox);
        });
      }
    });
  });
};

// ================================
// SMOOTH SCROLL
// ================================

const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
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
};

// ================================
// INITIALIZATION
// ================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  setActiveNavLink();
  initStickyNav();
  initStickyCTA();
  initContactForm();
  initScrollAnimations();
  initGallery();
  initSmoothScroll();
});

// Handle page visibility for animations
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    initScrollAnimations();
  }
});
