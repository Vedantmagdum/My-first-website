let currentIndex = 0;

const images = document.querySelectorAll('.carousel-image');

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');   // FIXED classList
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextslide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevslide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}
