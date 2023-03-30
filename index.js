const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let millisecs = 0;

startBtn.addEventListener("click", () => {
    if(paused){       
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1);    
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused  = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);

    }
});
resetBtn.addEventListener("click", () => {
   
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    paused = true;
    hrs = 0;
    mins = 0;
    secs = 0;
    millisecs = 0;

    timeDisplay.textContent = `00:00:00:00`;

});

function updateTime(){

    elapsedTime = Date.now() - startTime;

    millisecs = Math.floor((elapsedTime % 1000) / 100);// every milisecond count(only goes upto 10) equivalent to 100ms
    secs = Math.floor( (elapsedTime / 1000) % 60);
    mins = Math.floor( (elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor( (elapsedTime / (1000 * 60 * 60)) % 24);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs); 

    timeDisplay.textContent = `${hrs}:${mins}:${secs}:${millisecs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
    
}