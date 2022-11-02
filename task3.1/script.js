const trafficLightEl = document.querySelector('.trafficLight');

function makeGreen() {
    trafficLightEl.childNodes[5].style.background = 'green';
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightEl.childNodes[1].style.background = 'black';
}

function makeYellow() {
    trafficLightEl.childNodes[3].style.background = 'yellow';
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
    trafficLightEl.childNodes[5].style.background = 'black';
}

function makeRed() {
    trafficLightEl.childNodes[1].style.background = 'red';
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightEl.childNodes[3].style.background = 'black';
}

trafficLightEl.addEventListener('click', makeGreen);
