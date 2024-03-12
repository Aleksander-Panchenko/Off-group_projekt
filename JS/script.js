const btnQwik = document.querySelector(".btn-fast");
const btnBox = document.querySelector(".btn-box");
const btnSend = document.querySelector(".btn-send");
let boxNumber = document.querySelectorAll(".header-bag-text-number")
const bagFontMini = document.querySelector(".header-bag-mini");
const bagMini = document.querySelector(".header-bag-mini-content");
const bagFont = document.querySelector(".header-bag-text");
const bag = document.querySelector(".header-bag");
const init = document.querySelector(".header-init");
const initMan = document.querySelector(".header-init-link");
const initText = document.querySelector(".header-init-text");
const telega = document.querySelector(".header-social-telega");
const wattsap = document.querySelector(".header-social-watsap");

let boxNumberStart = 1;

function qwickOrder () {
    boxNumber.forEach(boxN => {
        boxN.textContent = boxNumberStart;
    });
    boxNumberStart++;
}

function BlueBag () {
    bagFontMini.classList.add("header-bag-mini-active");
    bagMini.classList.add("header-bag-mini-content-active");
    bagFont.classList.add("header-bag-text-active");
    bag.classList.add("header-bag-active");
}

function blueInitOn () {
    initMan.classList.add("header-init-link-active");
    initText.classList.add("header-init-text-active");
}

function blueInitOff () {
    initMan.classList.remove("header-init-link-active");
    initText.classList.remove("header-init-text-active");
}

function telegaOn () {
    telega.classList.add("header-social-telega-active");
}

function telegaOff () {
    telega.classList.remove("header-social-telega-active");
}

function wattsapOn () {
    wattsap.classList.add("header-social-watsap-active");
}

function wattsapOff () {
    wattsap.classList.remove("header-social-watsap-active");
}

function btnYOn () {
    this.style = "background-color: #F4BF00;";
}

function btnYOff () {
    this.style = "background-color: #FFD230";
}

function btnBOn () {
    btnQwik.style = "background-color: #1648A8; color: #FFFFFF;"
}

function btnBOff () {
    btnQwik.style = "background-color: #FFFFFF; color: #1648A8;"
}

btnQwik.addEventListener("click" , qwickOrder);
btnBox.addEventListener("click" , qwickOrder);
btnQwik.addEventListener("click" , BlueBag);
btnBox.addEventListener("click" , BlueBag);
init.addEventListener("mouseover" , blueInitOn);
init.addEventListener("mouseout" , blueInitOff);
telega.addEventListener("mouseover" , telegaOn);
telega.addEventListener("mouseout" ,  telegaOff);
wattsap.addEventListener("mouseover" , wattsapOn);
wattsap.addEventListener("mouseout" ,  wattsapOff);
btnSend.addEventListener("mouseover" , btnYOn);
btnSend.addEventListener("mouseout" ,  btnYOff);
btnBox.addEventListener("mouseover" , btnYOn);
btnBox.addEventListener("mouseout" ,  btnYOff);
btnQwik.addEventListener("mouseover" , btnBOn);
btnQwik.addEventListener("mouseout" ,  btnBOff);