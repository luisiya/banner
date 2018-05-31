const slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 6000);
const arrowBtn = document.querySelector(".arrowRight");
const container = document.querySelector(".container");

function nextSlide() {

    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

container.addEventListener("click", function (event) {

    switch (event.target.id) {
        case "openSideBar1":

            sideBar1.style.animationName = "sideBarRight";
            sideBar1.style.visibility = "visible";
            arrowBtn.style.visibility = "hidden";
            openSideBar1.style.display = "none";
            break;
        case "hideSideBar1":
            sideBar1.style.animationName = "sideBarLeft";
            arrowBtn.style.visibility = "visible";


            break;
        case "hideSideBar2":
            sideBar2.style.animationName = "sideBarLeft";
            arrowBtn.style.visibility = "visible";

            break;
        case "hideSideBar3":
            sideBar3.style.animationName = "sideBarLeft";
            arrowBtn.style.visibility = "visible";

            break;
        case "hideSideBar4":
            sideBar4.style.animationName = "sideBarLeft";
            arrowBtn.style.visibility = "visible";

            break;
        case "openSideBar2":

            openSideBar2.style.visibility = "hidden";
            sideBar2.style.animationName = "sideBarRight";
            sideBar2.style.visibility = "visible";

            break;
        case "openSideBar3":
            openSideBar3.style.visibility = "hidden";
            sideBar3.style.animationName = "sideBarRight";
            sideBar3.style.visibility = "visible";
            break;
        case "openSideBar4":
            openSideBar4.style.visibility = "hidden";
            sideBar4.style.animationName = "sideBarRight";
            sideBar4.style.visibility = "visible";
            break;


        default:
            break;
    }
});

