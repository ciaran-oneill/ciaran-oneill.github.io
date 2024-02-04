document.addEventListener('DOMContentLoaded', function() {
    // Toggles the nav items to show/hide when the hamburger menu is clicked
    const toggleHamburger = () => {
        const navItems = document.getElementById("nav-items");
        navItems.classList.toggle("hide");
    };

    // Attaches the event listener to the hamburger div
    document.getElementById("hamburger").addEventListener('click', toggleHamburger);
});
