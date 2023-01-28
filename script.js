const Days = document.getElementById('days');
const Hrs = document.getElementById('hours');
const Min = document.getElementById('min');
const Sec = document.getElementById('sec');

const currentTimeRec= new Date().getTime();

const newTime = new Date('october 27 2023 00:00:00');

function updateCountdownTime() {
    const currentTime = new Date();
    diff = newTime - currentTime;
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60)%24 ;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;

    days.innerHTML = d;
    hours.innerHTML= h<10 ? "0" +h:h;
    min.innerHTML= m<10 ? "0" +m:m;
    sec.innerHTML= s<10 ? "0" +s:s;
}

setInterval(updateCountdownTime, 1000);