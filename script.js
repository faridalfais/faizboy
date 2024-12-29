let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Kembali ke slide terakhir
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Kembali ke slide pertama
    }

    const offset = -currentIndex * 100; // Menghitung offset
    slides.style.transform = `translateX(${offset}%)`;
}