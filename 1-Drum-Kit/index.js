function playSound(e) {
    // audio part
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    if (!audio) return;
    else {
        audio.currentTime = 0; // rewind to the start
        audio.play();
        // visual part
        const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
        key.classList.add('playing');
    }
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);