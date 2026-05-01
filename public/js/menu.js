/**
 * Mobile Navigation Toggle
 * Minimal vanilla JS for hamburger menu open/close
 */

(function () {
  'use strict';

  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  const navLinks = nav ? nav.querySelectorAll('.nav__link') : [];

  if (!menuToggle || !nav) return;

  /**
   * Toggle menu open/closed state
   */
  function toggleMenu() {
    const isOpen = nav.classList.contains('is-open');

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  /**
   * Open the mobile menu
   */
  function openMenu() {
    nav.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Close the mobile menu
   */
  function closeMenu() {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Toggle on hamburger click
  menuToggle.addEventListener('click', toggleMenu);

  // Close menu when a nav link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      menuToggle.focus();
    }
  });

  // Close menu when clicking outside nav on mobile
  document.addEventListener('click', function (event) {
    if (
      nav.classList.contains('is-open') &&
      !nav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Header shadow on scroll
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Back to Top button
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    function toggleBackToTop() {
      if (window.scrollY > 200) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', toggleBackToTop);
    // Initial check on page load
    toggleBackToTop();

    backToTop.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
})();
