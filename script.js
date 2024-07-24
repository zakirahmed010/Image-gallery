document.addEventListener('DOMContentLoaded', () => {
    showImage(currentImageIndex);
});
const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg'
];

let currentImageIndex = 0;

function showImage(index) {
    const imageElement = document.getElementById('slider-image');
    imageElement.classList.remove('show');
    setTimeout(() => {
        imageElement.src = images[index];
        imageElement.classList.add('show');
    }, 500); 
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}


