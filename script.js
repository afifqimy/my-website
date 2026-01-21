// ===== SMOOTH SCROLL =====
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// ===== LIGHT MODE TOGGLE =====
function toggleDarkMode() {
    document.body.classList.toggle("light");
}

// ===== MOBILE MENU =====
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}

// ===== SCROLL REVEAL =====
window.addEventListener("scroll", reveal);

function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

// ===== IMAGE ROTATION =====
const images = [
    "afif handsome pic.jpg",
    "afif ytp pic.jpg"
];

let currentImageIndex = 0;
const heroImg = document.getElementById("hero-img");
const heroSection = document.querySelector(".hero");

function rotateImage() {
    // Trigger fade animation on background
    heroSection.classList.remove("fade-bg");
    // Trigger reflow to restart animation
    void heroSection.offsetWidth;
    heroSection.classList.add("fade-bg");
    
    // Change images at mid-point of animation
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        heroImg.src = images[currentImageIndex];
        heroSection.style.backgroundImage = `linear-gradient(135deg, rgba(0,26,77,0.8), rgba(0,51,170,0.8)), url('${images[currentImageIndex]}')`;
    }, 600);
}

// Rotate image every 5 seconds
setInterval(rotateImage, 5000);

// ===== DOWNLOAD CV =====
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'AFIF_HAQIMY_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ===== DREAM SECTION BACKGROUND ROTATION =====
const dreamBackgrounds = [
    "airbus pic.png",
    "dassault pic.png"
];

let currentDreamBgIndex = 0;
const dreamSection = document.getElementById("dream");

function rotateDreamBackground() {
    currentDreamBgIndex = (currentDreamBgIndex + 1) % dreamBackgrounds.length;
    dreamSection.style.backgroundImage = `linear-gradient(135deg, rgba(0,26,77,0.7), rgba(0,51,170,0.7)), url('${dreamBackgrounds[currentDreamBgIndex]}')`;
    dreamSection.style.backgroundSize = "cover";
    dreamSection.style.backgroundPosition = "center";
}

// Rotate dream background every 5 seconds
setInterval(rotateDreamBackground, 5000);

// Set initial background
dreamSection.style.backgroundImage = `linear-gradient(135deg, rgba(0,26,77,0.7), rgba(0,51,170,0.7)), url('${dreamBackgrounds[0]}')`;
dreamSection.style.backgroundSize = "cover";
dreamSection.style.backgroundPosition = "center";
