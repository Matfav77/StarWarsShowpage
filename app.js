const steps = document.querySelectorAll('.step')
const left = document.querySelector('.fa-arrow-left');
const right = document.querySelector('.fa-arrow-right');

let lastActivatedDot = 0;

right.addEventListener('click', () => {
    if (lastActivatedDot === steps.length - 1) return;
    lastActivatedDot++;
    steps[lastActivatedDot].classList.toggle('active');
    left.classList.remove('inactive-arrow')
    if (lastActivatedDot === steps.length - 1) right.classList.add('inactive-arrow')
})

left.addEventListener('click', () => {
    if (lastActivatedDot === 0) return;
    steps[lastActivatedDot].classList.toggle('active');
    right.classList.remove('inactive-arrow')
    lastActivatedDot--;
    if (lastActivatedDot === 0) return left.classList.add('inactive-arrow');
})