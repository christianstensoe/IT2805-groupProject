let moviesArray = [
    '../img/slides/AfterWork.webp', 
    '../img/slides/DumbMoney.jpeg', 
    '../img/slides/Exorsist.jpeg', 
    '../img/slides/FiveNightsAtFreddys.jpeg', 
    '../img/slides/KillerOfTheFlowerMoon.jpg', 
    '../img/slides/LarsErLol.jpeg', 
    '../img/slides/PawPatrol.jpeg', 
    '../img/slides/Sulis1907.jpeg'];

const slideshowDiv = document.getElementById('slideshow');
slideshowDiv.classList.add('mouseOverSlides')
let index = 0;

moviesArray.forEach((source, index) => {

    let img = document.createElement('img');
    img.src = source;
    img.style.opacity = 0; // Vises ikke med det foerste

    if(index === 0) {
        img.classList.add('active');
        img.style.opacity = 1;
    }
    slideshowDiv.appendChild(img);
})

const slides = slideshowDiv.getElementsByTagName('img');

changeSlide = () => {
    slides[index].style.opacity = 0;
    slides[index].classList.remove('active')

    index = (index + 1) % slides.length; 

    slides[index].style.opacity = 1
    slides[index].classList.add('active');
}

let autoSlide = setInterval(() => changeSlide(), 3000)

document.querySelector('.mouseOverSlides').addEventListener('mouseover', () => {
    clearInterval(autoSlide)
})

document.querySelector('.mouseOverSlides').addEventListener('mouseout', () => {
    autoSlide = setInterval(() => changeSlide(), 3000);
})






