console.log("JS Loaded")

let slides = document.querySelectorAll('.slide');

let sliderButtons = document.querySelector('.slider-navigation');

for (let i=0; i<slides.length; i++)
{
    let div = document.createElement('div');
    div.classList.add('btn');
    sliderButtons.appendChild(div);
}

let btns = document.querySelectorAll('.btn');

let currentSlide = 1;


// JavaScript for Slider manual Navigation

let manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove(`active`);
    });
    btns.forEach((btn) => {
        btn.classList.remove(`active`);
    });

    slides[manual].classList.add(`active`);
    btns[manual].classList.add(`active`);
}

btns.forEach((btn, i) => {
    btn.addEventListener(`click`, () => {
        manualNav(i);
        currentSlide = i;
    });
});