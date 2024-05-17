// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const image = document.getElementById('bg-image');

    image.addEventListener('click', () => {
        if (image.style.filter === 'none') {
            image.style.filter = 'grayscale(100%)';
        } else {
            image.style.filter = 'none';
        }
    });
});
