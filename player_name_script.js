//Called when the button is clicked
function onOkButtonClicked() {
    const nameField = document.querySelector("[data-ask-name]");
    alert(`Welcome ${nameField.value}! Enjoy the game!`);
    window.location.href = `game_main_menu.html?name=${nameField.value}`
}
//Called when the page is loaded
function setup() {
    const okBtn = document.querySelector("[data-ok-button]");
    okBtn.addEventListener("click", onOkButtonClicked);
}
//Register setup to be called when the page have been loaded
window.addEventListener("load", setup);