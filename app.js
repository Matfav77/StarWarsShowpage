const steps = document.querySelectorAll('.step')
const left = document.querySelector('.fa-arrow-left');
const right = document.querySelector('.fa-arrow-right');
const slide1 = [
    ...document.querySelectorAll(`[data-slide="1"]`),
];
console.log(slide1);
const slide2 = [
    ...document.querySelectorAll(`[data-slide="2"]`),
];
console.log(slide2);
const slide3 = [
    ...document.querySelectorAll(`[data-slide="3"]`),
];
console.log(slide3);

let lastActivatedStep = 0;

right.addEventListener('click', () => {
    if (lastActivatedStep === steps.length - 1) return;
    lastActivatedStep++;
    steps[lastActivatedStep].classList.toggle('active');
    left.classList.remove('inactive-arrow')
    if (lastActivatedStep === steps.length - 1) right.classList.add('inactive-arrow')
})

left.addEventListener('click', () => {
    if (lastActivatedStep === 0) return;
    steps[lastActivatedStep].classList.toggle('active');
    right.classList.remove('inactive-arrow')
    lastActivatedStep--;
    if (lastActivatedStep === 0) return left.classList.add('inactive-arrow');
})