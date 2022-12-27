const playerPortrait = document.querySelectorAll("[data-player-portrait]")
let isPortraitChoosen = false;
let choosenPortrait;
function onOkButtonClicked() {
    const nameField = document.querySelector("[data-ask-name]");
    if (nameField.value !== "" && nameField.value.length <= 7 && isPortraitChoosen === true) {
        alert(`Welcome ${nameField.value}! Enjoy the game!`);
        window.location.href = `game_main_menu.html?name=${nameField.value}&portrait=${choosenPortrait.dataset.portraitName}`
    } else {
        alert("Name must be 7 characters or less!")
    }
}
function setup() {
    const okBtn = document.querySelector("[data-ok-button]");
    okBtn.addEventListener("click", onOkButtonClicked);
}

function enterKeypress(e) {
    if (e.key === "Enter") {
        onOkButtonClicked();
    }
}

playerPortrait.forEach((portrait)=> {
    portrait.addEventListener("click", function() {
        if (isPortraitChoosen === false) {
            portrait.style.filter = "none";
            isPortraitChoosen = true;
            console.log("clicked");
            choosenPortrait = portrait;
            console.log(choosenPortrait)
            console.log(choosenPortrait.dataset)
            console.log(choosenPortrait.dataset.portraitName)
        }
        
    })
})



window.addEventListener("keypress", enterKeypress);

window.addEventListener("load", setup);