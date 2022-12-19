function setup() {
    const playerName = document.querySelector("[data-ask-name]");
    const searchParams = new URLSearchParams(window.location.search);
    playerName.innerText = searchParams.get("name")
}

window.addEventListener("load", setup)