let moviesArray = [
    '../slidesIMG/AfterWork.webp', 
    '../slidesIMG/DumbMoney.jpeg', 
    '../slidesIMG/Exorsist.jpeg', 
    '../slidesIMG/FiveNightsAtFreddys.jpeg', 
    '../slidesIMG/KillerOfTheFlowerMoon.jpg', 
    '../slidesIMG/LarsErLol.jpeg', 
    '../slidesIMG/PawPatrol.jpeg', 
    '../slidesIMG/Sulis1907.jpeg'];

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
    console.log('innn')
    clearInterval(autoSlide)
})

document.querySelector('.mouseOverSlides').addEventListener('mouseout', () => {
    console.log('uuuttt');
    autoSlide = setInterval(() => changeSlide(), 3000);
})






