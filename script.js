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
