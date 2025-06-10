// Theme toggle and smooth scrolling functionality
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    // Check for saved theme preference or respect OS preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    // Apply the saved theme or OS preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
    // Update button icon based on current theme
    updateThemeToggleIcon();
    
    // Add click event listener to theme toggle button
    themeToggleBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update button icon
        updateThemeToggleIcon();
    });
    
    // Function to update theme toggle icon based on current theme
    function updateThemeToggleIcon() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const sunIcon = themeToggleBtn.querySelector('.fa-sun');
        const moonIcon = themeToggleBtn.querySelector('.fa-moon');
        
        if (currentTheme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }
    
    // Smooth scrolling functionality
    const navLinks = document.querySelectorAll('#main-nav a');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href');
            
            // Get the target element
            const targetElement = document.querySelector(targetId);
            
            // Scroll to the target element smoothly
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update URL without page reload (for bookmarking)
            history.pushState(null, null, targetId);
        });
    });
    
    // Add a back-to-top button functionality
    const createBackToTopButton = () => {
        // Create the button element
        const backToTopButton = document.createElement('button');
        backToTopButton.innerHTML = '↑';
        backToTopButton.setAttribute('id', 'back-to-top');
        backToTopButton.setAttribute('title', 'Back to top');
        backToTopButton.setAttribute('aria-label', 'Back to top');
        
        // Add the button to the body
        document.body.appendChild(backToTopButton);
        
        // Show/hide the button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
        
        // Add click event to scroll back to top
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };
    
    // Call the function to create the back-to-top button
    createBackToTopButton();
});

    // Active section highlighting functionality
    const sections = document.querySelectorAll('.section-box');
    const navLinks = document.querySelectorAll('#main-nav a');
    
    // Function to update active section
    function updateActiveSection() {
        const scrollPosition = window.scrollY + 100; // Offset for better detection
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            // Check if current scroll position is within this section
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all sections and nav links
                sections.forEach(s => s.classList.remove('active'));
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section
                section.classList.add('active');
                
                // Add active class to corresponding nav link
                const correspondingNavLink = document.querySelector(`#main-nav a[href="#${sectionId}"]`);
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    }
    
    // Add scroll event listener for active section highlighting
    window.addEventListener('scroll', updateActiveSection);
    
    // Initial call to set active section on page load
    updateActiveSection();

