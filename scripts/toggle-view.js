(function () {
  const STORAGE_KEY = 'ditw-view-mode';

  function isTogglePage() {
    const path = window.location.pathname;
    // Lesson pages: /modules/module_1/module1_1.html etc.
    const isLesson = /\/modules\/module_\d+\/module\d+_\d+\.html/.test(path);
    // Instructors page
    const isInstructors = /\/instructors\.html/.test(path);
    return isLesson || isInstructors;
  }

  function setView(mode) {
    const isInstructor = mode === 'instructor';
    document.body.classList.toggle('instructor-view', isInstructor);
    localStorage.setItem(STORAGE_KEY, mode);
    updateButton(isInstructor);
    updateBanner(isInstructor);
  }

  function updateButton(isInstructor) {
    const btn = document.getElementById('view-toggle-btn');
    if (!btn) return;
    btn.innerHTML = isInstructor
      ? '<span class="toggle-opt">Student</span> <span class="toggle-divider">|</span> <span class="toggle-opt active">Instructor</span>'
      : '<span class="toggle-opt active">Student</span> <span class="toggle-divider">|</span> <span class="toggle-opt">Instructor</span>';
    btn.title = isInstructor
      ? 'Currently in Instructor View - click to switch to Student View'
      : 'Currently in Student View - click to switch to Instructor View';
  }

  function updateBanner(isInstructor) {
    let banner = document.getElementById('instructor-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'instructor-banner';
      banner.textContent = 'INSTRUCTOR VIEW - answers and instructor notes are visible';
      const navbar = document.querySelector('.navbar');
      if (navbar && navbar.nextSibling) {
        navbar.parentNode.insertBefore(banner, navbar.nextSibling);
      } else {
        document.body.insertBefore(banner, document.body.firstChild);
      }
    }
    banner.style.display = isInstructor ? 'block' : 'none';
  }

  function createButton() {
    const btn = document.createElement('button');
    btn.id = 'view-toggle-btn';
    btn.setAttribute('aria-label', 'Toggle between Student and Instructor view');
    btn.addEventListener('click', function () {
      const current = document.body.classList.contains('instructor-view')
        ? 'instructor' : 'student';
      setView(current === 'instructor' ? 'student' : 'instructor');
    });

    const toc = document.getElementById('quarto-margin-sidebar');
    if (toc) {
      const block = document.createElement('div');
      block.className = 'view-block';
      const heading = document.createElement('div');
      heading.className = 'view-heading';
      heading.textContent = 'View';
      block.appendChild(heading);
      block.appendChild(btn);
      toc.insertBefore(block, toc.firstChild);
    } else {
      btn.classList.add('toggle-btn-fallback');
      document.body.appendChild(btn);
    }
    return btn;
  }

  function init() {
    // Only show the toggle on lesson pages and the instructors page
    if (!isTogglePage()) return;

    const saved = localStorage.getItem(STORAGE_KEY) || 'student';
    createButton();
    setView(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();