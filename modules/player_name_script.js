
function onOkButtonClicked() {
    const nameField = document.querySelector("[data-ask-name]");
    if (nameField.value !== "" && nameField.value.length <= 7) {
        alert(`Welcome ${nameField.value}! Enjoy the game!`);
        window.location.href = `game_main_menu.html?name=${nameField.value}`
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

window.addEventListener("keypress", enterKeypress)

window.addEventListener("load", setup);