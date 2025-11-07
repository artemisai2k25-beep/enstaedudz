/* ============================================
   ENSTA Website - Main JavaScript
   ============================================ */

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ============================================
// Smooth Scroll for Navigation Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarMenu = document.getElementById('navbarMenu');
            const menuToggle = document.getElementById('menuToggle');
            if (navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }

            // Update active nav link
            updateActiveNavLink(this.getAttribute('href'));
        }
    });
});

// ============================================
// Navbar Sticky with Background Blur
// ============================================

const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;

    // Update active nav link on scroll
    updateActiveNavLinkOnScroll();
});

// ============================================
// Mobile Menu Toggle
// ============================================

const menuToggle = document.getElementById('menuToggle');
const navbarMenu = document.getElementById('navbarMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = menuToggle.querySelectorAll('span');
        if (menuToggle.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbarMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navbarMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ============================================
// Counter Animation for Stats
// ============================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, {
    threshold: 0.5
});

// Observe all counter elements
document.querySelectorAll('.stat-number, .chiffre-number').forEach(counter => {
    counterObserver.observe(counter);
});

// ============================================
// Filter System for Spécialités
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');
const specialiteCards = document.querySelectorAll('.specialite-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        specialiteCards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                const category = card.getAttribute('data-category');
                if (category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// ============================================
// Update Active Nav Link
// ============================================

function updateActiveNavLink(hash) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === hash) {
            link.classList.add('active');
        }
    });
}

function updateActiveNavLinkOnScroll() {
    const sections = document.querySelectorAll('.section, #hero');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// Form Validation
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            showNotification('Veuillez remplir tous les champs', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Veuillez entrer une adresse email valide', 'error');
            return;
        }

        // Simulate form submission
        showNotification('Message envoyé avec succès !', 'success');
        contactForm.reset();
    });
}

// ============================================
// Notification System
// ============================================

function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Lazy Loading for Images
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
}

// ============================================
// Parallax Effect for Hero Section (Optional - can be disabled for performance)
// ============================================

// Disabled by default for better performance
// Uncomment to enable parallax effect
/*
const parallaxHero = debounce(() => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
}, 5);

window.addEventListener('scroll', parallaxHero);
*/

// ============================================
// Initialize on DOM Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav link
    updateActiveNavLinkOnScroll();
    
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.animation = 'fadeInUp 1s ease-out 0.3s forwards';
    }
});

// ============================================
// Smooth Scroll to Top Button (Optional)
// ============================================

// Create scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.setAttribute('aria-label', 'Retour en haut');
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 999;
    transition: all 0.3s ease;
`;

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'translateY(-5px)';
    scrollToTopBtn.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'translateY(0)';
    scrollToTopBtn.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
});

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// ============================================
// Add hover effects to cards
// ============================================

document.querySelectorAll('.presentation-card, .specialite-card, .departement-card, .admission-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ============================================
// Performance: Debounce scroll events
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    updateActiveNavLinkOnScroll();
}, 10);

window.addEventListener('scroll', debouncedScroll);

