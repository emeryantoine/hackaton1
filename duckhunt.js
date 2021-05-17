var startBtn = document.querySelector(".start");
var gameStarted = false;
var counter = document.querySelector(".counter");
var tlo = document.querySelector(".board");
var time = 0;
var cnt = 0;

function masquage() {
    let container_Elt = document.getElementById('masquage');
    container_Elt.classList.add("masquage");
    container_Elt.classList.remove("visible");
}

function createDuck(){
    var duck = document.createElement("div");
    duck.style.animationDuration = "0.1s, " + Math.floor((Math.random() * 10) + 5) + "s";

    duck.classList.add("duck");
    duck.classList.add("animationDuration");
    
    var bottom = Math.floor((Math.random() * 1000) + -100);
    /*var bottom = 0*/
    duck.style.bottom = bottom + "px";
    duck.style.zIndex = 2000 - bottom;
    tlo.appendChild(duck);
    DucksKilled(duck);
}

startBtn.addEventListener("click", function duckduck() {
    if (!gameStarted) {
        time = setInterval(createDuck, 500);
        gameStarted = true;
    }
});

function DucksKilled(a) {
    a.addEventListener("click", function () {
        this.parentElement.removeChild(this);
        cnt++;
        counter.innerText = cnt;
    });
}
