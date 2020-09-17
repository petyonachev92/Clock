setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

let hours = 0

function setClock(){
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    hours = currentDate.getHours()
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
    document.querySelector('[date]').textContent = currentDate.getDate();
    
}

function greeting() {
    let greet = ''
    if(hours >= 5 && hours < 10) {
        greet = 'Добро утро!'
    } else if (hours >= 10 && hours < 18) {
        greet = 'Добър ден!'
    } else if (hours >= 18 && hours <= 23){
        greet = 'Добър вечер!'
    } else {
        greet = 'Не спиш ли?'
    }
    
    let paragraph = document.createElement('p')
    let t = document.createTextNode(greet)
    paragraph.innerHTML = greet
    document.getElementsByClassName('greeting')[0].append(paragraph)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
greeting()

