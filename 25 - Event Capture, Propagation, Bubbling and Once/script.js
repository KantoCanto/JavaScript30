const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {

    console.log(this.classList.value);
    //e.stopPropagation(); //stops bubbling up giving only the last value
};

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    capture: false, //doesn't run capture, runs bubble down -- this is the default behaviour
    once: true //listen for a click and unbind itself -> same as saying div.removeEventListener('click', logText)
  })
);

button.addEventListener('click', () => {
    console.log('click!!!');
}, {once: true}); //could be used for store checkouts f.e.

