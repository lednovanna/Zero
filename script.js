document.addEventListener("DOMContentLoaded", () => {

const  swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop:true,
    speed: 500,
    navigation: {
        nextEl: ".swiper-button__right",
        prevEl:  ".swiper-button__left",
    },
    
    mousewheel: true,
    keyboard: true,

    on: {
        slideChange: function () {
            updateActiveSlide();
        }
    }
});

function updateActiveSlide() {
    const slides = document.querySelectorAll(".swiper-slide");
    
    slides.forEach(slide => {
        slide.classList.remove("active-slide"); // Удаляем выделение у всех карточек
    });

    const activeSlide = document.querySelector(".swiper-slide-active"); // Первая карточка
    if (activeSlide) {
        activeSlide.classList.add("active-slide");
    }
}

// Вызываем функцию при загрузке страницы
updateActiveSlide();


const buttons = document.querySelectorAll(".toggleCardButton"); // Получаем все кнопки

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        console.log("Навели на кнопку:", button); 
        button.classList.toggle("violet");
        button.classList.toggle("red");
    });

    button.addEventListener("mouseleave", () => {
        console.log("Убрали курсор с кнопки:", button); 
        button.classList.toggle("violet");
        button.classList.toggle("red");
    });
});

const reviewSwiper = new Swiper('.reviewSwiper', {
    
        slidesPerView: 1,
        spaceBetween: 10,
        loop:true,
        speed: 500,
        navigation: {
            nextEl: ".reviews-button__right",
            prevEl:  ".reviews-button__left",
        },
        
        mousewheel: true,
        keyboard: true,
    });


})

