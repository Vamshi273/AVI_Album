const images = document.querySelectorAll(".image-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// Close Lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Next Image
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// Previous Image
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// Filter System
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".image-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.getAttribute("data-category");

        cards.forEach(card => {
            card.style.display =
                category === "all" || card.getAttribute("data-category") === category
                    ? "block"
                    : "none";
        });

    });
});
