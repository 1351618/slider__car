// app.js

const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
    slide.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slide.classList.add("active");
    });
}
