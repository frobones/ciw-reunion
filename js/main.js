/**
 * CIW Annual Reunion - Main JavaScript
 * Handles navigation, scroll effects, and animations
 */

document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const nav = document.querySelector('.main-nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Handle scroll for navigation background
    function handleScroll() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    // Mobile navigation toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile nav when clicking a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = nav.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(function(el) {
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers
        animatedElements.forEach(function(el) {
            el.classList.add('visible');
        });
    }

    // Gallery lightbox functionality (basic)
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                // Could implement lightbox here
                console.log('Gallery item clicked:', img.src);
            }
        });
    });

    // Add data-time attribute for mobile timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(function(item) {
        const timeEl = item.querySelector('.timeline-time');
        const contentEl = item.querySelector('.timeline-content');
        if (timeEl && contentEl) {
            contentEl.setAttribute('data-time', timeEl.textContent);
        }
    });
});

/**
 * Squarespace Integration Notes:
 * 
 * To use this JavaScript in Squarespace:
 * 
 * 1. Go to Settings > Advanced > Code Injection
 * 2. In the Footer section, add:
 *    <script>
 *      // Paste the content of this file here
 *    </script>
 * 
 * Or, for better organization:
 * 
 * 1. Host this file on a CDN or use Squarespace's file hosting
 * 2. Add to Code Injection Footer:
 *    <script src="your-hosted-url/main.js"></script>
 */
