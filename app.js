//  Dom button
var startBtn = document.getElementById("start");
var pauseBtn = document.getElementById("pause");
var lapsBtn = document.getElementById("laps");
var reprendreBtn = document.getElementById("reprendre");
var stopBtn = document.getElementById("stop");

//chrono et laps
var stopwatchEl = document.querySelector(".stopwatch");
var liBtn = document.querySelector(".listlap");

// Dom chrono
var minuteChrono = document.getElementById("minute");
var secondChrono = document.getElementById("second");
var minsecondChrono = document.getElementById("minisecond");


var s = 0;
var m= 0;
var ms = 0;
var timer;



// Functions
function start(){
    startBtn.style.display  = "none";
    pauseBtn.style.display  = "inline-block";
    lapsBtn.style.display  = "inline-block";
    stopBtn.style.display  = "inline-block";

   
   if(!timer) {
       timer = setInterval(run, 10);
   }
}

function pause(){
    pauseBtn.style.display  = "none";
    lapsBtn.style.display  = "none";
    reprendreBtn.style.display  = "inline-block";

    stopTimer();
}

function reprendre(){
    reprendreBtn.style.display  ="none";
    lapsBtn.style.display ="inline-block";
    pauseBtn.style.display  = "inline-block";

    if(!timer) {
        timer = setInterval(run, 10);
    }
}


function stop(){
    reprendreBtn.style.display ="none";
    pauseBtn.style.display  = "none";
    lapsBtn.style.display  = "none";
    stopBtn.style.display  = "none";
    startBtn.style.display  = "inline-block"; 

    liBtn.innerHTML = "";

   
    stopTimer();
    m=0;
    s=0;
    ms=0;
    stopwatchEl.textContent = getTimer();
}

function laps() {
    
    if(timer) {
        var li = document.createElement("li");
        li.innerText = getTimer();
        liBtn.appendChild(li);
    }
}

// utilities fonction

function run(){
    stopwatchEl.textContent = getTimer();
    ms++;
    if(ms === 100) {
        ms = 0;
        s++;
    }
    if( s == 60) {
        s=0;
        m++;
    }
}


function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function getTimer() {
    return  (m<10 ? "0" + m : m) + " : " + (s<10 ? "0" + s : s ) + " : " + (ms<10 ? "0" + ms : ms );
}


// Abonnement
startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
reprendreBtn.addEventListener('click', reprendre);
stopBtn.addEventListener('click', stop);
lapsBtn.addEventListener('click', laps);
