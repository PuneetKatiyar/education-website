document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul'); // Targeting the menu list specifically

    // Toggle the menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });

    // Close the menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('show-menu');
        }
    });

    // Ensure menu toggles correctly on page load for small screens
    if (window.innerWidth <= 768) {
        navMenu.classList.remove('show-menu');
    }

    // Adjust menu toggle state on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('show-menu');
        }
    });
});
