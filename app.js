const steps = document.querySelectorAll('.step')
const left = document.querySelector('.fa-arrow-left');
const right = document.querySelector('.fa-arrow-right');

const slide1 = [
    ...document.querySelectorAll(`[data-slide="1"]`),
];
const slide2 = [
    ...document.querySelectorAll(`[data-slide="2"]`),
];
const slide3 = [
    ...document.querySelectorAll(`[data-slide="3"]`),
];

const slides = [slide1, slide2, slide3];

console.log(slides);

let lastActivatedStep = 0;

right.addEventListener('click', () => {
    if (lastActivatedStep === 2) return;
    lastActivatedStep++;
    steps[lastActivatedStep].classList.toggle('active');
    slides[lastActivatedStep - 1][4].classList.add('send-left');
    slides[lastActivatedStep][4].classList.remove('send-right');
    left.classList.remove('inactive-arrow');
    if (lastActivatedStep === 2) right.classList.add('inactive-arrow');
})

left.addEventListener('click', () => {
    if (lastActivatedStep === 0) return;
    steps[lastActivatedStep].classList.toggle('active');
    slides[lastActivatedStep - 1][4].classList.remove('send-left');
    slides[lastActivatedStep][4].classList.add('send-right');
    right.classList.remove('inactive-arrow');
    lastActivatedStep--;
    if (lastActivatedStep === 0) return left.classList.add('inactive-arrow');
})