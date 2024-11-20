const euroDate = "9 Jun 2028";
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minuntesEl = document.getElementById('minutes'); 
const secondsEl = document.getElementById('seconds');

function countdown() {
    const destDate = new Date(euroDate);
    const currentDate = new Date();

    const totalSeconds = (destDate - currentDate) / 1000;

    const days  = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60 ) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minuntesEl.innerHTML = formatTime(minutes); 
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`;
    } else return time;
}

countdown();

setInterval(countdown, 1000);

