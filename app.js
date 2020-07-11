var min = 00;
var sec = 00;
var mSec = 00;
var minV = document.getElementById("min");
var secV = document.getElementById("sec");
var msecV = document.getElementById("msec");
var watchCount;

function couter(){
    mSec++;
    msecV.innerHTML = mSec;
    if(mSec === 100){
        sec++;
        secV.innerHTML = sec;
        mSec = 0;

    }
    else if(sec === 60){
        min++;
        minV.innerHTML = min;
        sec = 0;

    }

}
function startTime(){
    watchCount = setInterval(couter, 10); 
    document.getElementById("act-start-btn").style.display = "none";
    document.getElementById("act-stop-btn").style.display = "block";
    document.getElementById("dis-stop-btn").style.display = "none";
    document.getElementById("dis-start-btn").style.display = "block";
    document.getElementById("timer").className = "loader"
}
function stopTime(){
    clearInterval(watchCount); 
    document.getElementById("act-stop-btn").style.display = "none";
    document.getElementById("act-start-btn").style.display = "block";
    document.getElementById("dis-start-btn").style.display = "none";
    document.getElementById("dis-stop-btn").style.display = "block";
    document.getElementById("timer").className = "timer"
}
function resetTime(){
    
    minV.innerHTML = 00
    secV.innerHTML = 00
    msecV.innerHTML = 00

}

