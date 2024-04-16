// Menu button click
const element = document.querySelector(".js-menu-button");

element.addEventListener("click", function (event) {
    event.preventDefault();
    const isActive = event.target.classList.contains("active");
    const boxMenu = document.querySelector(".js-menu-box");
    if(isActive) {
        event.target.classList.remove("active");
        boxMenu.classList.remove("active");
    } else {
        event.target.classList.add("active");
        boxMenu.classList.add("active");
    }
})