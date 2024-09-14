var d,h,m,s;
var ts;
var x;
var stat=true;
function updateTimer(){
    document.getElementById("days").innerHTML = (d<10)?`0${d}`:d;
    document.getElementById("hours").innerHTML = (h<10)?`0${h}`:h;
    document.getElementById("mins").innerHTML = (m<10)?`0${m}`:m;
    document.getElementById("secs").innerHTML = (s<10)?`0${s}`:s;
}

function setTimer(){
    d = parseInt(document.getElementById("daysIn").value);
    h = parseInt(document.getElementById("hoursIn").value);
    m = parseInt(document.getElementById("minsIn").value);
    s = parseInt(document.getElementById("secsIn").value);
    ts = (d*24*60*60)+(h*60*60)+(m*60)+s;
    console.log(ts);
    updateTimer();
}

function start(){
    document.getElementById("daysIn").value = "00";
    document.getElementById("hoursIn").value = "00";
    document.getElementById("minsIn").value = "00";
    document.getElementById("secsIn").value = "00";
    x = setInterval(function() {
        ts--;
        if(ts <= 0){
            stop();
        }
        d = Math.floor(ts/(60*60*24));
        h = Math.floor((ts%(60*60*24))/(60*60));
        m = Math.floor((ts%(60*60))/(60));
        s = Math.floor(ts%(60));
        updateTimer();
    },1000);
}

function stop(){
    clearInterval(x);
}

function reset(){
    d = 0;
    h = 0;
    m = 0;
    s = 0;
    clearInterval(x);
    updateTimer();
}