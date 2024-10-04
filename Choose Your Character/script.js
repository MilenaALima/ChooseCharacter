const slider = document.querySelectorAll('.slider');
const passa = document.querySelectorAll('.passa');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;
let currentText = 0;

function hideSlider() { 
    slider.forEach(item => item.classList.remove('on'))
    passa.forEach(item => item.classList.remove('in'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
    passa[currentText].classList.add('in')
}

function nextSlider() {
    hideSlider()

    if (currentSlide == slider.length -1 && currentText == passa.length -1){
        currentSlide = 0
        currentText = 0
    } else {
        currentSlide++
        currentText++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()

    if (currentSlide == 0 && currentText == 0){
        currentSlide = slider.length -1
        currentText = passa.length -1
    } else {
        currentSlide--
        currentText--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

console.log(slider)