const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

prevBtn.style.display = 'none';

prevBtn.addEventListener('click', (e) => {
    counter--
    carousel();
});

nextBtn.addEventListener('click', (e) => {
    counter++
    carousel();
});

function carousel() {
    // if (counter === slides.length){
    //     counter = 0;
    // }else if (counter < 0){
    //     counter = slides.length - 1
    // }
    if (counter < slides.length -1){
        nextBtn.style.display = 'block';
    }else{
        nextBtn.style.display = 'none';
    }

    if(counter > 0){
        prevBtn.style.display = 'block';
    }else{
        prevBtn.style.display = 'none';
    }

    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}