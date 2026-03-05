(function () {
  'use strict';

  // Mobile navigation toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('is-open');
    });
  }

  // Contact form basic validation (no submit - static site)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var name = form.querySelector('input[name="name"]');
      var email = form.querySelector('input[name="email"]');
      var message = form.querySelector('textarea[name="message"]');
      var valid = true;
      if (name && !name.value.trim()) {
        valid = false;
        name.style.borderColor = '#c62828';
      } else if (name) {
        name.style.borderColor = '';
      }
      if (email && !email.value.trim()) {
        valid = false;
        email.style.borderColor = '#c62828';
      } else if (email) {
        email.style.borderColor = '';
      }
      if (message && !message.value.trim()) {
        valid = false;
        message.style.borderColor = '#c62828';
      } else if (message) {
        message.style.borderColor = '';
      }
      if (!valid) {
        e.preventDefault();
        return false;
      }
      // For static site: show alert; in production would submit to backend
      e.preventDefault();
      alert('Thank you for your message. We will get back to you soon. (This is a demo form.)');
      form.reset();
      return false;
    });
  }
})();
