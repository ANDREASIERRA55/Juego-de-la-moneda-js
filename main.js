const coinBtn = document.getElementById("flip-btn")
const tailsCounterElement = document.getElementById("tails-counter");
const headsCounterElement = document.getElementById("heads-counter");

let tailsCounter = 0;
let headsCounter = 0;

coinBtn.addEventListener("click", throwACoin);

function throwACoin() {
    const coin = document.getElementById("coin")
    let headsTails = Math.floor(Math.random() * 2);
    //el Math.floor es para quitar decimales.
    coin.style.animation = "none"
    // coin.style none es para que no haya animacion inicial"
    if (headsTails == 0) {
        headsCounter ++
        setTimeout(() => {
            coin.style.animation = "flip-heads 3s forwards";
        }, 100);
    }
    if (headsTails == 1) {
        tailsCounter ++
        setTimeout(() => {
            coin.style.animation = "flip-tails 3s forwards";
        }, 100);
    }
    setTimeout(()=> {
        headsCounterElement.innerHTML = headsCounter;
        tailsCounterElement.innerHTML = tailsCounter;
    }, 3000);
}

function resetCounters() {
    tailsCounter = 0;
    headsCounter = 0;
    tailsCounterElement.innerHTML = headsCounter;
    headsCounterElement.innerHTML = headsCounter;
}

    


