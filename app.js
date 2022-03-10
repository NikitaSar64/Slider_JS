let btnLeft = document.querySelector('.btn-left');
let btnRight = document.querySelector('.btn-right');
let btnCircle = document.querySelectorAll('.projects__btn-circle');
let btnNameProj = document.querySelectorAll('.project__slider-name span');
let sliderBox = document.querySelector('.project__slider-box');
let img = document.querySelectorAll('.project__slider-box img');
let count = 0;

btnRight.addEventListener('click', () => {
    if (count <= img.length - 1){
        btnCircle[count].classList.remove('active');
        btnNameProj[count].classList.remove('active-name')
        count++;
        if (count > 2){
            count = 0;
            sliderBox.style.transform = `translateX(-${img[count].offsetWidth * count}px)`;
        }
        sliderBox.style.transform = `translateX(-${img[count].offsetWidth * count}px)`;
        btnCircle[count].classList.add('active');
        btnNameProj[count].classList.add('active-name');
    }
})

btnLeft.addEventListener('click', () => {
    if (count <= img.length - 1){
        btnCircle[count].classList.remove('active');
        btnNameProj[count].classList.remove('active-name')
        count--;
        if (count < 0){
            count = 2;
            sliderBox.style.transform = `translateX(-${img[count].offsetWidth * count}px)`;

        }
        sliderBox.style.transform = `translateX(-${img[count].offsetWidth * count}px)`;
        btnCircle[count].classList.add('active');
        btnNameProj[count].classList.add('active-name');
    }
})

btnCircle.forEach((btn, index) => {
    btn.addEventListener('click', () =>{
        sliderBox.style.transform = `translateX(-${img[index].offsetWidth * index}px)`;
        switch (index) {
            case 0:
                btnCircle[0].classList.add('active');
                btnCircle[1].classList.remove('active');
                btnCircle[2].classList.remove('active');
                btnNameProj[0].classList.add('active-name');
                btnNameProj[1].classList.remove('active-name');
                btnNameProj[2].classList.remove('active-name');
                break;
            case 1:
                btnCircle[1].classList.add('active');
                btnCircle[0].classList.remove('active');
                btnCircle[2].classList.remove('active');
                btnNameProj[1].classList.add('active-name');
                btnNameProj[0].classList.remove('active-name');
                btnNameProj[2].classList.remove('active-name');
                break;
            case 2:
                btnCircle[2].classList.add('active');
                btnCircle[1].classList.remove('active');
                btnCircle[0].classList.remove('active');
                btnNameProj[2].classList.add('active-name');
                btnNameProj[1].classList.remove('active-name');
                btnNameProj[0].classList.remove('active-name');
            default:
                break;
        }
    })
})

btnNameProj.forEach((btn, index) => {
    btn.addEventListener('click', () =>{
        sliderBox.style.transform = `translateX(-${img[index].offsetWidth * index}px)`;
        switch (index) {
            case 0:
                btnNameProj[0].classList.add('active-name');
                btnNameProj[1].classList.remove('active-name');
                btnNameProj[2].classList.remove('active-name');
                btnCircle[0].classList.add('active');
                btnCircle[1].classList.remove('active');
                btnCircle[2].classList.remove('active');
                break;
            case 1:
                btnCircle[1].classList.add('active');
                btnCircle[0].classList.remove('active');
                btnCircle[2].classList.remove('active');
                btnNameProj[1].classList.add('active-name');
                btnNameProj[0].classList.remove('active-name');
                btnNameProj[2].classList.remove('active-name');
                break;
            case 2:
                btnCircle[2].classList.add('active');
                btnCircle[1].classList.remove('active');
                btnCircle[0].classList.remove('active');
                btnNameProj[2].classList.add('active-name');
                btnNameProj[1].classList.remove('active-name');
                btnNameProj[0].classList.remove('active-name');
            default:
                break;
        }
    })
})


