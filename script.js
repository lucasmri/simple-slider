const slide = document.getElementById("slide");
const btnL = document.getElementById("btnL");
const btnR = document.getElementById("btnR");
let nCheck = 0;

function slide1() {
    slide.setAttribute("class","slide1");
    // setTimeout(slide2,7000);
    nCheck = 1;
}

function slide2() {
    slide.setAttribute("class","slide2");
    // setTimeout(slide3,7000);
    nCheck = 2;
}

function slide3() {
    slide.setAttribute("class","slide3");
    // setTimeout(slide1,7000);
    nCheck = 3;
}

slide1();

// 

btnL.addEventListener("click",changeSlideL);

function changeSlideL() {
    if(nCheck == 1) {
        slide3();
    } else if(nCheck == 2) {
        slide1();
    } else if(nCheck == 3) {
        slide2();
    }
}

btnR.addEventListener("click",changeSlideR);

function changeSlideR() {
    if(nCheck == 1) {
        slide2();
    } else if(nCheck == 2) {
        slide3();
    } else if(nCheck == 3) {
        slide1();
    }
}