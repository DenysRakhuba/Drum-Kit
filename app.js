window.addEventListener("keydown", play);

function play(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0; // rewind audio to start
    audio.play();
}


const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}