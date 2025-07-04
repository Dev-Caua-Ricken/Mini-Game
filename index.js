let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip_button");
let resetBtn = document.querySelector("#reset_button");

flipBtn.addEventListener("click", ()=>{
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "nome";
    if (i) {
        setTimeout(function () {
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    } else {
        setTimeout(function () {
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
}
    setTimeout(updateStats, 3000);
    disableButton();
    }
);

function updateStats(){
    document.querySelector("#heads_count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails_count").textContent = `Tails: ${tails}`;
}

function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
})