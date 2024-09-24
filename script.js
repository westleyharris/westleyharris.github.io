// Handle Navigation Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Burger Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Intersection Observer for Scroll Animations
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero');
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + "px";
});

// Existing code remains unchanged

// Scroll Progress Bar
window.addEventListener('scroll', function() {
    const progressBar = document.getElementById('progress-bar');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + '%';
});

// Back-to-Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 500) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Typed.js for Hero Subtitle
const typed = new Typed('.typed-text', {
    strings: ['Data Scientist', 'Machine Learning Enthusiast', 'AI Developer'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// Particles.js Configuration
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded');
});
