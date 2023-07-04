const startBtn = document.querySelector("button[data-start]");
console.log(startBtn);
const stopBtn = document.querySelector("button[data-stop]");
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  let timerId;
  stopBtn.disabled=true;
  startBtn.addEventListener('click', ()=>{
    if (!timerId) {
        timerId=setInterval(()=>{document.body.style.backgroundColor=getRandomHexColor()}, 1000);
        startBtn.disabled=true;
        stopBtn.disabled=false;
    }
    });
    stopBtn.addEventListener('click', ()=>{
   if (timerId) {
    clearInterval(timerId);
    timerId=null;
            startBtn.disabled=false;
            stopBtn.disabled=true;
   }
            })
    