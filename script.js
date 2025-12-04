/* =====================================================
   1. FUNGSI MEMILIH CARD PAKET HOSTING
===================================================== */
function setActive(card) {
    const cards = document.querySelectorAll(".card");
    const labels = document.querySelectorAll(".label-top");

    // Hilangkan aktif dari semua card
    cards.forEach(c => c.classList.remove("active"));

    // Aktifkan card yang diklik
    card.classList.add("active");

    // Ambil nama paket di dalam element .title
    const title = card.querySelector(".title").textContent.trim();

    // Set label sesuai paket
    if (title === "Basic") {
        card.querySelector(".label-top").textContent = "PEMULA";
    } else if (title === "Medium") {
        card.querySelector(".label-top").textContent = "PRO";
    } else if (title === "Advanced") {
        card.querySelector(".label-top").textContent = "LANGGANAN";
    } else if (title === "VIP") {
        card.querySelector(".label-top").textContent = "TERPOPULER";
    }
}


/* =====================================================
   2. NAVBAR RESPONSIVE (TOGGLE + ACTIVE LINK)
===================================================== */

// Ambil elemen navbar
const navToggle = document.querySelector(".nav-toggle");
const navbarRight = document.querySelector(".navbar-right");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle menu mobile
if (navToggle && navbarRight) {
    navToggle.addEventListener("click", () => {
        navbarRight.classList.toggle("show");
        navToggle.classList.toggle("active");
    });
}

// Ketika menu link diklik
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {

        // Scroll smooth ke section
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        }

        // Set active menu
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // Tutup menu di mobile
        navbarRight.classList.remove("show");
        navToggle.classList.remove("active");
    });
});


/* =====================================================
   3. ANIMASI MENU KAPSUL (HOVER SCALE)
===================================================== */
document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.07)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
    });
});


/* =====================================================
   4. SMOOTH SCROLL UNTUK ANCHOR LINK
===================================================== */
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});


/* =====================================================
   5. ANIMASI FADE-IN SAAT SCROLL
===================================================== */
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
});

fadeElements.forEach(el => observer.observe(el));


/* =====================================================
   6. COPYRIGHT TAHUN OTOMATIS
===================================================== */
let yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
