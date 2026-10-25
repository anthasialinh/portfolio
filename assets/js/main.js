/**
 * Main Interactive Script for Pham Mai Linh's Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Set Current Year in Footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // 3. Theme Management (Dark / Light)
    initTheme();

    // 4. Mobile Menu Toggle
    initMobileMenu();

    // 5. Scroll Spy for Active Navigation Links
    initScrollSpy();
});

/* ==========================================================================
   Theme Toggle System (Persists to localStorage & System preference)
   ========================================================================== */
function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');

    // Default to dark mode for luxury finance tech look, or respect preference
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    } else if (storedTheme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        // default default: dark theme gives a prestigious investment banking appearance
        document.documentElement.classList.add('dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            if (window.lucide) {
                lucide.createIcons();
            }
        });
    }
}

/* ==========================================================================
   Mobile Navigation Drawer
   ========================================================================== */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

/* ==========================================================================
   Active Navigation Link on Scroll
   ========================================================================== */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 140;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================================================
   Skills Category Filtering
   ========================================================================== */
window.filterSkills = function(category) {
    const cards = document.querySelectorAll('.skill-card');
    const buttons = document.querySelectorAll('.skill-tab-btn');

    // Update active button state
    buttons.forEach(btn => {
        if (btn.getAttribute('data-tab') === category) {
            btn.classList.add('active-tab', 'bg-white', 'dark:bg-navy-800', 'text-slate-900', 'dark:text-white', 'shadow-sm');
            btn.classList.remove('text-slate-600', 'dark:text-slate-400');
        } else {
            btn.classList.remove('active-tab', 'bg-white', 'dark:bg-navy-800', 'text-slate-900', 'dark:text-white', 'shadow-sm');
            btn.classList.add('text-slate-600', 'dark:text-slate-400');
        }
    });

    // Filter card visibility
    cards.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hidden');
        } else if (category === 'finance' && card.classList.contains('finance-group')) {
            card.classList.remove('hidden');
        } else if (category === 'data' && card.classList.contains('data-group')) {
            card.classList.remove('hidden');
        } else if (category === 'leadership' && card.classList.contains('leadership-group')) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
};

/* ==========================================================================
   Copy Email To Clipboard with Toast Notification
   ========================================================================== */
window.copyEmail = function() {
    const email = document.getElementById('emailText').textContent.trim();
    navigator.clipboard.writeText(email).then(() => {
        const copyBtnText = document.getElementById('copyBtnText');
        if (copyBtnText) copyBtnText.textContent = 'Copied!';
        showToast('Email address copied to clipboard!');

        setTimeout(() => {
            if (copyBtnText) copyBtnText.textContent = 'Copy';
        }, 2500);
    }).catch(err => {
        showToast('Failed to copy. Please manually copy the email.');
    });
};

/* ==========================================================================
   Toast Notification Helper
   ========================================================================== */
function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('flex');

    setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('flex');
    }, 3000);
}

/* ==========================================================================
   CV Modal Control
   ========================================================================== */
window.openCvModal = function() {
    const modal = document.getElementById('cvModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
};

window.closeCvModal = function() {
    const modal = document.getElementById('cvModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
};

window.simulateCvDownload = function() {
    showToast('Download started for CV_Pham_Mai_Linh.pdf');
    closeCvModal();
};

/* ==========================================================================
   Contact Form Handling
   ========================================================================== */
window.handleContactSubmit = function(event) {
    event.preventDefault();
    showToast('Thank you! Your message has been sent successfully.');
    event.target.reset();
};
