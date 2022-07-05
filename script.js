const slide = document.getElementById("slide");

function slide1() {
    slide.setAttribute("class","slide1");
    setTimeout(slide2,3000);
}

function slide2() {
    slide.setAttribute("class","slide2");
    setTimeout(slide3,3000);
}

function slide3() {
    slide.setAttribute("class","slide3");
    setTimeout(slide1,3000);
}

slide1();