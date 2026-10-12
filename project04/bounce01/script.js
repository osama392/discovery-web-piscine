/**
 * Chapter V — Bounce 01: Profile Photo Switcher
 * Pure JavaScript DOM manipulation updating element.src and element.alt
 * with a smooth CSS transition and zero page reloads.
 */

document.addEventListener('DOMContentLoaded', function () {
    const profileImg = document.getElementById('profileImg');
    const currentLabel = document.getElementById('currentLabel');
    const buttons = document.querySelectorAll('.btn-switch');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const newSrc = button.getAttribute('data-src');
            const newAlt = button.getAttribute('data-alt');
            const newLabel = button.getAttribute('data-label');

            // Skip if clicking the currently active photo
            if (profileImg.getAttribute('src') === newSrc) {
                return;
            }

            // Update active state on buttons
            buttons.forEach(function (b) {
                b.classList.remove('active');
            });
            button.classList.add('active');

            // Step 1: Smooth fade-out via CSS class
            profileImg.classList.add('fade-out');

            // Step 2: Swap attributes when faded out, then fade back in
            setTimeout(function () {
                // DOM manipulation: update .src and .alt
                profileImg.src = newSrc;
                profileImg.alt = newAlt;

                if (currentLabel) {
                    currentLabel.innerHTML = 'Active Persona: <strong>' + newLabel + '</strong>';
                }

                // Remove fade-out class to trigger smooth CSS transition in
                profileImg.classList.remove('fade-out');
            }, 300);
        });
    });
});
