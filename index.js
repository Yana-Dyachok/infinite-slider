const slider = document.querySelector('.slider'),
    sliderItems = document.querySelectorAll('.slider-item'),
    prevButton = document.querySelector('.prev-btn'),
    nextButton = document.querySelector('.next-btn'),
    firstCardWidth = sliderItems[0].offsetWidth;
console.log(firstCardWidth);

function clickButton(isNext) {
   slider.scrollLeft+=isNext?firstCardWidth:-firstCardWidth;
}

nextButton.addEventListener('click', () => clickButton(true));
prevButton.addEventListener('click', () => clickButton(false));

