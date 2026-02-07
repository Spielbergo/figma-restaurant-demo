// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// Filter functionality for specialties section
const filterButtons = document.querySelectorAll('.filter-btn');
const specialtyItems = document.querySelectorAll('.specialty-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        // Filter items (in a real app, you'd filter based on data attributes)
        specialtyItems.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'grid';
            } else {
                // Here you would add data-category attributes to items and filter
                item.style.display = 'grid';
            }
            
            // Add animation
            item.style.animation = 'none';
            setTimeout(() => {
                item.style.animation = 'fadeIn 0.6s ease-out';
            }, 10);
        });
    });
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .specialty-item, .event-package').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Button hover effects
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Order button functionality
document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', function() {
        const dishName = this.closest('.card').querySelector('h3').textContent;
        alert(`Order placed for ${dishName}! (This would connect to your ordering system)`);
    });
});

// Reservation button functionality
document.querySelector('.btn-reservation').addEventListener('click', function() {
    alert('Opening reservation form... (This would connect to your booking system)');
});

// Book a table button functionality
document.querySelectorAll('.btn-primary').forEach(button => {
    if (button.textContent.includes('Book A Table') || button.textContent.includes('Visit us')) {
        button.addEventListener('click', function() {
            alert('Opening reservation form... (This would connect to your booking system)');
        });
    }
});

// Mobile menu toggle (for responsive design)
let mobileMenuOpen = false;
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('.nav');
        if (!document.querySelector('.mobile-menu-toggle')) {
            const toggle = document.createElement('button');
            toggle.classList.add('mobile-menu-toggle');
            toggle.innerHTML = '☰';
            toggle.style.cssText = `
                display: block;
                background: none;
                border: none;
                color: var(--gold);
                font-size: 24px;
                cursor: pointer;
            `;
            
            toggle.addEventListener('click', () => {
                mobileMenuOpen = !mobileMenuOpen;
                nav.style.display = mobileMenuOpen ? 'flex' : 'none';
                toggle.innerHTML = mobileMenuOpen ? '✕' : '☰';
            });
            
            document.querySelector('.header .container').prepend(toggle);
            nav.style.display = 'none';
        }
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Image lazy loading
document.querySelectorAll('img').forEach(img => {
    img.loading = 'lazy';
});

// Add subtle animation to navigation links
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

console.log('Dine Restaurant Website - Loaded Successfully');
