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