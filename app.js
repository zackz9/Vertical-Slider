const sliderContainer = document.querySelector('.sliderContainer');
const rightSlide = document.querySelector('.rightSlide');
const leftSlide = document.querySelector('.leftSlide');

const upBtn = document.querySelector('.upBtn');
const downBtn = document.querySelector('.downBtn');

const slidesLength = leftSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

//adding events to btns

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));



const changeSlide = (direction) => {

    const sliderHeight = sliderContainer.clientHeight ;
    console.log(sliderHeight);
    
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex> slidesLength -1) {
            activeSlideIndex= 0;
        }
  
    } else if (direction ==='down') {
        activeSlideIndex--;

        if(activeSlideIndex < 0) {
            activeSlideIndex= slidesLength -1;
        }
    }

    rightSlide.style.transform =`translateY(-${activeSlideIndex * sliderHeight}px)`;

    leftSlide.style.transform =`translateY(${activeSlideIndex * sliderHeight}px)`;




}

