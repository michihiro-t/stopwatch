const timer = document.getElementById("time");
const startBotton = document.getElementById("start");
const stopBotton = document.getElementById("stop");
const resetBotton = document.getElementById("reset");

let cnt = 1;
let timeId;


function startTimer(){
    timeId = setInterval(count,100);
    startBotton.setAttribute("disabled", true);
    stopBotton.removeAttribute("disabled");
    resetBotton.removeAttribute("disabled");
}

function count(){
    timer.textContent = timeString(cnt * 100);
    cnt++;
}


function stopTimer(){
    clearInterval(timeId);
    stopBotton.setAttribute("disabled",true);
    startBotton.removeAttribute("disabled");
}

function resetTimer(){
    clearInterval(timeId);
    timer.textContent = timeString(0); 
    cnt=1;
    startBotton.removeAttribute("disabled");
    stopBotton.setAttribute("disabled", true);
    resetBotton.setAttribute("disabled", true);
}

const timeString = time => `${
    Math.floor(time / 360000).toString()
}:${
    Math.floor(time / 60000).toString()
}:${
    Math.floor(time % 60000 / 1000).toString()
}:${
    Math.floor(time % 1000).toString().slice(0, 1)
}`;