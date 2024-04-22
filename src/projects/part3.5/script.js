// Toggles the nav items to show/hide when the hamburger menu is clicked
const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
  
  // Calls the toggleHamburger function when the hamburger menu is clicked
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
  };