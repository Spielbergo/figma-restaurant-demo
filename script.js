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
    const nav = document.querySelector('.nav');
    const headerContainer = document.querySelector('.header .container');

    const createMobileNavElements = () => {
        // toggle button
        if (!document.querySelector('.mobile-menu-toggle')) {
            const toggle = document.createElement('button');
            toggle.classList.add('mobile-menu-toggle');
            toggle.setAttribute('aria-label', 'Toggle navigation');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.innerHTML = '☰';
            headerContainer.appendChild(toggle);

                    toggle.addEventListener('click', () => {
                        const mobileNav = document.querySelector('.mobile-nav');
                        const overlay = document.querySelector('.mobile-nav-overlay');
                        const isOpen = mobileNav.classList.contains('open');
                        if (isOpen) {
                            mobileNav.classList.remove('open');
                            mobileNav.setAttribute('aria-hidden', 'true');
                            mobileNav.setAttribute('inert', '');
                            overlay.classList.remove('active');
                            toggle.innerHTML = '☰';
                            toggle.setAttribute('aria-expanded', 'false');
                        } else {
                            mobileNav.classList.add('open');
                            mobileNav.setAttribute('aria-hidden', 'false');
                            mobileNav.removeAttribute('inert');
                            overlay.classList.add('active');
                            toggle.innerHTML = '✕';
                            toggle.setAttribute('aria-expanded', 'true');
                        }
                    });
        }

        // overlay
        if (!document.querySelector('.mobile-nav-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'mobile-nav-overlay';
            overlay.addEventListener('click', () => {
                const mobileNav = document.querySelector('.mobile-nav');
                const toggle = document.querySelector('.mobile-menu-toggle');
                if (mobileNav) {
                    mobileNav.classList.remove('open');
                    mobileNav.setAttribute('aria-hidden', 'true');
                    mobileNav.setAttribute('inert', '');
                }
                overlay.classList.remove('active');
                if (toggle) { toggle.innerHTML = '☰'; toggle.setAttribute('aria-expanded', 'false'); }
            });
            document.body.appendChild(overlay);
        }

        // mobile nav panel
        if (!document.querySelector('.mobile-nav')) {
            const mobileNav = document.createElement('aside');
            mobileNav.className = 'mobile-nav';
            mobileNav.setAttribute('aria-hidden', 'true');
            mobileNav.setAttribute('inert', '');
            mobileNav.innerHTML = `<nav class="mobile-nav-inner" role="navigation" aria-label="Mobile navigation">${nav.innerHTML}</nav>`;
            document.body.appendChild(mobileNav);

            mobileNav.querySelectorAll('a').forEach(a => {
                a.addEventListener('click', () => {
                    const toggle = document.querySelector('.mobile-menu-toggle');
                    const overlay = document.querySelector('.mobile-nav-overlay');
                    mobileNav.classList.remove('open');
                    mobileNav.setAttribute('aria-hidden', 'true');
                    mobileNav.setAttribute('inert', '');
                    if (overlay) overlay.classList.remove('active');
                    if (toggle) { toggle.innerHTML = '☰'; toggle.setAttribute('aria-expanded', 'false'); }
                });
            });
        }
    };

    const destroyMobileNavElements = () => {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');
        const overlay = document.querySelector('.mobile-nav-overlay');
        if (toggle) toggle.remove();
        if (mobileNav) mobileNav.remove();
        if (overlay) overlay.remove();
        if (nav) nav.style.display = '';
    };

    const mobileBreakpoint = window.matchMedia('(max-width: 768px)');

    if (mobileBreakpoint.matches) {
        createMobileNavElements();
        if (nav) nav.style.display = 'none';
    } else {
        destroyMobileNavElements();
    }

// Keep behavior in sync on resize: create/destroy mobile elements
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.matchMedia('(max-width: 768px)').matches) {
            createMobileNavElements();
            if (nav) nav.style.display = 'none';
        } else {
            destroyMobileNavElements();
        }
    }, 100);
});

// Parallax effect for hero section
let parallaxTicking = false;
window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
        requestAnimationFrame(() => {
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.backgroundPositionY = window.pageYOffset * 0.5 + 'px';
            }
            parallaxTicking = false;
        });
        parallaxTicking = true;
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
