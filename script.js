const StartBtn = document.getElementById("StartBtn");
const ResetBtn = document.getElementById("ResetBtn");
const ContinueBtn = document.getElementById("ContinueBtn");
const RestartBtn =document.getElementById("RestartBtn");
const timeZone = document.getElementById("timeZone");
const miliSec = document.getElementById("miliSec");

let milliseconds = 0;
let seconds = 0;
let minutes = 0; 
let hours = 0;

let startTime = () =>{
   milliseconds +=10;
   if(milliseconds === 1000){
    milliseconds =0;
    seconds +=1;
    if(seconds == 60){
        minutes +=1;
        if(minutes == 60){
            hours +=1;
        }
   }
   }
   
   let millisecondsText = milliseconds< 100 ? "0"+"0" + milliseconds.toString() : milliseconds;
   let secondsText = seconds<10 ? "0" + seconds.toString() : seconds;
   let minutesText = minutes<10 ? "0" + minutes.toString() : minutes;
   let hoursText = hours<10 ? "0" + hours.toString() : hours;
   timeZone.textContent = hoursText + ":" + minutesText + ":" + secondsText ;
   miliSec.textContent = millisecondsText;
   
}
let intervalId =0;
StartBtn.addEventListener("click" , () =>{
    clearInterval(intervalId);
     intervalId = setInterval(startTime,10)
})

ResetBtn.addEventListener("click" , () =>{
    clearInterval(intervalId);
})

ContinueBtn.addEventListener("click" , () =>{
    clearInterval(intervalId);
    setInterval(startTime,10);
})

RestartBtn.addEventListener("click" , () =>{
    clearInterval(intervalId);
    seconds =0 ; 
    minutes = 0;
    hours = 0;
    setInterval(startTime,10);
})

