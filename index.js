const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slider = document.getElementById('slider');
const slides = document.getElementById('slides')

nextBtn.addEventListener('click', nextBTN);
prevBtn.addEventListener('click', prevBTN)

let sliderIndex = 0;
const slideWidth = slider.clientWidth;
//console.log(slideWidth);

function prevBTN(){
   sliderIndex--;
   if(sliderIndex < 1){
    sliderIndex = 5
   }
   slides.style.transform = `translateX(-${slideWidth * sliderIndex}px)`
   slides.style.transition = 'ease-in-out 1s'
};

function nextBTN(){
    sliderIndex++;
    if (sliderIndex > 5){
        sliderIndex = 1
    }
    slides.style.transform = `translateX(-${slideWidth * sliderIndex}px)`
    slides.style.transition = 'ease-in-out 1s'

}