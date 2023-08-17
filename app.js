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

// ! -------    Автору урока   --------
// ***
// спасибо за ваши усилия в создании данного материала.
// В домашнем задании было указано изменение изображений.
// Имеющиеся изображения мне действительно понравились.
// Однако, для выполнения задания, я перенес их в этот проект вместо использования ссылок.
// ! ----------------------------------
