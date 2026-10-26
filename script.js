// 1. Animasi Progress Bar pada "What Can I Do" saat di-scroll
document.addEventListener("DOMContentLoaded", () => {
    const progressFills = document.querySelectorAll('.progress-bar-fill');
    
    // Intersection Observer untuk mengecek apakah elemen terlihat di layar
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ambil lebar persentase dari atribut data-width
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width; // Jalankan animasi CSS
            } else {
                // Reset kembali ke 0 jika keluar layar agar interaktif tiap dibuka
                entry.target.style.width = '0';
            }
        });
    }, { threshold: 0.5 }); // Muncul saat 50% elemen terlihat

    progressFills.forEach(fill => observer.observe(fill));
});

// 2. Logika Carousel (Swipe) untuk Achievement
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

function moveToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    // Jika ada di slide terakhir, kembali ke slide pertama
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    moveToSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    // Jika ada di slide pertama, mundur ke slide terakhir
    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex--;
    }
    moveToSlide(currentIndex);
});

// 3. Pop-up Konfirmasi untuk Eksternal Link
function confirmLink(url, platformName) {
    const userConfirm = confirm(`Anda akan diarahkan ke profil ${platformName}. Lanjutkan?`);
    if (userConfirm) {
        window.open(url, '_blank'); // Buka tab baru
    }
}