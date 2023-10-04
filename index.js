document.addEventListener("DOMContentLoaded", function(event) {
    const slider = document.querySelector(".slider");
    const sliderItems = document.querySelectorAll(".slider-item");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const slideWidth = sliderItems[0].clientWidth;
    let currentIndex = 0;
    let amountImg=Math.ceil(slider.clientWidth/slideWidth)
    
    prevBtn.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex =sliderItems.length-amountImg;
            slider.style.transition = "none";
            slider.style.transform = `translateX(${-slideWidth * (sliderItems.length)}px)`;
            setTimeout(() => {
                slider.style.transition = "transform 0.5s ease-in-out";
                currentIndex = sliderItems.length-amountImg;
                updateSlider();
            }, 0);
        }        
        else {
            updateSlider();
        }
    });

    nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= sliderItems.length-(amountImg-1)) {
            currentIndex =amountImg===1?0:sliderItems.length-amountImg;
            slider.style.transition = "none";
            slider.style.transform = `translateX(${slideWidth}px)`;
            setTimeout(() => {
                slider.style.transition = "transform 0.5s ease-in-out";
                currentIndex = 0;
                updateSlider();
            }, 0);
        } else {
            updateSlider();
        }
    });

    function updateSlider() {
        const translateX = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${translateX}px)`;
    }
});
