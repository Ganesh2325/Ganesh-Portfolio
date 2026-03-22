// Initialize Lucide icons
lucide.createIcons();

// Mobile Menu Logic
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.menu-close-btn');
const mobileOverlay = document.getElementById('mobile-menu-overlay');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

const toggleMenu = (show) => {
    mobileOverlay.classList.toggle('active', show);
    document.body.style.overflow = show ? 'hidden' : '';
};

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => toggleMenu(true));
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', () => toggleMenu(false));
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Scroll Reveal Logic
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 50) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Nav Highlight & Smooth Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });

    // Navbar style on scroll
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Skills Toggle Logic
const toggleBtn = document.getElementById('toggle-skills');
const extraSkills = document.querySelectorAll('.extra-skill');
const toggleText = document.getElementById('toggle-text');
const toggleIcon = document.getElementById('toggle-icon');

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const isHidden = extraSkills[0].classList.contains('hidden');
        
        extraSkills.forEach(skill => {
            if (isHidden) {
                skill.classList.remove('hidden');
                skill.classList.add('show');
            } else {
                skill.classList.remove('show');
                skill.classList.add('hidden');
            }
        });

        if (isHidden) {
            toggleText.textContent = 'See Less';
            toggleIcon.setAttribute('data-lucide', 'chevron-up');
        } else {
            toggleText.textContent = 'More Skills';
            toggleIcon.setAttribute('data-lucide', 'chevron-down');
        }
        lucide.createIcons();
    });
}

// Contact Form Simulation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = 'Sending...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = 'Message Sent! <i data-lucide="check"></i>';
            lucide.createIcons();
            contactForm.reset();
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                lucide.createIcons();
            }, 3000);
        }, 1500);
    });
}
