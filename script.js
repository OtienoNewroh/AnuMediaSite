document.addEventListener("DOMContentLoaded", function() {
    // Toggle navigation menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Smooth scroll to sections
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetID = this.getAttribute("href");
            const targetElement = document.querySelector(targetID);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact-form");

    contactForm.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const eventLocation = document.getElementById("event-location").value;
        const eventType = document.getElementById("event-type").value;
        const eventDate = document.getElementById("event-date").value;
        const message = document.getElementById("message").value;

        // Basic validation
        if (!name || !email || !phone || !eventLocation || !eventType || !eventDate || !message) {
            alert("Please fill in all fields.");
            event.preventDefault(); // Stop the form from being submitted
        } else {
            // Add any other validation checks if necessary
            alert("Form submitted successfully!");
        }
    });
});

document.querySelectorAll('.film-item a').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Video clicked: ' + link.href);
    });
});

// Header

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const content = document.querySelector('.content');

    function adjustPadding() {
        const headerHeight = header.classList.contains('shrink') ? 50 : 90; // Adjust heights as needed
        content.style.paddingTop = `${headerHeight}px`;
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) { // Adjust scroll threshold as needed
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
        adjustPadding();
    });

    // Adjust padding on page load
    adjustPadding();
});


