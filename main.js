const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');

const changeSlide = ( ) => {

    const slideItems = document.getElementsByClassName('slide');
    const txtContainer = document.getElementsByClassName('txt-container');

    slideItems.item(0).classList.toggle('display')
    slideItems.item(1).classList.toggle('display');

    txtContainer.item(0).classList.toggle('display');
    txtContainer.item(1).classList.toggle('display');

}

prevArrow.addEventListener('touchend', changeSlide);
prevArrow.addEventListener('click', changeSlide);

nextArrow.addEventListener('touchend', changeSlide);
nextArrow.addEventListener('click', changeSlide);