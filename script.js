const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        header.classList.remove('transparent');
    } else {
        header.classList.add('transparent');
        header.classList.remove('scrolled');
    }
});

// Initial state
if (window.scrollY === 0) {
    header.classList.add('transparent');
}

    const track = document.querySelector('.carousel-track');
    const images = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.right');
    const prevButton = document.querySelector('.carousel-button.left');
    
    let currentIndex = 0;

    const updateCarousel = () => {
        const imageWidth = images[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Swipe functionality for mobile devices
    let startX = 0;
    let moveX = 0;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener('touchmove', (e) => {
        moveX = e.touches[0].clientX - startX;
    });

    track.addEventListener('touchend', () => {
        if (moveX < -50 && currentIndex < images.length - 1) {
            currentIndex++;
        } else if (moveX > 50 && currentIndex > 0) {
            currentIndex--;
        }
        updateCarousel();
    });




    function openPopup(popupId) {
        document.getElementById(popupId).style.display = 'flex';
    }
    
    function closePopup(popupId) {
        document.getElementById(popupId).style.display = 'none';
    }
    


    document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            item.classList.toggle("active");

            // Close other open FAQs
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const marqueeContainers = document.querySelectorAll(".marquee-container");

    marqueeContainers.forEach((container) => {
        const row = container.querySelector(".marquee-row");

        // Clone content to ensure seamless animation
        const clone = row.cloneNode(true);
        container.appendChild(clone);

        // Set animation direction based on the data attribute
        const direction = container.dataset.direction;

        if (direction === "right") {
            row.style.animation = "scrollRight 10s linear infinite";
        } else {
            row.style.animation = "scrollLeft 10s linear infinite";
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Function to count up numbers
    function countUp(element, target, duration) {
        let start = 0;
        const increment = Math.ceil(target / (duration / 16));
        
        function updateNumber() {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(timer);
            }
            element.textContent = start.toLocaleString();
        }

        const timer = setInterval(updateNumber, 16);
    }

    // Elements and their target numbers
    countUp(document.getElementById('downloads'), 1581, 2000);
    countUp(document.getElementById('happy-users'), 1240, 2000);
    countUp(document.getElementById('active-users'), 980, 2000);
});



document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu a");

    const options = {
        threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach((link) => link.classList.remove("active"));

                // Add active class to the corresponding link
                const id = entry.target.getAttribute("id");
                const activeLink = document.querySelector(`.menu a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.gallery-track');
    const images = Array.from(track.children);

    // Duplicate gallery content
    images.forEach((image) => {
        const clone = image.cloneNode(true);
        track.appendChild(clone);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.gallery-track');
    let speed = 15; // Default speed in seconds

    // Function to update animation speed
    function updateSpeed(newSpeed) {
        track.style.animationDuration = `${newSpeed}s`;
    }

    // Example: Set speed dynamically
    updateSpeed(45); // Set speed to 20 seconds
});






