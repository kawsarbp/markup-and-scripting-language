/* ==========================================================================
   DIU Bus Tracker - Global Scripts
   JavaScript used by index.html, login.html and register.html

   Note: This file is kept simple and beginner friendly.
   ========================================================================== */

/* ==========================================================================
   1. LANDING PAGE (index.html)
   ========================================================================== */

/*
   DOMContentLoaded runs the code below only after the whole HTML
   page has finished loading. This makes sure the elements we need
   (like #year or #menu-btn) already exist.
*/
document.addEventListener('DOMContentLoaded', function () {

    /* ----------------------------------------------------------
       1.1 Footer - show the current year automatically
       ----------------------------------------------------------
       We write the current year (for example 2026) into the
       element with id="year", so the copyright never gets old.
    ---------------------------------------------------------- */
    var yearEl = document.getElementById('year');

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    /* ----------------------------------------------------------
       1.2 Navbar - open and close the mobile menu
       ----------------------------------------------------------
       The hamburger button (id="menu-btn") toggles the dropdown
       menu (id="mobile-menu"). When a menu link is clicked, the
       menu closes again so the page can scroll to that section.
    ---------------------------------------------------------- */
    var menuBtn = document.getElementById('menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {

        // Clicking the hamburger button shows/hides the menu
        menuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('open');
        });

        // Clicking any link inside the menu closes it
        mobileMenu.querySelectorAll('[data-menu-link]').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('open');
            });
        });
    }

    /* ----------------------------------------------------------
       1.3 Navbar - add a shadow after scrolling
       ----------------------------------------------------------
       When the user scrolls down more than 10px, we add the CSS
       class "scrolled" to the navbar. This class adds a shadow
       so the navbar stands out from the page content.
    ---------------------------------------------------------- */
    var navbar = document.getElementById('navbar');

    var onScroll = function () {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // Listen for every scroll, and also run once on page load
    window.addEventListener('scroll', onScroll);
    onScroll();
});

/* ==========================================================================
   2. AUTH PAGES (login.html and register.html)
   ========================================================================== */

/* ----------------------------------------------------------
   2.1 Toggle password visibility (Login + Register)
   ----------------------------------------------------------
   Called by onclick="togglePassword()" on the eye button.
   It switches the password input between hidden and visible
   text, and swaps the eye icon so the user can see the state.
---------------------------------------------------------- */
function togglePassword() {
    var input = document.getElementById('password');
    var icon = document.getElementById('eye-icon');

    if (input.type === 'password') {
        // Show the password as normal text and use the "eye closed" icon
        input.type = 'text';
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />';
    } else {
        // Hide the password again and use the "eye open" icon
        input.type = 'password';
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />';
    }
}

/* ----------------------------------------------------------
   2.2 Toggle confirm password visibility (Register only)
   ----------------------------------------------------------
   Same as above, but works on the "Confirm Password" field
   (id="password_confirmation") and its own icon
   (id="eye-icon-confirm").
---------------------------------------------------------- */
function toggleConfirmPassword() {
    var input = document.getElementById('password_confirmation');
    var icon = document.getElementById('eye-icon-confirm');

    if (input.type === 'password') {
        // Show the confirm password as normal text
        input.type = 'text';
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />';
    } else {
        // Hide the confirm password again
        input.type = 'password';
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />';
    }
}