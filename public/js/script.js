(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  // Set up ARIA attributes for accessibility
  toggle.setAttribute('aria-label', 'Toggle navigation menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'sidebar');

  // Update ARIA attributes when sidebar state changes
  checkbox.addEventListener('change', function() {
    toggle.setAttribute('aria-expanded', checkbox.checked ? 'true' : 'false');

    // Focus management
    if (checkbox.checked) {
      // Focus first link in sidebar when opened
      var firstLink = sidebar.querySelector('a');
      if (firstLink) {
        setTimeout(function() { firstLink.focus(); }, 100);
      }
    }
  });

  // Close sidebar when clicking outside
  document.addEventListener('click', function(e) {
    var target = e.target;

    if(!checkbox.checked ||
       sidebar.contains(target) ||
       (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);

  // Close sidebar with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && checkbox.checked) {
      checkbox.checked = false;
      toggle.focus(); // Return focus to toggle button
    }
  });

  // Trap focus within sidebar when open
  sidebar.addEventListener('keydown', function(e) {
    if (!checkbox.checked) return;

    if (e.key === 'Tab') {
      var focusableElements = sidebar.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
      var firstElement = focusableElements[0];
      var lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
})(document);
