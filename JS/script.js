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
const telegaFooter = document.querySelector(".footer-social-link-telega");
const wattsapFooter = document.querySelector(".footer-social-link-wattsap");
const telegaFooterMini = document.querySelector(".footer-social-link-telega-mini");
const wattsapFooterMini = document.querySelector(".footer-social-link-wattsap-mini");
const menuBtn = document.querySelector(".menu-mini-spanblock");
const menuXBtn = document.querySelector(".menu-btn-x")
const menu = document.querySelector(".menu");
const docBtn1 = document.querySelector(".content-down-top-btn1");
const docBtn2 = document.querySelector(".content-down-top-btn2");
const doc1 = document.querySelector(".content-down-info");
const doc2 = document.querySelector(".content-down-docs");
const slider = document.querySelector(".slider-list");
const pagination = document.querySelectorAll(".pagination");

let boxNumberStart = 1;

let slideNumber = 0;
const paginationArr = Array.from(pagination);

function sliderMove (evt) {
    const target = evt.currentTarget;
    pagination.forEach(function(item) {
        item.classList.remove("pag-active")
    });
    target.classList.add("pag-active");
    slideNumber = paginationArr.indexOf(target);
    slider.style = `margin-left: -${100*slideNumber}%`
}

pagination.forEach(n => {
    n.addEventListener("click" , sliderMove)
})

function docsOpen () {
    docBtn1.classList.remove("content-down-top-btn1-active");
    docBtn2.classList.add("content-down-top-btn1-active");
    doc1.style = "display: none;"
    doc2.style = "display: block;"
}

function docsClose () {
    docBtn2.classList.remove("content-down-top-btn1-active");
    docBtn1.classList.add("content-down-top-btn1-active");
    doc2.style = "display: none;"
    doc1.style = "display: block;"
}

function menuOpen () {
    menu.classList.add("menu-open");
}

function menuClose () {
    menu.classList.remove("menu-open");
}

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
    this.classList.add("header-social-telega-active");
}

function telegaOff () {
    this.classList.remove("header-social-telega-active");
}

function wattsapOn () {
    this.classList.add("header-social-watsap-active");
}

function wattsapOff () {
    this.classList.remove("header-social-watsap-active");
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
telegaFooter.addEventListener("mouseover" , telegaOn);
telegaFooter.addEventListener("mouseout" ,  telegaOff);
wattsapFooter.addEventListener("mouseover" , wattsapOn);
wattsapFooter.addEventListener("mouseout" ,  wattsapOff);
telegaFooterMini.addEventListener("mouseover" , telegaOn);
telegaFooterMini.addEventListener("mouseout" ,  telegaOff);
wattsapFooterMini.addEventListener("mouseover" , wattsapOn);
wattsapFooterMini.addEventListener("mouseout" ,  wattsapOff);
menuBtn.addEventListener("click" , menuOpen);
menuXBtn.addEventListener("click" , menuClose);
docBtn2.addEventListener("click" , docsOpen);
docBtn1.addEventListener("click" , docsClose);
