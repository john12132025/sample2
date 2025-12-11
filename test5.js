// Basic JavaScript for minimal portfolio
// You can expand this later with form handling or interactive features.

// Display a simple welcome message in the console
console.log("Portfolio loaded successfully.");

// Example: Smooth scroll for navigation links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});