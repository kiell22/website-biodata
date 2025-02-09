// Navbar berubah saat scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.95)";
        navbar.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.9)";
        navbar.style.boxShadow = "none";
    }
});

// Animasi fade-in saat scroll
const fadeElements = document.querySelectorAll(".fade-in");

const fadeInOnScroll = () => {
    fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll(); // Panggil saat halaman dimuat

// Smooth scroll saat klik link navbar
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth",
            });
        }
    });
});

// Efek hover pada tombol
document.querySelectorAll(".btn-danger").forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.15)";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});
