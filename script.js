// Select all navigation links
const navLinks = document.querySelectorAll('nav a');

// Function to handle active link
const setActiveLink = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    // Check which section is in the viewport
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjusted to give a bit of buffer before activating the link
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });

    // Update the active class in the nav
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
};

// Add scroll event listener to handle active state dynamically
window.addEventListener('scroll', setActiveLink);

// Handle click events to manually add the active class
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior (scroll)
        
        // Remove active class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to the clicked link
        link.classList.add('active');

        // Scroll to the section
        const targetSection = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust to match header height or other offset
            behavior: 'smooth'
        });
    });
});

// Call setActiveLink initially in case the page is loaded in the middle of a section
setActiveLink();
