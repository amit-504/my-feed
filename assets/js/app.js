
let toggleball = document.querySelector(".toggle-ball");

toggleball.addEventListener("click", function () {
    toggleball.classList.toggle("toggle-ball-right")
})


let menubar = document.querySelector(".menubar-feed-wallet");
let feed = document.querySelector(".nav-text-box ");

menubar.addEventListener("click", function () {
    feed.classList.toggle("feed-left")
})
