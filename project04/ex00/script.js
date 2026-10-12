/**
 * ==============================================================================
 * OSAMA AL-SA'ODI — PORTFOLIO CORE SCRIPTS
 * ==============================================================================
 *
 * MANDATORY REQUIREMENT — COMPLETE EVENT LIFECYCLE:
 * ------------------------------------------------------------------------------
 * 1. User Action:
 *    The visitor clicks the theme toggle button (<button id="themeToggle">).
 *
 * 2. Event Firing:
 *    The browser's event dispatcher detects the physical mouse click or tap
 *    and dispatches a 'click' MouseEvent through the DOM tree targeting the button.
 *
 * 3. JavaScript Callback:
 *    The registered event listener callback function (attached via addEventListener)
 *    is retrieved from the event queue by the JS Event Loop and executed.
 *
 * 4. DOM / CSS Mutation:
 *    - The callback invokes document.body.classList.toggle('dark-mode').
 *    - Mutating the class list on <body> causes the browser's CSSOM to instantly
 *      recalculate all CSS Custom Properties (--bg-base, --text-primary, etc.).
 *    - The button text and icon mutate via textContent / innerHTML to reflect the current state.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', function () {

    // --------------------------------------------------------------------------
    // 1. THEME SWITCHER WITH COMPLETE EVENT LIFECYCLE
    // --------------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeLabel = document.getElementById('themeLabel');
    const body = document.body;

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            // [DOM/CSS Mutation Step]
            body.classList.toggle('dark-mode');

            const isDark = body.classList.contains('dark-mode');

            if (isDark) {
                if (themeIcon) themeIcon.innerHTML = '&#9728;&#65039;';
                if (themeLabel) themeLabel.textContent = 'Light';
                themeToggleBtn.title = 'Switch to Light Mode';
            } else {
                if (themeIcon) themeIcon.innerHTML = '&#127769;';
                if (themeLabel) themeLabel.textContent = 'Dark';
                themeToggleBtn.title = 'Switch to Dark Mode';
            }
        });
    }

    // --------------------------------------------------------------------------
    // 2. MOBILE HAMBURGER MENU TOGGLE
    // --------------------------------------------------------------------------
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu on clicking any navigation link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
            });
        });
    }

    // --------------------------------------------------------------------------
    // 3. SCROLL SPY & ACTIVE NAV LINK HIGHLIGHTING
    // --------------------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function () {
        let currentSectionId = '';
        const scrollPosition = window.pageYOffset + 140;

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(function (navItem) {
            navItem.classList.remove('active');
            if (navItem.getAttribute('href') === '#' + currentSectionId) {
                navItem.classList.add('active');
            }
        });
    });

    // --------------------------------------------------------------------------
    // 4. CONTACT FORM SUBMISSION WITH PREVENTDEFAULT & VALIDATION
    // --------------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // Prevent actual page reload / form submission
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');

            const nameVal = nameInput ? nameInput.value.trim() : '';
            const emailVal = emailInput ? emailInput.value.trim() : '';
            const subjectVal = subjectInput ? subjectInput.value.trim() : '';
            const messageVal = messageInput ? messageInput.value.trim() : '';

            if (!nameVal || !emailVal || !subjectVal || !messageVal) {
                alert('Please fill out all fields before submitting.');
                return;
            }

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerHTML : 'Send Message';

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending... &#9203;';
            }

            const payload = {
                name: nameVal,
                email: emailVal,
                _subject: subjectVal,
                message: messageVal
            };

            fetch('https://formspree.io/f/mgaozqnz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(function (response) {
                if (response.ok) {
                    alert('Thank you, ' + nameVal + '! Your message has been sent successfully to Osama.');
                    contactForm.reset();
                } else {
                    alert('Oops! There was a problem submitting your message. Please try again or email directly at issam.saodi@gmail.com.');
                }
            })
            .catch(function () {
                alert('Network error. Please check your internet connection or email directly at issam.saodi@gmail.com.');
            })
            .finally(function () {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }
            });
        });
    }
});
