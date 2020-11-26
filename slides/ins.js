let slides = [];
 let num = 1;

 let fetchedNumber = JSON.parse(localStorage.getItem('slideNumber'));


while(fetchedNumber>=num) {
    slides.push('Slide'+num+'.JPG');
    num++;
} 

function addSlideName(){
    let array = localStorage.getItem('directory').split('/');
    let base = array[0];
    let tail = array[1];


    document.querySelector('.name').innerHTML = `${base} - ${tail}`;
}

addSlideName();




let currentSlide = 0;

let canvas = document.getElementById('canvas');

console.log(localStorage.getItem('directory'))
canvas.setAttribute('src', `../library/${localStorage.getItem('directory')}/${slides[currentSlide]}`);
document.querySelector('.slide-info').innerHTML = `Slide: ${currentSlide+1} / ${slides.length}`;

function changeSlide(direction) {
    if (direction == 'left' && currentSlide != 0) {
        currentSlide--;
        canvas.setAttribute('src', `../library/${localStorage.getItem('directory')}/${slides[currentSlide]}`);
        document.querySelector('.slide-info').innerHTML = `Slide: ${currentSlide+1} / ${slides.length}`;
    }
    if (direction == 'right' && currentSlide != slides.length - 1) {
        currentSlide++;
        canvas.setAttribute('src', `../library/${localStorage.getItem('directory')}/${slides[currentSlide]}`);
        document.querySelector('.slide-info').innerHTML = `Slide: ${currentSlide+1} / ${slides.length}`;
    }
}

document.querySelector('.left').addEventListener('click', () => {
    changeSlide('left')
})
document.querySelector('.right').addEventListener('click', () => {
    changeSlide('right')
})

//listerner for fullscreen action

function addFullScreen(){
   /*$('.overlay').css('display','block');
   $('.slide-pad').css('position','fixed')
   $('.slide-pad').css('top','50%')
   $('.slide-pad').css('left','50%')
   $('.slide-pad').css('transform','translate(-50%, -50%)')
   $('.slide-pad').css('z-index','2')*/

   //$('.slide-controls').css('height','fit-content')
   //$('#canvas').css('width','0%')

   canvas.requestFullscreen()
}

function removeOverlay(){
    $('.overlay').css('display','none');
}

document.querySelector('#btn-fullscreen').addEventListener('click',()=>{
    addFullScreen();
})

$('.overlay').click(function(){
    removeOverlay();
})

window.onkeydown = function(e){
//if statement
    if(e.key == 'ArrowLeft'){
        changeSlide('left')
    }else if(e.key == 'ArrowRight'){
        changeSlide('right')
    }
}