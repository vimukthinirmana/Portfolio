document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // About section tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Optional: Add loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // FormSubmit will handle the actual submission
        // You can keep this or let the form submit normally
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 3000);
    });
}

    // Animate skill bars when skills tab is shown
    const skillsTabBtn = document.querySelector('[data-tab="skills"]');
    if (skillsTabBtn) {
        skillsTabBtn.addEventListener('click', function () {
            setTimeout(() => {
                const skillProgresses = document.querySelectorAll('.skill-progress');
                skillProgresses.forEach(progress => {
                    progress.style.width = progress.style.width; // Trigger reflow to restart animation
                });
            }, 100);
        });
    }

    // CV Download functionality
    document.getElementById('downloadCvBtn').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = this.getAttribute('href');
        link.download = 'assts/CvResume/Vimukthi Nirmana CV Resume.pdf';

        // Append to the document, trigger click, then remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Optional: Track download event (for analytics)
        console.log('CV download initiated');
    });

    // CV Download functionality with visual feedback
    document.getElementById('downloadCvBtn').addEventListener('click', function (e) {
        e.preventDefault();

        const btn = this;
        const originalText = btn.textContent;

        // Change button text temporarily
        btn.textContent = 'Preparing download...';
        btn.disabled = true;

        // Create download link
        const link = document.createElement('a');
        link.href = this.getAttribute('href');
        link.download = 'assts/CvResume/Vimukthi Nirmana CV Resume.pdf';

        // Simulate delay for better UX (optional)
        setTimeout(() => {
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Reset button after download
            btn.textContent = originalText;
            btn.disabled = false;

            console.log('CV downloaded successfully');
        }, 500);
    });


    // typing Animation
    const element = document.getElementById('typed-text');
    const texts = ['UI/UX Designer', 'Front-End Developer'];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (charIndex < texts[textIndex].length) {
            element.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // Typing speed
        } else {
            setTimeout(() => {
                eraseText();
            }, 1000); // Pause after fully typed
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            element.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 50); // Erase speed
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeText, 500); // Pause before typing next
        }
    }

    // Start typing on load
    window.onload = typeText;






  // Wait for everything to load
//     window.addEventListener('load', function() {
//     // Additional check for WebFonts if you're using them
//     if (document.fonts) {
//       document.fonts.ready.then(function() {
//         hideLoader();
//       });
//     } else {
//       hideLoader();
//     }
    
//     function hideLoader() {
//       // Minimum display time (1.5 seconds)
//       setTimeout(function() {
//         const loader = document.getElementById('loader');
//         loader.classList.add('hidden');
        
//         // Remove from DOM after animation completes
//         setTimeout(() => {
//           loader.remove();
//         }, 500);
//       }, 1500);
//     }
//   });



});