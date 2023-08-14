//listening for a keyUP event

//1st: get element we are listening for -- window
//2nd: listent to the KEYDOWN event
//3rd: when that event happens, we trigger the function

function playSound(e) {

    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    //get the key thay is being pressed
    const key = document.querySelector(`.key[data-key=${e.code}]`);

    if(!audio) return; //stops the function from running if there is no audio element

    audio.currentTime = 0; //rewind to start, allowing us to spam a sound without it neediing finish the entire duration
    audio.play(); //play the audio

    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip if its not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown", playSound);