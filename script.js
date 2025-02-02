document.addEventListener("DOMContentLoaded", () => {


const  swiper = new Swiper('.mySwiper', {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop:true,
    speed: 500,
    navigation: {
        nextEl: ".swiper-button__right",
        prevEl:  ".swiper-button__left",
    },
    
    mousewheel: true,
    keyboard: true,

    breakpoints: {
       
        320: {
            slidesPerView: 1, // Для планшетов — 2 карточки
        },

        768: {
            slidesPerView: 2, // Для экранов до 320px — 1 карточка
        },

        900:  {
            slidesPerView: 2, // Для экранов до 320px — 1 карточка
        },

        1024: {
            slidesPerView: 3, // Для экранов до 320px — 1 карточка
        },
        
    },

    on: {
        slideChange: updateActiveSlide()
        
            
    }

    
});

function updateActiveSlide() {
    const slides = document.querySelectorAll(".swiper-slide .job-cards__item");
    

    
    slides.forEach(slide => {
        const parentSlide = slide.closest(".swiper-slide"); 

        if (parentSlide.classList.contains("swiper-slide-active")) {
            slide.classList.add("active-slide"); 
            applyActiveStyles(slide);
        } else {
            slide.classList.remove("active-slide"); 
            resetStyles(slide);
        }
    });
}

function resetStyles(slide) {
    const button = slide.querySelector(".job-card__btn");
    const heartIcon = slide.querySelector(".heart-icon");

    if (button) {
        button.classList.remove("active-btn");
    
    }

    if (heartIcon) {
        heartIcon.classList.remove("active-heart");
        
    }
}

function applyActiveStyles(slide) {
    const button = slide.querySelector(".job-card__btn");
    const heartIcon = slide.querySelector(".heart-icon");

    if (button) {
        button.classList.add("active-btn");
        
    }

    if (heartIcon) {
        heartIcon.classList.add("active-heart"); 
    }
}

document.addEventListener("DOMContentLoaded", updateActiveSlide);
document.querySelector(".mySwiper").addEventListener("transitionend", updateActiveSlide); 









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

    const buttonLeft = document.querySelector(".reviews-button__left");
    const buttonRight = document.querySelector(".reviews-button__right"); 
 
    
    

    buttonLeft.addEventListener("click", () => {
        buttonLeft.classList.add("orange");
        buttonRight.classList.remove("orange");

        
        
    });
    
        buttonRight.addEventListener("click", () => {
        buttonRight.classList.add("orange");
        buttonLeft.classList.remove("orange");

       
 });

 
 
    const buttonSwiperLeft = document.querySelector(".swiper-button__left");
    const buttonSwiperRight = document.querySelector(".swiper-button__right");

    buttonSwiperRight.addEventListener("click", () => {
    buttonSwiperRight.classList.add("orange");
    buttonSwiperLeft.classList.remove("orange");

   
});

    buttonSwiperLeft.addEventListener("click", () => {
    buttonSwiperLeft.classList.add("orange");
    buttonSwiperRight.classList.remove("orange");

    

   
    });

  document.querySelector('.burger').addEventListener('click', function() {
      this.classList.toggle('active-burger');
    document.querySelector('.header_menu').classList.toggle('open');
    }) 

})



