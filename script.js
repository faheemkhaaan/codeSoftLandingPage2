const hambuger = document.querySelector(".hambuger");
const navBar = document.querySelector(".navBar");

hambuger.onclick = function () {
    navBar.classList.toggle("visible")
}