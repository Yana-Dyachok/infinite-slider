const slider = document.querySelector('.slider'),
    sliderItems = document.querySelectorAll('.slider-item'),
    prevButton = document.querySelector('.prev-button'),
    nextButton = document.querySelector('.next-button'),
    firstCardWidth = sliderItems[0].offsetWidth;
console.log(firstCardWidth);

function clickButton(isNext) {
   slider.scrollLeft+=isNext?-firstCardWidth:firstCardWidth;
}

nextButton.addEventListener('click', () => clickButton(true));
prevButton.addEventListener('click', () => clickButton(false));