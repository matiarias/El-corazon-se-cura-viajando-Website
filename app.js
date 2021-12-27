// ---------------------------------- toogle menu --------------------------------

function toggleMenu() {

    let menuToggle = document.querySelector('.menuToggle')
    let navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    
}

// ---------------------------------- slide video --------------------------------

const slideShow = document.querySelector('#slideShow');
const slides = slideShow.getElementsByTagName('video');

let index = 0;

function nextSlide() {

    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides [index].classList.add('active');
    
};

function prevSlide() {

    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides [index].classList.add('active');
    
};

// -------------------------------------- slide text --------------------------------------------

const slideShowText = document.querySelector('#slideShowText');
const slidesText = slideShowText.getElementsByTagName('div');

let i = 0;

function nextSlideText() {

    slidesText[i].classList.remove('active');
    i = (i + 1) % slidesText.length;
    slidesText [i].classList.add('active');
    
};

function prevSlideText() {

    slidesText[i].classList.remove('active');
    i = (i - 1 + slidesText.length) % slidesText.length;
    slidesText [i].classList.add('active');
    
};




