document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Image Slider
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlides() {
        slides.forEach(slide => slide.style.display = 'none');
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].style.display = 'block';
        setTimeout(showSlides, 5000);
    }
    showSlides();

    // Form Validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        
        if (name.value.trim() === '') {
            showError(name, 'Name is required');
        }
        
        if (!validateEmail(email.value)) {
            showError(email, 'Invalid email address');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(input, message) {
        const errorDiv = input.nextElementSibling;
        errorDiv.textContent = message;
        input.classList.add('error');
    }
});
