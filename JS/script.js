const btnQwik = document.querySelector(".btn-fast");
const btnBox = document.querySelector(".btn-box");
const btnSend = document.querySelector(".btn-send");
let boxNumber = document.querySelectorAll(".header-bag-text-number")

let boxNumberStart = 1;

function qwickOrder () {
    boxNumber.forEach(boxN => {
        boxN.textContent = boxNumberStart;
    });
    boxNumberStart++;
    console.log(boxNumberStart);
}

btnQwik.addEventListener("click" , qwickOrder);
btnBox.addEventListener("click" , qwickOrder);